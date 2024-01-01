import React, { useState, useEffect } from "react";
import { Card } from "./Card";

const generateInitialCards = (cards) => {
	// Define an array of unique values for the cards
	const values = cards;

	// Create an array to hold the initial set of cards
	const initialCards = [];

	// Use a loop to populate the initialCards array with card objects
	for (let i = 0; i < values.length * 2; i++) {
		initialCards.push({
			isFlipped: false,
			cardValue: values[i % values.length],
		});
	}

	// Shuffle the cards to randomize their order
	return initialCards.sort(() => Math.random() - 0.5);
};

const Board = ({ gridSize, cards, cols }) => {
	// Initialize state for flipped cards and selected cards
	const [flippedCards, setFlippedCards] = useState(
		generateInitialCards(cards)
	);
	const [selectedCards, setSelectedCards] = useState([]);
	console.log(cols);
	// Define a function to update the state of flipped cards when a card is clicked
	const updateCards = (index, isFlipped) => {
		if (selectedCards.length < 2) {
			// Clone the array of flipped cards to avoid mutating the state directly
			const newFlippedCards = [...flippedCards];

			//Update the isFlipped property of the clicked card
			newFlippedCards[index] = { ...newFlippedCards[index], isFlipped };

			// Update the state of flipped cards and selected cards
			setFlippedCards(newFlippedCards);
			setSelectedCards([
				...selectedCards,
				{ index, cardValue: newFlippedCards[index].cardValue },
			]);
		}
	};

	// Use useEffect to check for matches when two cards are selected
	useEffect(() => {
		console.log(selectedCards, selectedCards.length);
		if (selectedCards.length === 2) {
			const [firstCard, secondCard] = selectedCards;

			if (firstCard.cardValue !== secondCard.cardValue) {
				// If the selected cards do not match, flip them back after a delay
				setTimeout(() => {
					setFlippedCards((prevFlippedCards) => {
						const resetFlippedCards = prevFlippedCards.map(
							(card, index) => {
								if (
									index === firstCard.index ||
									index === secondCard.index
								) {
									// Flip back unmatched cards
									return { ...card, isFlipped: false };
								} else {
									// Keep the state of matched cards unchanged
									return card;
								}
							}
						);
						return resetFlippedCards;
					});
					setSelectedCards([]);
				}, 700);
			} else {
				// If the selected cards match, keep them flipped
				setSelectedCards([]);
			}
		}
	}, [selectedCards]);
	useEffect(() => {
		const allCardsFlipped = flippedCards.every((card) => card.isFlipped);
		if (allCardsFlipped) {
			alert("Congratulations! You are the winner!");
			// You can add more logic here, such as resetting the game or navigating to another screen.
		}
	}, [flippedCards]);

	//Render the board with the flipped cards using the Card component
	return (
		<div
			style={{
				gridTemplateColumns: `repeat(${cols}, minmax(auto, 1fr))`,
			}}
			className="grid gap-2 p-2 justify-items-center"
		>
			{flippedCards.map((card, index) => (
				<Card
					updateCards={updateCards}
					key={index}
					cardValue={card.cardValue}
					index={index}
					isFlipped={card.isFlipped}
				/>
			))}
		</div>
	);
};

export default Board;
