import { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";

interface Props {
  gridSize: number;
  cards: Array<number | IconDefinition>;
  numberPlayers: number;
  gridsNumber: string;
  selectedCards: Array<{ index: number; card: number | IconDefinition }>;
  correctCards: Array<{ index: number; card: number | IconDefinition }>;
  onCardClick: (card: number | IconDefinition, index: number) => void;
  isTimerActive: boolean;
  singlePlayerMoves: number;
}

export default function GameBoard({
  gridSize,
  cards,
  gridsNumber,
  selectedCards,
  correctCards,
  onCardClick,
}: Props): ReactElement {
  return (
    <div className="flex justify-center">
      <section className={`grid gap-2 my-10 ${gridsNumber}`}>
        {cards.map((card, index) => {
          const isSelected = selectedCards.some(
            (selected) => selected.index === index
          );
          const isCorrect = correctCards.some(
            (correct) => correct.index === index
          );
          return (
            <Card
              key={index}
              gridSize={gridSize}
              onClick={() => onCardClick(card, index)}
              isSelected={isSelected}
              isCorrect={isCorrect}
            >
              {typeof card === "number" ? (
                card
              ) : (
                <FontAwesomeIcon icon={card} />
              )}
            </Card>
          );
        })}
      </section>
    </div>
  );
}
