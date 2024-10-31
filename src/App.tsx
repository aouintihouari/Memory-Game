import { useState, useEffect } from "react";
import Logo from "./components/Logo";
import StartScreenContainer from "./components/StartScreenContainer";
import StartScreenSettings from "./components/StartScreenSettings";
import GameScreenContainer from "./components/GameScreenContainer";
import Header from "./components/Header";
import LogoGameScreen from "./components/LogoGameScreen";
import RestartButton from "./components/RestartButton";
import NewGameButton from "./components/NewGameButton";
import ActionButtonsWrapper from "./components/ActionButtonsWrapper";
import GameBoard from "./components/GameBoard";
import SinglePlayerStats from "./components/SinglePlayerStats";
import MultiplayerStats from "./components/MultiplayerStats";
import Timer from "./components/Timer";
import MoveCounter from "./components/MoveCounter";
import {
  faEnvelope,
  faHeart,
  faStar,
  faCamera,
  faCoffee,
  faAnchor,
  faBicycle,
  faCar,
  faTree,
  faBell,
  faGift,
  faHome,
  faSun,
  faMoon,
  faPlane,
  faSnowflake,
  faUmbrella,
  faBook,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import SinglePlayerResults from "./components/SinglePlayerResults";
import Menu from "./components/Menu";
import MultiplayerPlayerResults from "./components/MultiplayerResults";

interface Player {
  moves: number;
  pairs: number;
  playerNumber: number;
}

export default function App() {
  const [selectTheme, setSelectTheme] = useState<string>("numbers");
  const [numberPlayers, setNumberPlayers] = useState<number>(1);
  const [players, setPlayers] = useState<Player[]>([]);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [gridSize, setGridSize] = useState<number>(4);
  const [startGame, setStartGame] = useState<boolean>(false);
  const [cards, setCards] = useState<Array<number | IconDefinition>>([]);
  const [singlePlayerMoves, setSinglePlayerMoves] = useState<number>(0);
  const [isTimerActive, setIsTimerActive] = useState<boolean>(true);
  const [selectedCards, setSelectedCards] = useState<
    Array<{ index: number; card: number | IconDefinition }>
  >([]);
  const [correctCards, setCorrectCards] = useState<
    Array<{ index: number; card: number | IconDefinition }>
  >([]);
  const [seconds, setSeconds] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    setPlayers(
      Array.from({ length: numberPlayers }, (_, index) => ({
        moves: 0,
        pairs: 0,
        playerNumber: index + 1,
      }))
    );
  }, [numberPlayers]);

  useEffect(() => {
    let itemsArray: Array<number | IconDefinition>;
    if (selectTheme === "numbers") {
      itemsArray =
        gridSize === 4
          ? [3, 6, 1, 46, 20, 9, 12, 37]
          : [
              3, 6, 1, 46, 20, 9, 12, 37, 28, 16, 90, 68, 45, 53, 77, 22, 81,
              34,
            ];
    } else {
      itemsArray =
        gridSize === 4
          ? [
              faEnvelope,
              faHeart,
              faStar,
              faCamera,
              faCoffee,
              faAnchor,
              faBicycle,
              faCar,
            ]
          : [
              faEnvelope,
              faHeart,
              faStar,
              faCamera,
              faCoffee,
              faAnchor,
              faBicycle,
              faCar,
              faTree,
              faBell,
              faGift,
              faHome,
              faSun,
              faMoon,
              faPlane,
              faSnowflake,
              faUmbrella,
              faBook,
            ];
    }
    const duplicatedArr = [...itemsArray, ...itemsArray];
    const shuffledArr = duplicatedArr
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    setCards(shuffledArr);
  }, [startGame, selectTheme, gridSize]);

  useEffect(() => {
    if (selectedCards.length === 2) {
      const [firstCard, secondCard] = selectedCards;
      if (firstCard.card === secondCard.card) {
        setCorrectCards((prev) => [...prev, firstCard, secondCard]);

        if (numberPlayers > 1) {
          setPlayers((prev) => {
            const updatedPlayers = [...prev];
            updatedPlayers[currentPlayer] = {
              ...updatedPlayers[currentPlayer],
              pairs: updatedPlayers[currentPlayer].pairs + 1,
            };
            return updatedPlayers;
          });
        }

        setSelectedCards([]);
      } else {
        setTimeout(() => setSelectedCards([]), 1000);

        if (numberPlayers === 1) {
          setSinglePlayerMoves((moves) => moves + 1);
        } else {
          setPlayers((prev) => {
            const updatedPlayers = [...prev];
            updatedPlayers[currentPlayer] = {
              ...updatedPlayers[currentPlayer],
              moves: updatedPlayers[currentPlayer].moves + 1,
            };
            return updatedPlayers;
          });

          setCurrentPlayer((curr) =>
            curr === numberPlayers - 1 ? 0 : curr + 1
          );
        }
      }
    }
  }, [selectedCards, numberPlayers]);

  useEffect(() => {
    if (correctCards.length === Math.pow(gridSize, 2)) {
      setIsTimerActive(false);
      setGameOver(true);
    }
  }, [correctCards, gridSize]);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isTimerActive && startGame && numberPlayers === 1) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else if (!isTimerActive && seconds !== 0 && interval !== undefined) {
      clearInterval(interval);
    }
    return () => {
      if (interval !== undefined) clearInterval(interval);
    };
  }, [isTimerActive, seconds, startGame, numberPlayers]);

  function handleCardClick(card: number | IconDefinition, index: number) {
    if (selectedCards.length === 2) return;
    if (
      selectedCards.some((selected) => selected.index === index) ||
      correctCards.some((correct) => correct.index === index)
    )
      return;
    setSelectedCards((prev) => [...prev, { index, card }]);
  }

  function handleRestart() {
    setSelectedCards([]);
    setCorrectCards([]);
    setIsTimerActive(true);
    setGameOver(false);
    setSeconds(0);
    const shuffledCards = cards
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    setCards(shuffledCards);
    if (numberPlayers === 1) setSinglePlayerMoves(0);
    else setCurrentPlayer(0);
    setPlayers(
      Array.from({ length: numberPlayers }, (_, index) => ({
        moves: 0,
        pairs: 0,
        playerNumber: index + 1,
      }))
    );
  }

  function handleNewGame() {
    handleRestart();
    setSelectTheme("numbers");
    setNumberPlayers(1);
    setGridSize(4);
    setStartGame(false);
  }

  const gridsNumber = gridSize === 4 ? "grid-cols-4" : "grid-cols-6";

  return (
    <>
      {showMenu && (
        <Menu
          onShowMenu={setShowMenu}
          onRestart={handleRestart}
          onNewGame={handleNewGame}
          onTimerActive={setIsTimerActive}
        />
      )}
      {startGame ? (
        <>
          <GameScreenContainer>
            <Header>
              <LogoGameScreen />
              <ActionButtonsWrapper
                onTimerActive={setIsTimerActive}
                onShowMenu={setShowMenu}
              >
                <RestartButton onRestart={handleRestart} />
                <NewGameButton onNewGame={handleNewGame} />
              </ActionButtonsWrapper>
            </Header>
            <GameBoard
              gridSize={gridSize}
              cards={cards}
              numberPlayers={numberPlayers}
              gridsNumber={gridsNumber}
              selectedCards={selectedCards}
              correctCards={correctCards}
              onCardClick={handleCardClick}
              isTimerActive={isTimerActive}
              singlePlayerMoves={singlePlayerMoves}
            />
          </GameScreenContainer>
          {numberPlayers === 1 && (
            <SinglePlayerStats>
              <Timer gridSize={gridSize} seconds={seconds} />
              <MoveCounter
                gridSize={gridSize}
                message="Moves"
                moves={singlePlayerMoves}
              />
            </SinglePlayerStats>
          )}
          {numberPlayers === 1 && gameOver && (
            <SinglePlayerResults
              onRestart={handleRestart}
              onNewGame={handleNewGame}
              seconds={seconds}
              moves={singlePlayerMoves}
            />
          )}
          {numberPlayers > 1 && (
            <MultiplayerStats currentPlayer={currentPlayer} players={players} />
          )}
          {numberPlayers > 1 && gameOver && (
            <MultiplayerPlayerResults
              onRestart={handleRestart}
              onNewGame={handleNewGame}
              players={players}
            />
          )}
        </>
      ) : (
        <StartScreenContainer>
          <Logo />
          <StartScreenSettings
            selectTheme={selectTheme}
            onSelectTheme={setSelectTheme}
            numberPlayers={numberPlayers}
            onSetNumberPlayers={setNumberPlayers}
            gridSize={gridSize}
            onGridSize={setGridSize}
            onStartGame={setStartGame}
          />
        </StartScreenContainer>
      )}
    </>
  );
}
