import React, { useState } from "react";
import { stepOne, stepTwo, stepThree, stepFour } from "./HowWeWorkData";

import style from "../../styles/HowWeWorks.module.css";
import HowWeWorkItem from "./HowWeWorkItem";

export default function HowWeWorks() {
  const [step, setStep] = useState("step1");

  let res = "";

  switch (step) {
    case "step1":
      res = (
        <HowWeWorkItem
          title={stepOne.title}
          body={stepOne.body}
          image={stepOne.image}
        />
      );
      break;
    case "step2":
      res = (
        <HowWeWorkItem
          title={stepTwo.title}
          body={stepTwo.body}
          image={stepTwo.image}
        />
      );
      break;
    case "step3":
      res = (
        <HowWeWorkItem
          title={stepThree.title}
          body={stepThree.body}
          image={stepThree.image}
        />
      );
      break;
    case "step4":
      res = (
        <HowWeWorkItem
          title={stepFour.title}
          body={stepFour.body}
          image={stepFour.image}
        />
      );
      break;
    default:
  }

  const changeStep = (e) => {
    setStep(e.target.value);
  };

  return (
    <div className={style.sectionWork}>
      <h1 className={style.heading}>Как мы работаем</h1>
      <div className={style.navigation}>
        <label className={style.stepBtn}>
          1 Шаг
          <input
            style={{ display: "none" }}
            type="radio"
            name="radio"
            value="step1"
            onChange={changeStep}
          />
        </label>
        <label className={style.stepBtn}>
          2 Шаг
          <input
            style={{ display: "none" }}
            type="radio"
            name="radio"
            value="step2"
            onChange={changeStep}
          />
        </label>
        <label className={style.stepBtn}>
          3 Шаг
          <input
            style={{ display: "none" }}
            type="radio"
            name="radio"
            value="step3"
            onChange={changeStep}
          />
        </label>
        <label className={style.stepBtn}>
          4 Шаг
          <input
            style={{ display: "none" }}
            type="radio"
            name="radio"
            value="step4"
            onChange={changeStep}
          />
        </label>
      </div>
      {res}
    </div>
  );
}
