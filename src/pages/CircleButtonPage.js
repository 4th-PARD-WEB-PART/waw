import React from 'react';
import styled from 'styled-components';

const CircleButtonPage = () => {

    const mockData1 = [
        "A1. 꽃이랑 편지로 감성 터지는 고백 타임",
        "A2. 둘만의 이야기가 담긴 눈물 나는 포토북",
        "A3. 입는 순간 패션 인플루언서 되는 옷이나 가방",
        "A4. 한강에서 돗자리 깔고 바람 맞으며 로맨스 찍기",
        "A5. 마음은 크지만 가격은 착한 적당한 선물 (5만 원 이하)",
        "A6. 단순하지만 눈물 나게 진심이 느껴지는 손편지",
        "A7. 진심이 느껴지는 멘트와 함께 쓰는 감동 편지"
    ];
    const mockData2 = [
        "A1. 꽃이랑 편지로 감성 터지는 고백 타임",
        "A2. 둘만의 이야기가 담긴 눈물 나는 포토북",
        "A3. 입는 순간 패션 인플루언서 되는 옷이나 가방",
        "A4. 손편지와 캔들로 눈물샘 제대로 터지는 감동 세트",
        "A5. 마음은 크지만 가격은 착한 적당한 선물 (5만 원 이하)",
        "A6. 단순하지만 눈물 나게 진심이 느껴지는 손편지",
        "A7. 진심이 느껴지는 멘트와 함께 쓰는 감동 편지"
    ];
    
    return (
        <Container0>
        <Container>
            <Container1>
                <Box1>
                    <Text1>내가 고른 답변</Text1>
                </Box1>
                <Box2>
                    <Text2>USER 1이 고른 답변</Text2>
                </Box2>
            </Container1>
            <Container2>
                <Box3>
                        {
                            mockData1.map((data, index) => (
                                <Answer key={index} isRed={data === "A4. 손편지와 캔들로 눈물샘 제대로 터지는 감동 세트"}>
                                    {data}
                                </Answer>
                            ))
                        }
                    </Box3>
                    <Box4>
                        {
                            mockData2.map((data, index) => (
                                <Answer key={index} isRed={data === "A4. 손편지와 캔들로 눈물샘 제대로 터지는 감동 세트"}>
                                    {data}
                                </Answer>
                            ))
                        }
                    </Box4>
            </Container2>
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
    width: 1280px;
    height: 832px;
    flex-shrink: 0;
    background: #FCEDEF;
`;

const Container1 = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 31px;
    margin-top: 50px;
`;

const Box1 = styled.div`
    text-align: center;
    width: 554px;
    height: 92px;
    border-radius: 15px;
    background: #DE4E66;
    display: flex; 
    align-items: center; 
    justify-content: center;
`;

const Box2 = styled.div`
    text-align: center;
    width: 554px;
    height: 92px;
    border-radius: 15px;
    background: #DE4E66;
    display: flex; 
    align-items: center; 
    justify-content: center;
`;

const Text1 = styled.span`
    color: #FFF;
    font-family: NanumSquareRound;
    font-size: 40px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
`;

const Text2 = styled.span`
    color: #FFF;
    text-align: center;
    font-family: NanumSquareRound;
    font-size: 40px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
`;

const Container2 = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 25px;
    margin-top: 25px;
`;

const Box3 = styled.div`
    width: 554px;
    height: 553px;
    flex-shrink: 0;
    border-radius: 15px;
    background: #FFF;
    padding-top: 47px; /* 첫 번째 답변의 위 간격 */
`;

const Box4 = styled.div`
    width: 554px;
    height: 553px;
    flex-shrink: 0;
    border-radius: 15px;
    background: #FFF;
    padding-top: 47px; /* 첫 번째 답변의 위 간격 */
`;

const Answer = styled.p`
    color: ${props => props.isRed ? '#DE4E66' : '#000'};
    text-align: left; /* 왼쪽 정렬 */
    font-family: NanumSquareRound;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 50px; /* 왼쪽 간격 */
    margin-bottom: 49px; /* 각 답변 간격 */
    
    &:last-child {
        margin-bottom: 51px; /* 마지막 답변 밑에 간격 */
    }
`;

const Container3 = styled.div`
    display: flex;
    justify-content: center;
    gap: 321px;
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

export default CircleButtonPage;
