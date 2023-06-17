import React from 'react'

import style from '../styles/About.module.css'

export default function About() {
  return (
    <div className={style.sectionAbout}>
    <div className={style.info}>
        <h1 className={style.heading}>О нас</h1>
        <p className={style.text}>Также как перспективное планирование создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса экспериментов, поражающих по своей масштабности и грандиозности. А также диаграммы связей могут быть описаны максимально подробно. Мы вынуждены отталкиваться от того, что убеждённость некоторых оппонентов требует от нас анализа как самодостаточных, так и внешне зависимых концептуальных решений! Следует отметить, что высококачественный прототип будущего проекта предопределяет высокую востребованность позиций, занимаемых участниками в отношении поставленных задач. Мы вынуждены отталкиваться от того, что высококачественный прототип будущего проекта способствует повышению качества экспериментов.</p>
    </div>
    <div className={style.content}>
        <div className={style.bigCard}>
                    <p className={style.bigCard__text}>Принимая во внимание показатели успешности, перспективное планирование способствует подготовке и реализации новых принципов. 
                        <button className={style.bigCard__btn}>Подробнее</button></p>                
        </div>
        <div className={style.smallCards}>
                <div className={style.smallCard}>
                    <div className={style.smallCard__text}>
                        <h2 className={style.smallCard__heading}>Консультация с широким активом</h2>
                        <div className={style.smallCard__text}>А также свежий взгляд на привычные вещи - 
                            безусловно открывает новые горизонты для как самодостаточных, так и внешне зависимых концептуальных решений.</div>
                    </div>
                </div>
                <div className={style.smallCard}>
                    <div className={style.smallCard__text}>
                        <h2 className={style.smallCard__heading}>В своём стремлении повысить </h2>
                        <p className={style.smallCard__text}>Качество жизни, они забывают, 
                            что сплочённость команды профессионалов представляет собой интересный эксперимент проверки прогресса профессионального сообщества. </p>
                    </div>
                </div>
        </div>
    </div>
</div>
  )
}
