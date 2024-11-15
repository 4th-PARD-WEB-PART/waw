import { Link } from "react-router-dom";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Cafe24 Ssurround';
    src: url('/public/Cafe24Ssurround-v2.0.otf') format('opentype');
    src: url()('/public/NanumSquareRoundB.ttf') format('opentype');
    src: url()('/public/NanumSquareRoundEB.ttf') format('opentype');
    src: url()('/public/') format('opentype');

  }

  body {
    font-family: 'Cafe24 Ssurround', 'NanumSquareRound', sans-serif;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* 세로 가운데 정렬 */
  height: 100vh; /* 페이지 전체 높이를 100vh로 설정 */
  padding: 20px;
  background-color: #FCEDEF;
`;

const Title = styled.div`
  width: calc(554 / 1280 * 100vw);
  height: calc(111 / 1280 * 100vw);
  background-color: #DE4E66;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5vw;
  color: white;
  font-weight: bold;
  margin-bottom: 60px; /* 기념일 Info 설정과 기념일 이름 입력 간격 */
  border-radius: 15px; /* 타이틀과 동일한 모서리 둥글기 */
  font-family: 'NanumSquareRound';
`;

const InputContainer = styled.div`
  width: calc(406 / 1280 * 100vw);
  height: calc(91 / 1280 * 100vw);
  background-color: #DE4E66; /* 타이틀 배경색과 동일 */
  margin-bottom: 6cqb; /* 기념일 이름 입력과 내 이름 입력 간격 */
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px; /* 타이틀과 동일한 모서리 둥글기 */
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 10px;
  font-size: 1.5vw;
  border: none;
  border-radius: 8px;
  background-color: white; /* 입력 필드 배경색 */
  color: #333; /* 입력 텍스트 색상 */
  text-align: center;
  border-radius: 15px; /* 타이틀과 동일한 모서리 둥글기 */
`;

const Button = styled.button`
  width: calc(226 / 1280 * 100vw);
  height: calc(92 / 1280 * 100vw);
  background-color: #DE4E66;
  color: white;
  font-size: 3vw;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 40px; /* 내 이름 입력과 입력 완료 간격 */
  border-radius: 10px; /* 타이틀과 동일한 모서리 둥글기 */
  font-family: 'NanumSquareRound';
`;

function MainInput() {
  return (
    <>
    <GlobalStyle />
      <Container>
        <Title>기념일 Info 설정</Title>
        <InputContainer>
          <Input id="anni-name" type="text" placeholder="기념일 이름 입력" />
        </InputContainer>
        <InputContainer>
          <Input id="my-name" type="text" placeholder="내 이름 입력" />
        </InputContainer>
        <Link to ="/quiz">
          <Button>입력 완료</Button>
        </Link>
      </Container>
    </>
  );
}

export default MainInput;
