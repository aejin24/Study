import { MyComponentProps } from '../types/Props';

/**
 * 예시
 * <MyComponent name="애진" />
 * <MyComponent />
 * <MyComponent>애징</MyComponent> 
 */

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