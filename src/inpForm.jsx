import React, { useState, useRef } from 'react'
import {nanoid} from 'nanoid';
import Watch from './Watch';

function InputForm(props) {
  const { onAdd: handleAdd} = props;
  const inpName = useRef();
  const timeZone = useRef();

  const handleSubmit = evt => {
    evt.preventDefault();
    const watch = new Watch(nanoid(), evt.target.name.value, evt.target.timeZone.value);
    handleAdd({watch, inpName, timeZone});
    evt.target.name.value="";
    evt.target.timeZone.value="";
  }

  return (
      <form className="form" onSubmit={handleSubmit}>
        <label className="label" htmlFor="name" >Name</label>
        <input className="name" id="name" name="name" ref={inpName} />
        <label className="label" htmlFor="timeZone" >Time zone</label>
        <input className="inp" name="timeZone" ref={timeZone} />
        <button>Add</button>
      </form>
      );
}

export default InputForm;
