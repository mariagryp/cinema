import classNames from "classnames";
import style from "./SeatsSelect.module.scss";
import { Seat } from "./components/Seat";

export const SeatsSelect = () => {
  let seatId = 1;
  let resetIdx = 0;
  let resetNums = [4, 6, 5];
  const emptyCells = [2, 3, 4, 5, 6, 12, 13, 14, 18, 19, 25, 26];

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
                return <div />;
              } else {
                const classes = classNames("icon-seat", {
                  [style.available]: seatId !== 3 && seatId !== 5,
                  [style.reserved]: seatId === 3,
                  [style.selected]: seatId === 5,
                });

                const data = {
                  id: seatId,
                  num: seatId,
                  status: seatId !== 3 ? "available" : "reserved",
                };
                if (seatId === resetNums[resetIdx] || seatId === 9) {
                  seatId = 1;
                  resetIdx++;
                } else {
                  seatId++;
                }
                return (
                  <Seat
                    key={`${seatId}=${Date.now()}`}
                    className={classes}
                    data={data}
                  />
                );
              }

              /* 
              const emptyCells = [
                0, 1, 7, 8, 9, 10, 11, 15, 16, 17, 18, 19, 25, 26,
              ]; */

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
