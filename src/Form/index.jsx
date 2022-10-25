import React from "react";
import style from "./style.module.scss";

const Form = ({setInputValue, setSelectValue}) => {
  return (
    <form className={style.form}>
      <label className={style.form__label}>
        Name
        <input onChange={(event) => setInputValue(event.target.value.toLowerCase().trim())} className={style.form__input} type="text" />
      </label>
      <label className={style.form__label}>
        School
        <select onChange={(event) => setSelectValue(event.target.value.toLowerCase().trim())} className={style.form__select}>
          <option checked value="">
            Choose house
          </option>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Slytherin">Slytherin</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
        </select>
      </label>
    </form>
  );
};

export default Form;
