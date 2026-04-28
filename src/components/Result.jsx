function Result({ correct, total }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="result" />
      <h2>Вы отгадали {correct} ответа из {total}</h2>
      <button onClick={() => window.location.reload()}>Попробовать снова</button>
    </div>
  );
}

export default Result;