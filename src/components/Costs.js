import CostItem from "./CostItem";
import "./Costs.css";

function Costs({ costs }) {
	return (
		<div className="costs">
			<CostItem
				date={costs[0].date}
				description={costs[0].description}
				amount={costs[0].amount}
			/>
			<CostItem
				date={costs[1].date}
				description={costs[1].description}
				amount={costs[1].amount}
			/>
			<CostItem
				date={costs[2].date}
				description={costs[2].description}
				amount={costs[2].amount}
			/>
		</div>
	);
}

export default Costs; 
