import styled from "styled-components";

const Box = styled.div<{ color?: string }>`
  background-color: ${props => props.color || "blue"};
  width: 100px;
  height: 100px;
  display: block;
`

const CoralContainer = styled(Box)`
  background-color: coral;
`;

const StyledComponent = () => {
  return (
    <>
      <Box color="black" />

      <CoralContainer />

      <Box as={"a"} href={"/yeah"}></Box>
    </>
  );
};

export default StyledComponent;