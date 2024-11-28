import React, { useEffect, useState } from 'react';
import './QuestionCard.css';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';

const QuestionCard = ({ id, question, answer, handleQuestion, active }) => {
	// const [active, setActive] = useState(false);
	const [visibility, setVisibility] = useState('none');

	useEffect(() => {
		active ? setVisibility('flex') : setVisibility('none');
	}, [active]);

	return (
		<div className='Question'>
			<div
				className={active ? 'question-header-active' : 'question-header'}
				onClick={() => {
					active ? handleQuestion(-1) : handleQuestion(id);
				}}
			>
				<p>{question}</p>
				{active ? <IoChevronUp /> : <IoChevronDown />}
			</div>
			<div className='question-body' style={{ display: visibility }}>
				<ul>
					{answer?.map((response, i) => (
						<li key={i}>{response}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default QuestionCard;
