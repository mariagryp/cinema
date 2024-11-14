import classNames from "classnames";
import style from "./SeatsSelect.module.scss";

export const SeatsSelect = () => {
  return (
    <div className={style.SeatsSelect}>
      <div className={style.display}>
        <i className="icon-display"></i>
        <span>Display</span>
      </div>

      <div className={style.hall}>
        <div className={style.left}>
          {Array(7)
            .fill(0)
            .map((item, i) => (
              <div key={`${i} - ${Date.now()}`} className={style.left}>
                {i + 1}
              </div>
            ))}
        </div>
        <div className={style.seats}>
          {Array(63)
            .fill(0)
            .map((item, i) => (
              <div className={style.seats}>
                <i key={`${i} - ${Date.now()}`} className="icon-seat" />
                <span className={style.seatNum}>{i + 1}</span>
              </div>
            ))}
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
