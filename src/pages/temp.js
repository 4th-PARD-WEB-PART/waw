import React, { useState } from 'react';
import styled from 'styled-components';

const QuizForm = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const progressWidths = [
        97.5, // 첫 번째 문제
        195,  // 두 번째 문제
        292.5, // 세 번째 문제
        390,  // 네 번째 문제
        487.5, // 다섯 번째 문제
        585,  // 여섯 번째 문제
        682.5, // 일곱 번째 문제
        780   // 여덟 번째 문제
    ];

    const questions = [
        {
            question: "이 질문은 첫 번째 질문입니다.",
            options: [
              "A. 꽃이랑 편지로 감성 터지는 고백 타임1",
              "B. 배불리 먹고 행복하게 집에 갈 수 있는 고급 레스토랑 저녁1",
              "C. 내 손 안에 신세계 최신 전자기기1",
              "D. 우리가 커플임을 만천하에 알릴 수 있는 커플 아이템1"
            ],
        },
        {
            question: "이 질문은 두 번째 질문입니다.",
            options: ["답변 A", "답변 B", "답변 C", "답변 D"]
        },
        {
            question: "이 질문은 세 번째 질문입니다.",
            options: ["답변 A", "답변 B", "답변 C", "답변 D"]
        },
        {
            question: "이 질문은 네 번째 질문입니다.",
            options: ["답변 A", "답변 B", "답변 C", "답변 D"]
        },
        {
            question: "이 질문은 다섯 번째 질문입니다.",
            options: ["답변 A", "답변 B", "답변 C", "답변 D"]
        },
        {
            question: "이 질문은 여섯 번째 질문입니다.",
            options: ["답변 A", "답변 B", "답변 C", "답변 D"]
        },
        {
            question: "이 질문은 일곱 번째 질문입니다.",
            options: ["답변 A", "답변 B", "답변 C", "답변 D"]
        },
        {
            question: "이 질문은 여덟 번째 질문입니다.",
            options: ["답변 A", "답변 B", "답변 C", "답변 D"]
        }
    ];

    const handleOptionClick = () => {
        // 현재 스텝이 총 질문 수보다 작을 경우만 증가
        if (currentStep < questions.length) {
            setCurrentStep(currentStep + 1);
        }
    };

    return (
        <Container>
            {/* 진행 텍스트 */}
            <ProgressText>{currentStep}/{questions.length}</ProgressText>

            {/* 진행 바 */}
            <ProgressBar>
                <Line1 />
                <Line2 width={progressWidths[currentStep - 1]} />
            </ProgressBar>

            {/* 질문 텍스트 */}
            <QuestionText>{questions[currentStep - 1].question}</QuestionText>

            {/* 4지선다형 버튼 */}
            <Options>
                {questions[currentStep - 1].options.map((option, index) => (
                    <OptionButton key={index} onClick={handleOptionClick}>
                        {option}
                    </OptionButton>
                ))}
            </Options>
        </Container>
    );
};

export default QuizForm;

// Styled Components
const Container = styled.div`
    text-align: center;
    width: 780px;
    margin: 0 auto;
`;

const ProgressText = styled.div`
    color: #000;
    font-size: 32px;
    font-weight: 700;
    font-family: 'NanumSquareRound', sans-serif;
    line-height: normal;
    margin-bottom: 20px;
`;

const ProgressBar = styled.div`
    position: relative;
    width: 780px;
    height: 7px;
    background: #ACACAC;
    border-radius: 4px;
    margin: 20px 0;
`;

const Line1 = styled.div`
    position: absolute;
    width: 100%;
    height: 7px;
    background: #ACACAC;
    border-radius: 4px;
`;

const Line2 = styled.div`
    position: absolute;
    width: ${props => props.width}px;
    height: 7px;
    background: #F00;
    border-radius: 4px;
`;

const QuestionText = styled.div`
    margin: 20px 0;
    font-size: 24px;
    font-weight: 600;
    color: #333;
`;

const Options = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 20px 0;
`;

const OptionButton = styled.button`
    padding: 15px;
    font-size: 18px;
    background-color: #F5F5F5;
    color: #000;
    border: 1px solid #CCC;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #E0E0E0;
    }
`;
