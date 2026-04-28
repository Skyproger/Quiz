function Game({ step, question, onClickVariant, totalQuestions, numberQu }) {
  const percentage = Math.round((step / totalQuestions) * 100); //progreeBar

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h2>Вопрос номер № {numberQu}</h2>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (               //Тут идет перебор крч берется text из variants и индекс к ним
          <li onClick={() => onClickVariant(index)} key={text}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Game;