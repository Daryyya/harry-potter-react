import React from "react";
import style from "./style.module.scss";

const Card = ({
  image,
  actor,
  name,
  gender,
  house,
  wand,
  alive,
}) => {
  return (
    <div className={style.card}>
      <label
        className={style.check}
      >
        <input className={style.check__input} type="checkbox" />
        <span className={style.check__box}></span>
      </label>
      <div className={style.card__img}>
        <img className={style.image} src={image} width={334} height={192} />
      </div>
      <div className={style.card__wrapper}>
        <h3 className={style.title}>{name}</h3>
        <p className={style.card__info}>{`Actor: ${actor}`}</p>
        <p className={style.card__info}>{`Gender: ${gender}`}</p>
        <p className={style.card__info}>{`House: ${house}`}</p>
        <p className={style.card__info}>{`Wand core: ${wand}`}</p>
        <p className={style.card__info}>{`Alive: ${alive ? "yes" : "no"}`}</p>
      </div>
    </div>
  );
};

export default Card;
