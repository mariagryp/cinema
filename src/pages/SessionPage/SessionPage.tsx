import { useSelector } from "react-redux";
import { Header } from "../../components/Header";
import { InfoTable } from "../../components/InfoTable";
import { SeatsSelect } from "../../components/Seats";
import style from "./SessionPage.module.scss";
import { RootState } from "../../store";
import { clearOrder, OrderState } from "../../slices";
import classNames from "classnames";
import { useParams } from "react-router-dom";
import { useGetMovieByIdQuery, useGetSessionByIdQuery } from "../../api";
import { Title } from "../../components/Title";
import { useUpdateSeatsByIdMutation } from "../../api/order";
import { OrderData } from "../../types";
import { useEffect, useRef, useState } from "react";

export const SessionPage = () => {
  /* link to img  */
  const imgRef = useRef<HTMLImageElement>(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [qrCode, setQrCode] = useState("");
  const params = useParams();
  const { isLoading, data: sessionData } = useGetSessionByIdQuery(
    params.sessionId!
  );
  const { data: movieData } = useGetMovieByIdQuery(params.movieId!);
  /* console.log("movieData", movieData);
  console.log("sessionData, data"); */
  const [buyTicket, { isSuccess }] = useUpdateSeatsByIdMutation();
  const { order } = useSelector((state: RootState) => state);
  const price = 119;
  const seatsCount = order.seats.length;
  const totalPrice = price * seatsCount;

  const getOrderInfo = (order: OrderState) => {
    return order.seats.map(({ row, seat }, i) => ({
      label: `Ticket ${i + 1}`,
      value: `Row ${row} / seat ${seat}`,
    }));
  };
  /*  console.log("isSuccess", isSuccess); */
  useEffect(() => {
    if (isSuccess) {
      const dataForQrCode = encodeURI(
        JSON.stringify({
          movie: movieData?.title,
          time: sessionData?.time,
          sessionId: sessionData?.id,
          seats: order.seats,
          total_price: totalPrice,
        })
      );
      console.log(dataForQrCode);
      setQrCode(
        `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${dataForQrCode}`
      );
    }
  }, [isSuccess]);
  useEffect(() => {
    if (qrCode) {
      //generera qr code
      if (imgRef.current) {
        imgRef.current.src = qrCode;
      }
    }
  }, [qrCode]);

  if (isLoading) return <Title center>Loading empty seats ...</Title>;

  const getSessionInfo = (movie: string, time: string) => {
    return [
      {
        label: "Name ",
        value: movie,
      },
      {
        label: "Begins at: ",
        value: time,
      },
    ];
  };

  const getPriceInfo = (count: number, price: number) => {
    return [
      {
        label: "Quantity",
        value: count,
      },
      {
        label: "Price",
        value: `${price} SEK`,
      },
    ];
  };

  const handleClick = () => {
    const boughtSeats = sessionData?.seat?.bought_seats || [];
    const orderData: OrderData = {
      id: sessionData?.seatId!,
      bought_seats: [...boughtSeats, ...order.seats],
    };
    buyTicket(orderData);
    setIsDisabled(true);
  };

  if (!sessionData || !movieData) return null;

  return (
    <div className={style.SessionPage}>
      <Header title="Buy a ticket" />
      <div className={style.content}>
        <SeatsSelect boughtSeats={sessionData?.seat?.bought_seats} />
        <div className={style.info}>
          <InfoTable data={getSessionInfo(movieData.title, sessionData.time)} />
          {/* Price info block */}
          {!!seatsCount && (
            <div className={style.info}>
              <h3 className={style.title}>Your order : </h3>
              <InfoTable data={getOrderInfo(order)} />
              <div className={style.info}>
                <InfoTable data={getPriceInfo(seatsCount, price)} />
              </div>
              <div className={style.priceInfo}>
                <span className={style.priceLabel}>Total order : </span>
                <strong>{totalPrice} SEK</strong>
              </div>

              {!qrCode && (
                <div
                  className={classNames(style.buyBtn, "hover", {
                    [style.disable]: isDisabled,
                  })}
                  onClick={handleClick}
                >
                  Buy
                </div>
              )}
            </div>
          )}
          {!seatsCount && <h3 className={style.title}>Choose your seats: </h3>}
          {qrCode && (
            <div className={style.qr}>
              <img ref={imgRef} src="" alt="QR Code" />
            </div>
          )}

          {/* *** */}
          {/*       <div className={style.info}>
          <h3 className={style.title}>Total price:</h3>
          <InfoTable data={getPriceInfo(order.seats.length, price)} />
        </div>

        <div className={style.total}>
          <div className={style.priceInfo}>
            <span className={style.priceLabel}>Total order:</span>
            {order.seats.length * price} :-
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
};
