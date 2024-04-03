"use client";

import React, { useState } from "react";
import classes from "./index.module.scss";

type propsInput = {
  name?: string;
  text: string;
  bgColor?: string;
  typeInput?: "text" | "password";
};

const Input = ({ name, text, bgColor, typeInput }: propsInput) => {
  const [inputValue, setInputValue] = useState("");

  const [isInputFocus, setIsInputFocus] = useState(false);

  const handleBlur = () => {
    if (inputValue === "") {
      setIsInputFocus(false);
    }
  };

  return (
    <label htmlFor={text} className={classes.label}>
      <input
        className={classes.input}
        type='text'
        name={text}
        id={text}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={() => setIsInputFocus(true)}
        onBlur={handleBlur}
      />
      <span
        className={`${classes.span} ${
          isInputFocus ? classes.span_active : classes.span_inactive
        } `}
      >
        {text}
      </span>
    </label>
  );
};

export default Input;
