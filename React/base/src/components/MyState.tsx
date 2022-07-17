import { useState } from "react";

const MyStateComponent = () => {
  const [message, setMessage] = useState<string>("");
  const [color, setColor] = useState<string>("black");

  const onEntered = () => setMessage("안녕하세요");
  const onLeaved = () => setMessage("안녕히가세요");

  const onSetRed = () => setColor("red");
  const onSetBlue = () => setColor("blue");
  const onSetGreen = () => setColor("green");

  return (
    <div>
      <button onClick={onEntered}>입장</button>
      <button onClick={onLeaved}>퇴장</button>
      <h1 style={{color: color}}>{message}</h1>

      <button onClick={onSetRed}>빨강</button>
      <button onClick={onSetBlue}>초록</button>
      <button onClick={onSetGreen}>파랑</button>
    </div>
  );
};

export default MyStateComponent;