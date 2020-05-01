import React, { useState } from "react";
import style from "./style.module.css";

const InputForm = ({ getInputData }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    getInputData(inputValue);
    setInputValue("");
  };

  return (
    <div className={style.form_container}>
      <div>Enter your location : </div>
      <form action="" onSubmit={handleSubmit}>
        <input
          className={style.input}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default InputForm;
