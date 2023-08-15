import React from "react";
import TextField from '@mui/material/TextField';

const Input = (props) => {
  return (
    <>
      {props.data.map((el, index) => (
        <div key={index}>
          <TextField label={el.text} variant="outlined" type={el.type} color="secondary" />
        </div>
      ))}
    </>
  );
};

export default Input;
