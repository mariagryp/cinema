import { useSelector } from "react-redux";
import { Header } from "../../components/Header";
import { InfoTable } from "../../components/InfoTable";
import { SeatsSelect } from "../../components/Seats";
import style from "./SessionPage.module.scss";
import { RootState } from "../../store";
import { OrderState } from "../../slices";
import classNames from "classnames";
import { useParams } from "react-router-dom";

export const SessionPage = () => {
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

  return (
    <div className={style.SessionPage}>
      <Header title="Buy a ticket" />
      <div className={style.content}>
        <SeatsSelect />
        {/* Price info block */}

        {!!seatsCount && (
          <div className={style.info}>
            <h3 className={style.title}>Your order : </h3>
            <InfoTable data={getOrderInfo(order)} />
            <InfoTable data={getPriceInfo(seatsCount, price)} />
            <div className={style.priceInfo}>
              <span className={style.priceLabel}>Total order : </span>
              <strong>{totalPrice} SEK</strong>
            </div>
            <div className={classNames(style.buyBtn, "hover")}>Buy</div>
          </div>
        )}
        {!seatsCount && <h3 className={style.title}>Choose your seats: </h3>}

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
  );
};
