function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        // Nice trick to update progress bar when we click on the answer, Not clicking the next button
        value={index + Number(answer !== null)}
      />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>

      <p>
        {points} / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
