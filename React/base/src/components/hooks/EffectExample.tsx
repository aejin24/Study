import { useEffect, useState } from "react";

export default function EffectExample() {
  const [name, setName] = useState<string>("");
  const [nickname, setNickName] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(false);

  // 1. 기본적으로 렌더링되고 난 직후마다 실행됨
  // useEffect(() => {
  //   console.log("랜더링 완료: componentDidMount + componentDidUpdate");
  //   console.log({ name, nickname });
  // });

  // 2. 마운트 될 때만 실행하고 싶을 때
  // useEffect(() => {
  //   console.log("마운트 될 때만 실행");
  // }, []);

  // 3. 특정 값이 업데이트 될 때만 실행하고 싶을 때
  // useEffect(() => {
  //   console.log(name);
  // }, [name]);

  // 4. cleanup (컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 수행)
  useEffect(() => {
    console.log("effect");
    console.log(name);

    return () => {
      console.log("cleanup");
      console.log(name);
    };
  }, []);

  const onChangeNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChangeNickNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value);
  };

  return (
    <div>
      <button type="button" onClick={() => setVisible(!visible)}>
        {visible ? "숨기기" : "보이기"}
      </button>
      <br />

      {visible && (
        <>
          <input type="text" value={name} onChange={onChangeNameHandler} />
          <input type="text" value={nickname} onChange={onChangeNickNameHandler} />

          <br />

          <div>
            <b>이름: {name}</b>
            <br />
            <b>닉네임: {nickname}</b>
          </div>
        </>
      )}
    </div>
  );
}
