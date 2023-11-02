import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./modal.css";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface IHelpModal {
  onClose: () => void;
}

enum HelpMenuTabs {
  AboutTheApp,
  About,
  Rules,
  Shapes,
}

const AboutTheApp = (
  <>
    <h1>About the Application</h1>
    <div>
      <p>
        This is a simulator for Conway's <b>Game of Life</b>, a cellular
        automata, single player game.
      </p>

      <p>
        The simulator displays the current configuration of the board, and when
        it starts, all the subsequent configurations. We also have display the
        cells which died in the last iteration with the grey colored cells.
      </p>

      <p>
        The simulator boasts a rich set of predefined shapes that you can easily
        use as building blocks to create your own initial configurations. The
        intuitive interface allows you to animate the transitions through
        generations. You can control the pace of these transitions from the
        slider above.
      </p>

      <p>
        The simulator also features a convenient tool that enables you to
        download the current configuration of the board as a .txt file. This
        way, you can easily save your creations and even share them with friends
        or try them out in other simulators.
      </p>
    </div>
  </>
);

const Rules = (
  <>
    <h1>Rules</h1>
    <ul>
      <li>
        Any live cell with fewer than two live neighbors dies (underpopulation).
      </li>
      <li>Any live cell with two or three live neighbors survives.</li>
      <li>
        Any live cell with more than three live neighbors dies (overpopulation).
      </li>
      <li>
        Any dead cell with exactly three live neighbors becomes a live cell
        (reproduction).
      </li>
    </ul>
  </>
);

const About = (
  <>
    <h1>Game of Life</h1>

    <p>
      The Game of Life (an example of a cellular automaton) is played on an
      infinite two-dimensional rectangular grid of cells. Each cell can be
      either alive or dead. The status of each cell changes each turn of the
      game (also called a generation) depending on the statuses of that cell's 8
      neighbors. Neighbors of a cell are cells that touch that cell, either
      horizontal, vertical, or diagonal from that cell.
    </p>
  </>
);

const Shapes = (
  <>
    <h1>Shapes</h1>
    <div>
      <h2>Oscillators</h2>
      <p>
        Oscillators are patterns that return to their initial state after a
        finite number of generations.
      </p>
      <p>
        Examples:{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://conwaylife.com/wiki/Blinker"
        >
          Blinker
        </a>
        ,{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://conwaylife.com/wiki/Toad"
        >
          Toad
        </a>
        ,{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://conwaylife.com/wiki/Beacon"
        >
          Beacon
        </a>
      </p>
    </div>
    <div>
      <h2>Still Lifes</h2>
      <p>
        Still lifes are patterns that do not change from generation to
        generation.
      </p>
      <p>
        Examples:{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://conwaylife.com/wiki/Block"
        >
          Block
        </a>
        ,{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://conwaylife.com/wiki/Beehive"
        >
          Beehive
        </a>
        ,{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://conwaylife.com/wiki/Loaf"
        >
          Loaf
        </a>
      </p>
    </div>
    <div>
      <h2>Spaceships</h2>
      <p>
        Spaceships are patterns that translate themselves across the grid over
        time.
      </p>
      <p>
        Examples:{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://conwaylife.com/wiki/Glider"
        >
          Glider
        </a>
        ,{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://conwaylife.com/wiki/Lightweight_spaceship"
        >
          Lightweight Spaceship
        </a>
        ,{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://conwaylife.com/wiki/Middleweight_spaceship"
        >
          Middleweight Spaceship
        </a>
      </p>
    </div>
  </>
);

const MenuTabs = [
  { name: "About the App", tab: HelpMenuTabs.AboutTheApp },
  { name: "Game of Life", tab: HelpMenuTabs.About },
  { name: "Rules", tab: HelpMenuTabs.Rules },
  { name: "Shapes", tab: HelpMenuTabs.Shapes },
];

function getCurrentTab(tab: HelpMenuTabs) {
  switch (tab) {
    case HelpMenuTabs.AboutTheApp:
      return AboutTheApp;
    case HelpMenuTabs.About:
      return About;
    case HelpMenuTabs.Rules:
      return Rules;
    case HelpMenuTabs.Shapes:
      return Shapes;
    default:
      return <></>;
  }
}

export default function HelpModal({ onClose }: IHelpModal) {
  const [currentTab, setCurrentTab] = useState(HelpMenuTabs.AboutTheApp);
  return (
    <div className="overlay">
      <div className="modal-main">
        <div className="modal-header">
          <div className="menu-tab-bar">
            {MenuTabs.map((item) => (
              <div
                key={item.name}
                onClick={() => setCurrentTab(item.tab)}
                className={`menu-tab ${
                  item.tab === currentTab && "active-tab"
                }`}
              >
                {item.name}
              </div>
            ))}
          </div>
          <button onClick={onClose}>
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>
        <div className="modal-body">{getCurrentTab(currentTab)}</div>
      </div>
    </div>
  );
}
