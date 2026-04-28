import './index.scss';
import Game from './components/Game';
import Result from './components/Result';
import { useState } from 'react';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
    number:'1',
    index:0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
    number:'2',
    index:1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
    number:'3',
    index:2,
  },
];



function App() {
  const [step, setStep] = useState(0);   //Шаг переключение страницы
  const [correct, setCorrect] = useState(0);
  
  const question = questions[step]; //Берет из массива вопросов первый(0)

  const onClickVariant = (index) => {
    if (index === question.correct) {
      setCorrect(correct + 1);
    }                                
    setStep(step + 1);           //Если пользователь выбрал даже не правильный то идем дальше
  };


  return (
    <div className="App">
      {step !== questions.length ? (   //Пока есть вопросы показывать вопросы после показать результат
        <Game                         
          step={step} 
          question={question} 
          onClickVariant={onClickVariant} 
          totalQuestions={questions.length} 
          numberQu = {question.number}
        />
      ) : (
        <Result correct={correct} total={questions.length} />
      )}
    </div>
  );
}







export default App;