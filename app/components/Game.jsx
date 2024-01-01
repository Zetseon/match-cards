import React, { useState } from "react";
import Board from "./Board";
import { CuteArray } from "./Images";
import Image from "next/image";
export default function Game() {
	const [gridSize, setGridSize] = useState(null);
	const shuffled = CuteArray.sort(() => Math.random() - 0.5);

	const handleButtonClick = (size) => {
		setGridSize(size);
	};
	const restartClick = () => {
		setGridSize(null)
	}

	const renderButtons = () => {
		const buttonSizes = [4, 5, 6, 7, 8, 9, 10];
		return buttonSizes.map((size) => (
			<button
				key={size}
				className="border-2 border-slate-950 dark:border-neutral-300 rounded-xl items-center p-4 dark:hover:bg-gray-500 hover:bg-slate-400 "
				onClick={() => handleButtonClick(size)}
			>{` 4 X ${size} `}</button>
		));
	};

	return (
		<div className={`items-center justify-center gap-4 my-auto`}>
			<div className="flex items-center justify-center mt-8">
				{gridSize && (
					<Board
						gridSize={gridSize * 4}
						cards={shuffled.slice(0, (gridSize * 4) / 2)}
						cols={gridSize}
					/>
				)}
			</div>
			<div className={`flex items-center justify-center gap-4 ${gridSize ? 'mt-8' : ''}`}>
				{gridSize ? <button className="border  border-slate-950 dark:border-neutral-300 rounded-md p-4 hover:bg-slate-500" onClick={restartClick}>Restart</button> : renderButtons()}
			</div>
		</div>
	);
}
