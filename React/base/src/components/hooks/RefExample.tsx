import "../App.css";

import React, { useRef, useState } from "react";

const RefExample = (): JSX.Element => {

  const [value, setValue] = useState<string>("");
  const [validate, setValidate] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const onhandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const onhandleClick = () => {
    setValidate(value === "0000");

    inputRef.current?.focus();
  }

  return (
    <div>
      <input type="password" value={value} onChange={onhandleChange} ref={inputRef} className={validate ? "success" : "failure"} />
      <button onClick={onhandleClick}>검증하기</button>
    </div>
  );
};

export default RefExample;