import React, { useState } from 'react';
import './FAQ.css';

import questions from '../../utils/questions';
import QuestionCard from '../QuestionCard/QuestionCard';

import Image from 'react-image-webp';

import image from '../../assets/faq-image.png';
import imageWebp from '../../assets/faq-image.webp';
import line from '../../assets/line.png';

const FAQ = () => {
	const [questionId, setQuestionId] = useState();
	const handleQuestion = (id) => {
		setQuestionId(id);
	};

	return (
		<section className='FAQ' id='faq'>
			<div className='faq-container container'>
				<div className='faq-title'>
					<h1>
						PREGUNTAS <span>FRECUENTES</span>
						<img src={line} alt='underline' />
					</h1>
				</div>
				<div className='faq-content'>
					<div className='faq-imagen '>
						<Image src={image} webp={imageWebp} alt='FAQ' />
					</div>
					<div className='faq-questions'>
						<div className='faq-questions-container'>
							{questions?.map((question, i) => (
								<QuestionCard
									key={i}
									id={question.id}
									question={question.question}
									answer={question.answer}
									handleQuestion={handleQuestion}
									active={questionId === question.id ? true : false}
								/>
							))}
						</div>
						<a
							href='https://wa.link/d9of81'
							target={'_blank'}
							rel='noreferrer'
							className='request-advice'
						>
							¿Más preguntas?
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQ;
