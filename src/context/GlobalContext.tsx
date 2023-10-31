import {
  Dispatch,
  SetStateAction,
  useState,
  createContext,
  PropsWithChildren,
} from "react";
import { Point, Shape } from "../components/Board/shapes";

interface IGlobalContext {
  currentShape: Shape;
  setCurrentShape: Dispatch<SetStateAction<Shape>>;
  boardSize: number;
  setBoardSize: Dispatch<SetStateAction<number>>;
}

export const GlobalContext = createContext<IGlobalContext>({
  currentShape: Point,
  setCurrentShape: () => {},
  boardSize: 50,
  setBoardSize: () => {},
});
export default function GlobalContextProvider({ children }: PropsWithChildren) {
  const [currentShape, setCurrentShape] = useState<Shape>(Point);
  const [boardSize, setBoardSize] = useState(50);
  return (
    <GlobalContext.Provider
      value={{
        currentShape,
        setCurrentShape,
        boardSize,
        setBoardSize,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
