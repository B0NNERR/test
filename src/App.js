import Costs from "./components/Costs";

function App() {
	const costs = [
		{
			date: new Date(2021, 2, 12),
			description: "Холодильник",
			amount: 999.99,
		},
		{
			date: new Date(2022, 3, 3),
			description: "Носки",
			amount: 9.0,
		},
		{
			date: new Date(2023, 4, 14),
			description: "Джинсы",
			amount: 59.99,
		},
	];

	return (
		<div>
			<h1>Начнем изучение ReactJS</h1>
			<Costs costs={costs}/>
		</div>
	);
}

export default App;
