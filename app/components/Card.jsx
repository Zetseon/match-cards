import Image from "next/image";
import back from '../../public/static/images/pixelart/back.png'
export const Card = ({ updateCards, index, cardValue, isFlipped }) => {
	const handleClick = () => {
		if (!isFlipped) {
			updateCards(index, !isFlipped);
		}
	};
	return (
		<div
			className=" group h-36 w-28  m-2 border-slate-950 border-t border-l  shadow-normal dark:shadow-custom dark:border-neutral-300 dark:bg-slate-800 rounded-md hover:cursor-pointer flex items-center justify-center overflow-hidden relative"
			onClick={handleClick}
		>
			<div className="relative h-5/6 w-full rounded-xl   transition-all duration-400 [transform-style:preserve-3d] group-active:[transform:rotateY(180deg)]">
				<div className="absolute inset-0   rounded-lg">
					{isFlipped ? (
						<Image
							src={cardValue.src}
							layout="fill"
							objectFit="scale-down"
							key={index}
						/>
					) : (
						<div className="absolute inset-0 h-full w-full rounded-xl flex items-center justify-center "><Image src={back} layout="fill"/></div>
					)}
				</div>

			</div>
		</div>
	);
};


