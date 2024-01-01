"use client";

import Navbar from "./components/Navbar";
import Game from "./components/Game";
export default function Home() {
	
	return (
		<main
			className="flex min-h-screen flex-col dark:bg-slate-950 dark:text-neutral-300  bg-neutral-300 text-slate-950"
		>
			<Navbar />
			<Game />
		</main>
	);
}
