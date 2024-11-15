import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';

const Container = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #FCEDEF;
  height: 100vh;
`;

const Title = styled.div `
  width: calc(514 / 1280 * 100vw);
  height: calc(133 / 1280 * 100vw);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9vw;
  font-weight: bold;
  color: white;
  background-color: #DE4E66;
  border-radius: 8px;
  margin-bottom: 1vw;
  text-align: center;
  
  box-sizing: border-box;
  font-family: 'Cafe24_Ssurround';
`;

const SubTitle = styled.div `
  width: calc(514 / 1280 * 100vw);
  height: calc(53 / 1280 * 100vw);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2vw;
  color: white;
  background-color: #E98394;
  border-radius: 8px;
  margin-bottom: 2vw;
  text-align: center;
  padding: 0 2vw;
  box-sizing: border-box;
  font-family: 'NanumSquareRound';
`;

const ImageContainer = styled.div `
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 2vw;
`;

const LogoImage = styled.img `
  width: calc(500 / 1280 * 100vw);
  height: calc(366 / 1280 * 100vw);
  border-radius: 8px;
`;

const Button = styled.button `
  width: calc(514 / 1280 * 100vw); /* 이미지와 동일한 크기 */
  height: calc(100 / 1280 * 100vw);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3vw;
  font-weight: bold;
  color: white;
  background-color: #DE4E66;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  text-align: center;
  font-family: 'Cafe24_Ssurround';
  
`;

function Main() {
    return (

        <Container>

            <Title>기머전시</Title>
            <SubTitle>내 애인이 받고 싶은 기념일 선물은?</SubTitle>

            <LogoImage src="/Group 20.png" alt="로고 이미지"/> {/* 링크 태그를 이미지 밖으로 빼고 버튼 위치 설정 */}
            <Link
                to="/input"
                style={{
                    textDecoration: 'none'
                }}>
                <Button>문제 만들기</Button>
            </Link>
        </Container>
    );
}

export default Main;
