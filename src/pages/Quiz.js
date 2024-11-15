import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userState } from "../Atom";
import { Navigate, useNavigate } from "react-router-dom";





const questions = [
  {
      question: "이 기념일에 제일 받고 싶어 할 선물은?",
      options: [
        "A. 꽃이랑 편지로 감성 터지는 고백 타임",
        "B. 배불리 먹고 행복하게 집에 갈 수 있는 고급 레스토랑 저녁",
        "C. 내 손 안에 신세계 최신 전자기기",
        "D. 우리가 커플임을 만천하에 알릴 수 있는 커플 아이템"
      ],
  },

  {
    question: "이 추억을 남기기 위해 가장 받고 싶어 할 선물은?",
    options: [
      "A. 둘만의 이야기가 담긴 눈물 나는 포토북",
      "B. 어디서든 찍고 바로 볼 수 있는 즉석 카메라",
      "C. 사진 찍다 여행이 끝나는 커플 여행 티켓",
      "D. 한 입 먹으면 기념일이 더 달달해지는 맞춤 케이크"
    ],
  },

  {
    question: "이 가장 실용적으로 생각할 선물은?",
    options: [
      "A. 입는 순간 패션 인플루언서 되는 옷이나 가방",
      "B. 쓰자마자 나도 향기로운 사람이 된 기분 향수나 화장품",
      "C. 뭔가 있어 보이는 다이어리와 필기구",
      "D. 삶의 질이 한 단계 업그레이드되는 생활가전"
    ],
  },

  {
    question: "이 로맨틱한 기분을 느낄 수 있는 선물은?",
    options: [
      "A. 손편지와 캔들로 눈물샘 제대로 터지는 감동 세트",
      "B. 손가락에 반짝이는 사랑의 증거물 커플링",
      "C. 한강에서 돗자리 깔고 바람 맞으며 로맨스 찍기",
      "D. 드라마 주인공처럼 눈물 나게 행복한 프러포즈 이벤트"
    ],
  },

  {
    question: "이 가장 선호하는 선물 금액대는?",
    options: [
      "A. 사소하지만 진심이 담긴 부담 없는 선물 (1만 원 이하)",
      "B. 마음은 크지만 가격은 착한 적당한 선물 (5만 원 이하)",
      "C. 뭐, 기념일이니까 이 정도는 해야지 특별한 선물 (10만 원 이하)",
      "D. 계좌 잔고는 울고 있지만 마음은 웃는 최고급 선물 (10만 원 이상)"
    ],
  },
  {
    question: "이 \"금액보다는 감동\"을 중시할 때 받고 싶어 하는 선물은?",
    options: [
      "A. 직접 만든 세상에 하나뿐인 DIY 선물",
      "B. 단순하지만 눈물 나게 진심이 느껴지는 손편지",
      "C. 유용하게 쓸 수 있는 현실적인 작은 선물",
      "D. 감동과 고급스러움 둘 다 잡은 맞춤형 선물"
    ],
  },
  {
    question: "이 기념일에 받고 싶어 하는 특별한 행동은?",
    options: [
      "A. 아침에 눈 떴을 때 꽃이랑 사랑이 배달되는 깜짝 이벤트",
      "B. 하루 종일 이것저것 안 하고 그냥 둘이서 놀기",
      "C. \"내가 요리 천재였나?\" 싶게 직접 만든 저녁",
      "D. 진심이 느껴지는 멘트와 함께 쓰는 감동 편지"
    ],
  },
  {
    question: "기념일에 이거 하나만 있으면 된다! 싶은 것이 있다면? 정성이나 사랑 같은거 대환영!",
    options: [
    ],
  },
];


const OppAnswerList = ['', '', '', '', '', '', '', ''];
const UserAnswerList = ['', '', '', '', '', '', '', ''];


const Container = styled.div`
    text-align: center;
    width: 780px;
    margin: 0 auto;
    background-color: #FCEDEF;
    
    
`;

const ProgressText = styled.div`
    color: #000;
    font-size: 32px;
    font-weight: 700;
    font-family: 'Cafe24 Ssurround', sans-serif;
    line-height: normal;
    margin-bottom: 20px;
    font-family: 'NanumSquareRound';
    font-weight: bold;
`;

const ProgressBar = styled.div`
    position: relative;
    width: 780px;
    height: 7px;
    background: #ACACAC;
    border-radius: 4px;
    margin-bottom: 120px;
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
    
    color: #333;
    margin-bottom: 120px;
    font-family: 'NanumSquareRound';
`;

const Options = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; /* 수평 가운데 정렬 */
    gap: 15px;
    margin: 20px 0;
    border-radius: 15px;
    
`;

const OptionButton = styled.button`
    padding: 15px;
    font-size: 18px;
    background-color: #FFFFFF;
    color: black;
    border: 1px solid #CCC;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-bottom: 15px;
    width: 512px;
    height: 77px;
    border-radius: 15px;
    font-family: 'NanumSquareRound';
    font-weight: 100;

    &:hover {
        background-color: #DE4E66;
        color: white;
    }
`;

const TextInput = styled.input`
    padding: 10px;
    width: 512px;
    height: 77px;
    font-size: 18px;
    border-radius: 5px;
    border: 1px solid #CCC;
    margin-bottom: 100px;
    font-family: 'NanumSquareRound';
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #FCEDEF;
`;


export function Quiz() {
  const [user, setUser] = useRecoilState(userState);

  const [newUserAnswerList, setNewUserAnswerList] = useState(user.answer);

  
  const [currentStep, setCurrentStep] = useState(1);
  const [textInput, setTextInput] = useState('');
  const progressWidths = [97.5, 195, 292.5, 390, 487.5, 585, 682.5, 780];

  const name = user.name;
  const handleOptionClick = (index) => {
    const updatedAnswerList = [...newUserAnswerList]; // 새로운 배열 생성 (불변성 유지)
    updatedAnswerList[currentStep - 1] = index.toString();
    setNewUserAnswerList(updatedAnswerList); // 상태 업데이트

    nextStep();
  };

  const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
  };


  const handleTextInputSubmit = () => {
    const updatedAnswerList = [...newUserAnswerList]; // 새로운 배열 생성 (불변성 유지)
    updatedAnswerList[7] = textInput;
    
    setNewUserAnswerList(updatedAnswerList); // 상태 업데이트
    setUser((prevUser) => ({
      ...prevUser,
      answer: newUserAnswerList,
    }));
    setTextInput(''); // 입력 필드 초기화

    postData();
    navigate("/result");
  };

  const postData = async () => {
    try {
      const response = await axios.post("http://172.18.138.17:8080/user", user);
    } catch (error) {
      console.log(error);
    }
  }
  let navigate = useNavigate();
  useEffect(() => {
    if (currentStep-1 === questions.length) {
      // 마지막 스텝에서만 업데이트
      setUser((prevUser) => ({
        ...prevUser,
        answer: newUserAnswerList,
      }));

      console.log('업데이트된 사용자 상태:', user);
      // 페이지 이동

    }
  }, [newUserAnswerList, currentStep]);

  const nextStep = () => {
    if (currentStep < questions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      // 모든 질문이 완료되었을 때
      setCurrentStep(currentStep + 1); // currentStep을 questions.length + 1로 설정하여 useEffect에서 업데이트 유도
      console.log(user);
    }
  };

  // const nextStep = () => {
  //   if (currentStep < questions.length) {
  //     setCurrentStep(currentStep + 1);
  //     // setTextInput(''); // 입력 필드 초기화
  //   } else {

  //     setUser((prevUser) => ({
  //       ...prevUser,
  //       userAnswerList: newUserAnswerList, // newUserAnswerList로 업데이트
  //     }));
  //     console.log('최종 사용자 답변 리스트:', newUserAnswerList);
  //     console.log('업데이트된 사용자 상태:', user);

  //     // const postData = async () => {
  //     //   try {
  //     //     const response = await axios.post("http://172.18.138.17:8080/user", dataToSend);
  //     //   } catch (error) {
  //     //     console.log(error);
  //     //   }
  //     // }
  //   }
  // };
  
  return (
    <MainContainer>

    
    
    <Container>
      {/* progress bar */}
      <ProgressText>{currentStep}/{questions.length}</ProgressText>
      <ProgressBar>
          <Line1 />
          <Line2 width={progressWidths[currentStep - 1]} />
      </ProgressBar>

      {/* question */}
      <QuestionText>{currentStep}. {name}{questions[currentStep-1].question}</QuestionText>

      {/* options */}
      {currentStep === 8 ? (
        <div>
          <TextInput
            type="text"
            value={textInput}
            onChange={handleTextInputChange}
            placeholder="ex) 나는 정성이 담긴 손편지가 좋아~"
            textAlign="center"
          />
          <OptionButton onClick={handleTextInputSubmit}>입력완료</OptionButton>
        </div>
      ) : (
        <Options>
          {questions[currentStep - 1].options.map((option, index) => (
            <OptionButton key={index} onClick={() => handleOptionClick(index)}>
              {option}
            </OptionButton>
          ))}
        </Options>
      )}

    </Container>
    </MainContainer>
  );
}
