import { forwardRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
  { timeRemaining, targetTime, onReset },
  ref
) {
  const useLost = timeRemaining <= 0;
  const formattedTimeRemain = (timeRemaining / 1000).toFixed(2);

  const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);

  return createPortal(
    <dialog ref={ref} className="result-modal">
      {useLost && <h2>You Lost</h2>}
      {!useLost && <h2>Your Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedTimeRemain} seconds left</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;
