import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  // 이 안에 CSS를 작성
  display: flex;
  flex-wrap: wrap;
`;

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;

const Box = styled.div`
  background-color: tomato;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotation} 1s linear infinite;

  span {
    font-size: 36px;

    &:hover {
      color: aliceblue;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <span>hi</span>
      </Box>
    </Wrapper>
  );
}

export default App;
