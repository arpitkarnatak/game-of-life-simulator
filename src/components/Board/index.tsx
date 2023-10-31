import GlobalContextProvider from "../../context/GlobalContext";
import Board from "./Board";

export default function GameBoard() {
  return (
    <GlobalContextProvider>
      <Board />
    </GlobalContextProvider>
  );
}
