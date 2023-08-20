import React from "react";
import TextField from "@mui/material/TextField";

const Input = ({ data, setInp, inp }) => {
  function changeInp(event) {
    setInp({...inp, [event.target.name]:event.target.value});
  }

  return (
    <>
      {data.map((el, index) => (
        <div key={index}>
          <TextField
            name={el.text}
            label={el.text}
            variant="outlined"
            type={el.type}
            color="secondary"
            onChange={changeInp}
          />
        </div>
      ))}
    </>
  );
};

export default Input;
