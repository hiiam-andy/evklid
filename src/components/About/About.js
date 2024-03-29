import React from "react";
import { useNavigate } from "react-router-dom";

import style from "../../styles/About.module.css";
import SmallCard from "./SmallCard";
import { ABOUT_ROUTE } from "../../Pages/PAGES";

export default function About() {
  const smalCardsContent = [
    {
      image: require("../../img/smallCard1.png"),
      alt: "img1",
      title: "Консультация с широким активом",
      body: "А также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для как самодостаточных, так и внешне зависимых концептуальных решений",
    },
    {
      image: require("../../img/smallCard2.png"),
      alt: "img2",
      title: "В своём стремлении повысить",
      body: "Качество жизни, они забывают, что сплочённость команды профессионалов представляет собой интересный эксперимент проверки прогресса профессионального сообщества.",
    },
  ];
  const smallCards = smalCardsContent.map((smalCard) => {
    return (
      <SmallCard
        key={smalCard.title}
        title={smalCard.title}
        body={smalCard.body}
        image={smalCard.image}
        alt={smalCard.alt}
      />
    );
  });

  const navigate = useNavigate();
  return (
    <div className={style.sectionAbout}>
      <div className="container">
        <div className={style.info}>
          <h1 className={style.heading}>О нас</h1>
          <p className={style.text}>
            Также как перспективное планирование создаёт необходимость включения
            в производственный план целого ряда внеочередных мероприятий с
            учётом комплекса экспериментов, поражающих по своей масштабности и
            грандиозности. А также диаграммы связей могут быть описаны
            максимально подробно. Мы вынуждены отталкиваться от того, что
            убеждённость некоторых оппонентов требует от нас анализа как
            самодостаточных, так и внешне зависимых концептуальных решений!
            Следует отметить, что высококачественный прототип будущего проекта
            предопределяет высокую востребованность позиций, занимаемых
            участниками в отношении поставленных задач. Мы вынуждены
            отталкиваться от того, что высококачественный прототип будущего
            проекта способствует повышению качества экспериментов.
          </p>
        </div>
        <div className={style.content}>
          <div className={style.bigCard}>
            <p className={style.bigCard__text}>
              Принимая во внимание показатели успешности, перспективное
              планирование способствует подготовке и реализации новых принципов.
              <button
                className={style.bigCard__btn}
                onClick={() => navigate(ABOUT_ROUTE)}
              >
                Подробнее
              </button>
            </p>
          </div>
          <div className={style.smallCards}>{smallCards}</div>
        </div>
      </div>
    </div>
  );
}
