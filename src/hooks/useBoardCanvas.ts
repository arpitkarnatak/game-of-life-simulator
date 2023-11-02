import { useRef, useEffect } from "react";
import { CellState } from "./useGame";

export default function useBoardCanvas(board: CellState[][]) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const drawBoardOnCanvas = (board: CellState[][]) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cellSize = 12;

    canvas.width = board[0].length * cellSize;
    canvas.height = board.length * cellSize;

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        switch (board[i][j]) {
          case CellState.ALIVE:
            ctx.fillStyle = "#736ced";
            break;
          case CellState.JUST_DIED:
            ctx.fillStyle = "#9f9fed";
            break;
          default:
            ctx.fillStyle = "#242424";
            break;
        }
        ctx.strokeStyle = "rgb(255, 255, 255, 0.2)";
        ctx.fillRect(j * cellSize, i * cellSize, cellSize, cellSize);
        ctx.strokeRect(j * cellSize, i * cellSize, cellSize, cellSize);
      }
    }
  };

  useEffect(() => {
    drawBoardOnCanvas(board);
  }, [board]);

  return canvasRef;
}
