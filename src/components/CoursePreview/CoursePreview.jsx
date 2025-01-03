import React from 'react';
import './CoursePreview.css';

const CoursePreview = ({ number, course, backgroundImage, url }) => {
	return (
		<a
			href={url}
			className='CoursePreview'
			style={{
				backgroundImage: `linear-gradient(0deg, rgba(96, 0, 222, 0.6) 30%, rgba(96, 0, 222, 0)) , url(${backgroundImage})`,
			}}
		>
			<h1>{number}</h1>
			<h2>{course}</h2>
		</a>
	);
};

export default CoursePreview;
