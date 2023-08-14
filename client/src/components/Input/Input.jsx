import React from "react";

const Input = (props) => {
  return (
    <>
      {props.data.map((el, index) => (
        <div key={index}>
          <input type={el.type} placeholder={el.text}></input>
        </div>
      ))}
    </>
  );
};

export default Input;
