import React, { useState } from "react";
import TimeField from 'react-simple-timefield';

function Form(props) {
    const [name, setName] = useState("");
    const [time, setTime] = useState("");


    function handleNameChange(e) {
    setName(e.target.value);
    }

    function handleTimeChange(e) {
        setTime(e.target.value)
    }

  function doSTUFF(e) {
    e.preventDefault();
    props.addReminder(name, time);
    setName("");
    setTime("");
  }
  return (
    <form onSubmit={doSTUFF} id="reminder-form">
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What is the name of the pill you need to take?
        </label>
      </h2>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleNameChange}
            />
            <input
                type="time"
                id="new-todo-input-time"
                className="input input__lg-time"
                name="time-input"
                autoComplete="off"
                value={time}
                onChange={handleTimeChange}
            />

      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
