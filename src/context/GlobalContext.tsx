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
}

export const GlobalContext = createContext<IGlobalContext>({
  currentShape: Point,
  setCurrentShape: () => {},
});
export default function GlobalContextProvider({ children }: PropsWithChildren) {
  const [currentShape, setCurrentShape] = useState<Shape>(Point);
  return (
    <GlobalContext.Provider
      value={{
        currentShape,
        setCurrentShape,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
