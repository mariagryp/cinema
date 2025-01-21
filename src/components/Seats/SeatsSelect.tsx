import classNames from "classnames";
import style from "./SeatsSelect.module.scss";
import { Seat } from "./components/Seat";
import { Seat as ISeat } from "../../types";

type BoughtSeats = ISeat[] | undefined;

interface SeatsSelectProps {
  boughtSeats: BoughtSeats;
}

export const SeatsSelect = ({ boughtSeats }: SeatsSelectProps) => {
  let seat = 1;
  let row = 1;
  let resetNums = [4, 6, 5];
  const emptyCells = [2, 3, 4, 5, 6, 12, 13, 14, 18, 19, 25, 26];

  const isReservedSeat = (
    row: number,
    seat: number,
    boughtSeats: BoughtSeats
  ) => {
    return boughtSeats?.some(
      (boughtSeat) => boughtSeat.row === row && boughtSeat.seat === seat
    );
  };

  return (
    <div className={style.SeatsSelect}>
      {/* display block */}
      <div className={style.display}>
        <i className="icon-display"></i>
        <span>Display</span>
      </div>
      {/* numbers rows */}
      <div className={style.hall}>
        <div className={style.left}>
          {Array(7)
            .fill(0)
            .map((item, i) => (
              <div key={`${i} - ${Date.now()}`} className={style.row}>
                {i + 1}
              </div>
            ))}
        </div>
        {/* seats */}
        <div className={style.seats}>
          {Array(63)
            .fill(0)
            .map((item, i) => {
              if (emptyCells.includes(i)) {
                return <div key={`${i}-{Math.random()}`} />;
              } else {
                const seatData = {
                  id: seat,
                  row,
                  seat,
                  status: isReservedSeat(row, seat, boughtSeats)
                    ? "reserved"
                    : "available",
                };

                // Сохраняем текущие данные о месте
                const currentSeat = seat;
                const currentRow = row;

                if (seat === resetNums[row - 1] || seat === 9) {
                  seat = 1;
                  row++;
                  //seatData.row = row; // !!! Ошибка: здесь row уже изменен и поэтому ошибка в рядах
                } else {
                  seat++;
                }
                return (
                  <Seat key={`${currentRow}-${currentSeat}`} data={seatData} />
                );
              }

              /* 
              const emptyCells = [
                0, 1, 7, 8, 9, 10, 11, 15, 16, 17, 18, 19, 25, 26,
              ]; *
              /*  const emptyCells = [2, 3, 4, 5, 6, 12, 13, 14, 18, 19, 25, 26];
              return emptyCells.includes(i) ? (
                <div />
              ) : (
                <Seat
                  key={`${i}=${Date.now()}`}
                  className={classes}
                  data={data}
                />
              ); */
            })}
        </div>
      </div>
      {/* info */}
      <div className={style.info}>
        <div className={classNames(style.infoItem, style.available)}>
          <i className="icon-dot" />
          <span>Available</span>
        </div>
        <div className={classNames(style.infoItem, style.reserved)}>
          <i className="icon-dot" />
          <span>Reserved</span>
        </div>
        <div className={classNames(style.infoItem, style.selected)}>
          <i className="icon-dot" />
          <span>Selected</span>
        </div>
        <div className={style.infoItem}></div>
        <div className={style.infoItem}></div>
      </div>
    </div>
  );
};
