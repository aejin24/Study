import { MyComponentProps } from '../types/Props';

const MyComponent = ({ name, children }: MyComponentProps) => {
  return (
    <div>
      <h2>안녕하세요 제 이름은 {children ? children : name}</h2>
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본 이름"
}

export default MyComponent;