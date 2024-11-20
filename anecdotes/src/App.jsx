import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Anecdote = ({ anecdote, vote, header }) => {
	return (
		<>
			<h1>{header}</h1>
			<p>{anecdote}</p>
			<p>{vote}</p>
		</>
	);
};

const App = () => {
	const anecdotes = [
		"If it hurts, do it more often.",
		"Adding manpower to a late software project makes it later!",
		"The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
		"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
		"Premature optimization is the root of all evil.",
		"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
		"Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
		"The only way to go fast, is to go well.",
	];

	const [selected, setSelected] = useState(0);
	const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

	const handleRandom = () => {
		setSelected(Math.floor(Math.random() * anecdotes.length));
	};

	const handleVote = () => {
		const copy = [...votes];
		copy[selected]++;
		setVotes(copy);
	};

	const maxVote = Math.max(...votes);
	const maxPosition = votes.indexOf(maxVote);

	return (
		<div>
			<Anecdote
				header="Anecdote of the day"
				anecdote={anecdotes[selected]}
				vote={`has ${votes[selected]} votes`}
			/>
			<Button text="vote" onClick={handleVote} />
			<Button text="next anecdote" onClick={handleRandom} />
			<Anecdote
				header="Anecdote with most votes"
				anecdote={anecdotes[maxPosition]}
				vote={`has ${maxVote} votes`}
			/>
		</div>
	);
};

export default App;
