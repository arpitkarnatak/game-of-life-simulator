import { PropsWithChildren, useContext } from "react";
import "./styles.css";
import {
  Glider,
  HeavyweightSpaceship,
  LightweightSpaceship,
  MiddleweightSpaceship,
  Pentadecathlon,
  Point,
  Pulsar,
} from "./shapes";
import { GlobalContext } from "../../context/GlobalContext";

const shapes = [
  Point,
  LightweightSpaceship,
  MiddleweightSpaceship,
  HeavyweightSpaceship,
  Glider,
  Pentadecathlon,
  Pulsar,
];
export default function ShapeSelector() {
  const { currentShape, setCurrentShape } = useContext(GlobalContext);
  return (
    <div className="shape-selector-main">
      {shapes.map((shape) => (
        <ShapeButton
          key={shape.name}
          selected={currentShape.name === shape.name}
          onClick={() => setCurrentShape(shape)}
        >
          {shape.name}
        </ShapeButton>
      ))}
    </div>
  );
}

interface IShapeButtonProps extends PropsWithChildren {
  selected?: boolean;
  onClick: () => void;
}
export function ShapeButton({
  selected,
  children,
  onClick,
}: IShapeButtonProps) {
  return (
    <div
      className={`shape-button ${selected && "selected-shape-button"}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
