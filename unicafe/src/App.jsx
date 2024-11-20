import { useState } from "react";

const Statistics = ({ good, neutral, bad }) => {
	const total = good + neutral + bad;
	const average = (good * 1 + neutral * 0 + bad * -1) / total;
	const positive = (good / total) * 100;

	if (total === 0) {
		return (
			<div>
				<p>No feedback given</p>
			</div>
		);
	}
	return (
		<table>
			<StatisticLine text="good" value={good} />
			<StatisticLine text="neutral" value={neutral} />
			<StatisticLine text="bad" value={bad} />
			<StatisticLine text="all" value={total} />
			<StatisticLine text="average" value={average.toFixed(1)} />
			<StatisticLine text="positive" value={`${positive.toFixed(1)} %`} />
		</table>
	);
};

const StatisticLine = ({ text, value }) => {
	return (
		<tbody>
			<tr>
				<td>{text}</td>
				<td>{value}</td>
			</tr>
		</tbody>
	);
};

const Button = ({ handleClick, text }) => {
	return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const handleGood = () => {
		setGood(good + 1);
	};

	const handleNeutral = () => {
		setNeutral(neutral + 1);
	};

	const handleBad = () => {
		setBad(bad + 1);
	};

	return (
		<div>
			<h1>Give Feedback</h1>
			<Button handleClick={handleGood} text="good" />
			<Button handleClick={handleNeutral} text="neutral" />
			<Button handleClick={handleBad} text="bad" />
			<h1>Statistics</h1>
			<Statistics good={good} neutral={neutral} bad={bad} />
		</div>
	);
};

export default App;
