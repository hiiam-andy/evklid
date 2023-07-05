import React from "react";
import style from "../../styles/MyModal.module.css";
import FooterForm from "../Footer/FooterForm";

const MyModal = ({ visible, setVisible }) => {
  const rootClasses = [style.myModal];

  if (visible) {
    rootClasses.push(style.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div
        className={style.myModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <FooterForm />
      </div>
    </div>
  );
};

export default MyModal;
