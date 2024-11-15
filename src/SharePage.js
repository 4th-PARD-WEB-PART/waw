import React from 'react';
import styled from 'styled-components';

const SharePage = () => {

    
    return (
        <Container0>
        <Container>
            <Container3>
                <CustomButton1>
                    <Circle1 src="/img/share.png" alt="share" />
                    <ButtonText1>공유하기</ButtonText1>
                </CustomButton1>
                <CustomButton2>
                    <Circle2 src="/img/test.png" alt="test" />
                    <ButtonText2>테스트 하기</ButtonText2>
                </CustomButton2>
            </Container3>
        </Container>
            
        </Container0>
    );
};

const Container0 = styled.div`
    height: 110vh;
    background-color: #FCEDEF;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #FCEDEF;
`;


const Container3 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 100px;
    margin-top: 17px;
`;

const CustomButton1 = styled.button`
    width: 404px;
    height: 77px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 26px;
    border-radius: 50px;
    background: #DE4E66;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
    min-width: 150px;
`;

const CustomButton2 = styled.button`
    width: 404px;
    height: 77px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 17px;
    border-radius: 50px;
    background: #FFFFFF;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
    min-width: 150px;
`;

const Circle1 = styled.img`
    width: 37px;
    height: 37px;
    border-radius: 50%;
    background: transparent;
    filter: brightness(0) invert(1);
`;

const Circle2 = styled.img`
    width: 37px;
    height: 37px;
    border-radius: 50%;
    background: transparent;
`;

const ButtonText1 = styled.span`
    color: #FFFFFF;
    text-align: center;
    font-family: 'NanumSquareRound', sans-serif;
    font-size: 40px;
    font-weight: 400;
    line-height: normal;
    min-width: 110px;
    height: 34px;
`;

const ButtonText2 = styled.span`
    color: #000000;
    text-align: center;
    font-family: 'NanumSquareRound', sans-serif;
    font-size: 40px;
    font-weight: 400;
    line-height: normal;
    min-width: 145px;
    height: 34px;
`;

export default SharePage;
