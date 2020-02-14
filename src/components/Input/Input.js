import React, { useRef } from "react";
import "./Input.scss";

export default function Input({ handleSubmit }) {
  const titleRef = useRef();

  function handleClick() {
    const t = titleRef.current.value;
    handleSubmit(t);
    titleRef.current.value = "";
  }

  return (
    <>
      <div className="input">
        <div className="input__form">
          <div className="input__form__item">
            <div className="item__input">
              <input
                ref={titleRef}
                type="text"
                name="name"
                placeholder="Drink Name"
              />
            </div>
          </div>
          <div className="input__form__search" onClick={handleClick}>
            Search
          </div>
        </div>
      </div>
    </>
  );
}
