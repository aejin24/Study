import { Link, Route, Routes } from "react-router-dom";

function Root(): JSX.Element {
  return (
    <>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>

      <Routes>
        {/** react-router-dom v6 부터 switch 컴포넌트 명이 routes로 변경됨 */}
        <Route path="/" element={<Home />} />{" "}
        {/** exact 옵션이 삭제되어 default로 적용됨 exact없애고 싶다면 path 끝에 * 을 붙인다 */}
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Profile() {
  return <h2>Profile</h2>;
}

function Error() {
  return <h2>404</h2>;
}

export default Root;
