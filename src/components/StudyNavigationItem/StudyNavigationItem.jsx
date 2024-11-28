import React from 'react';
import './StudyNavigationItem.css';

const StudyNavigationItem = ({ id, item, handleNavigation, active }) => {
	return (
		<div
			className={
				active ? 'StudyNavigationItem item-active' : 'StudyNavigationItem'
			}
			onClick={() => {
				handleNavigation(id);
			}}
		>
			<h3>{item}</h3>
			<span></span>
		</div>
	);
};

export default StudyNavigationItem;
