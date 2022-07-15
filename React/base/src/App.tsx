import "./App.css";
import MyComponent from "./components/MyComponent";

const App = () => {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>HTML 적용하기</p>

      <MyComponent name="애진" />
      <MyComponent />
      <MyComponent>애징</MyComponent>
    </div>
  );
}

export default App;