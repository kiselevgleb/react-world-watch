import React, { useState, useRef } from 'react'
import OutWatch from './outWatch';

function Out(props) {
  return (
    <>
      {props.watchs.map(o =>
        <OutWatch watch={o} onRemove={props.onRemove}></OutWatch>
      )}
    </>);
}


export default Out;