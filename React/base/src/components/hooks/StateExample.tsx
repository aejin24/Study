import { useState } from "react";

export default function StateExample() {
  const [name, setName] = useState<string>("");
  const [nickname, setNickName] = useState<string>("");

  const onChangeNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChangeNickNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={onChangeNameHandler} />
      <input type="text" value={nickname} onChange={onChangeNickNameHandler} />

      <br />

      <div>
        <b>이름: {name}</b>
        <br />
        <b>닉네임: {nickname}</b>
      </div>
    </div>
  );
}
