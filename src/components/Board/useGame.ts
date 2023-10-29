import React, { useCallback, useEffect, useState } from "react";

export enum CellState {
  ALIVE,
  JUST_DIED,
  DEAD,
}

export default function useGame(boardSize: number, intervalPeriod: number) {
  let intervalId: number;
  const [board, setBoard] = useState<CellState[][]>(
    Array.from({ length: boardSize }, () =>
      Array(boardSize).fill(CellState.DEAD)
    )
  );

  const [simulationStarted, setSimulationStarted] = useState(false);
  const [generation, setGeneration] = useState(0);

  function modifyIndex(rowIndex: number, colIndex: number) {
    setBoard((prev) =>
      prev.map((row, rowIdx) =>
        row.map((cell, colIdx) =>
          rowIndex === rowIdx && colIdx === colIndex
            ? cell === CellState.ALIVE
              ? CellState.DEAD
              : CellState.ALIVE
            : cell
        )
      )
    );
  }

  const simulate = useCallback(
    function () {
      setBoard((prev) => {
        const next = prev.map((row) => [...row]);
        for (let i = 0; i < boardSize; i++) {
          for (let j = 0; j < boardSize; j++) {
            const aliveNeighbors = [
              [-1, -1],
              [-1, 0],
              [-1, 1],
              [0, -1],
              [0, 1],
              [1, -1],
              [1, 0],
              [1, 1],
            ].reduce((acc, [dx, dy]) => {
              const x = i + dx;
              const y = j + dy;
              if (
                x >= 0 &&
                x < boardSize &&
                y >= 0 &&
                y < boardSize &&
                prev[x][y] === CellState.ALIVE
              ) {
                acc += 1;
              }
              return acc;
            }, 0);

            if (prev[i][j] === CellState.ALIVE) {
              next[i][j] =
                aliveNeighbors === 2 || aliveNeighbors === 3
                  ? CellState.ALIVE
                  : CellState.JUST_DIED;
            } else {
              next[i][j] =
                aliveNeighbors === 3 ? CellState.ALIVE : CellState.DEAD;
            }
          }
        }
        return next;
      });
      setGeneration((prev) => prev + 1);
    },
    [boardSize]
  );

  useEffect(() => {
    if (simulationStarted) {
      intervalId = setInterval(simulate, intervalPeriod);
    }
    return () => clearInterval(intervalId);
  }, [simulationStarted, intervalPeriod]);

  return {
    board,
    modifyIndex,
    startSimulation: () => setSimulationStarted(true),
    stopSimulation: () => setSimulationStarted(false),
    generation,
  };
}
