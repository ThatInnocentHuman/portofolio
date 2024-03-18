import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'

export default function App() {
	const [count, setCount] = useState(0);
	const typewriterText = ["Web Developer", "Data Scientist", "Gamer"];

	return (
		<>
			<div className="container mx-auto flex flex-row justify-center p-4 py-44">
				<div className="p-2 bg-black  justify-self-center mx-auto text-white">
					<div className="text-6xl font-bold py-2">Christian Adi Ananta</div>
					<div className="text-4xl">Web Developer</div>
				</div>
			</div>
		</>
	);
}
