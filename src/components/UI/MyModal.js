import React from "react";
import cl from "../../styles/MyModal.module.css";
import FooterForm from "../Footer/FooterForm";

const MyModal = ({ visible, setVisible }) => {
  const rootClasses = [cl.myModal];

  if (visible) {
    rootClasses.push(cl.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
        <FooterForm />
      </div>
    </div>
  );
};

export default MyModal;
