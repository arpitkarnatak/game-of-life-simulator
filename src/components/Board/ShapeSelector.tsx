import { PropsWithChildren, useContext, useState } from "react";
import "./styles.css";
import {
  Beacon,
  Beehive,
  Blinker,
  Boat,
  Glider,
  GosperGliderGun,
  HeavyweightSpaceship,
  LightweightSpaceship,
  Loaf,
  MiddleweightSpaceship,
  Pentadecathlon,
  Point,
  Pulsar,
  Toad,
  Tub,
} from "./shapes";
import { GlobalContext } from "../../context/GlobalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faPencil } from "@fortawesome/free-solid-svg-icons";

const shapesDirectory = {
  "Still Lifes": [Point, Beehive, Loaf, Boat, Tub],
  Spaceships: [
    Glider,
    LightweightSpaceship,
    MiddleweightSpaceship,
    HeavyweightSpaceship,
  ],
  Oscillators: [Blinker, Toad, Beacon, Pentadecathlon, Pulsar],
  Misc: [GosperGliderGun],
};

export default function ShapeSelector() {
  const { currentShape, setCurrentShape } = useContext(GlobalContext);

  const [openShapeSelector, setOpenShapeSelector] = useState(false);
  return (
    <div className={`shape-selector-main ${openShapeSelector && 'shape-selector-main-open'}`}>
      <div className="shape-selector-header">
        <button
          className="shape-selector-close"
          onClick={() => setOpenShapeSelector((prev) => !prev)}
        >
          {openShapeSelector ? <FontAwesomeIcon icon={faClose} /> : <FontAwesomeIcon icon={faPencil} />}
        </button>
      </div>

      <div className={` ${!openShapeSelector && "hide-content"}`}>
        {Object.entries(shapesDirectory).map(([shapeType, shapes]) => (
          <div key={shapeType} className="shape-family">
            {shapeType}
            <div className="shape-family-shapes">
              {shapes.map((shape) => (
                <ShapeButton
                  key={shape.name}
                  selected={shape.name === currentShape.name}
                  onClick={() => setCurrentShape(shape)}
                  beta={shape.beta}
                >
                  {shape.name}
                </ShapeButton>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface IShapeButtonProps extends PropsWithChildren {
  beta?: boolean;
  selected?: boolean;
  onClick: () => void;
}
export function ShapeButton({
  selected,
  beta,
  children,
  onClick,
}: IShapeButtonProps) {
  return (
    <div
      className={`shape-button ${selected && "selected-shape-button"} ${
        beta && "beta-version"
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
