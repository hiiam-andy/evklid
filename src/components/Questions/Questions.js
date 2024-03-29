import React from "react";
import Accordion from "./Accordion";
import { data } from "./AccordionData";

import style from "../../styles/Questions.module.css";

export default function Questions() {
  return (
    <div className={style.sectionQuestions}>
      <div className="container">
        <h1 className={style.heading}>Часто задаваемые вопросы</h1>

        <div className={style.accordion}>
          {data.map(({ title, content }) => (
            <Accordion title={title} content={content} key={title} />
          ))}
        </div>
      </div>
    </div>
  );
}
