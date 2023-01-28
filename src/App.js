import styled from "styled-components";

const Father = styled.div`
  // 이 안에 CSS를 작성
  display: flex;
  flex-wrap: wrap;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

// 컴포넌트 확장
const Circle = styled(Box)`
  border-radius: 50px;
`;

const Btn = styled.button`
  width: 100%;
  color: white;
  border-radius: 10px;
  border: 0;
  background-color: thistle;
  margin-bottom: 10px;
`;

const Inpuut = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: aquamarine;
  margin-bottom: 10px;
`;

function App() {
  return (
    <Father>
      <Box bgColor="teal" />
      <Circle bgColor="tomato" />
      <Btn>Login</Btn>
      <Btn as="a" href="/">
        Login
      </Btn>

      <Inpuut />
      <Inpuut />
      <Inpuut />
      <Inpuut />
      <Inpuut />
    </Father>
  );
}

export default App;
