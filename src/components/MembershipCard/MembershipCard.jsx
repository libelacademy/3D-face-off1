/** @format */

import React from 'react';
import './MembershipCard.css';

import { AiFillQuestionCircle } from 'react-icons/ai';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { useDispatch } from 'react-redux';

import { openTrainingMore } from '../../features/training';

//membership

const MembershipCard = ({ membership }) => {
	const dispatch = useDispatch();

	return (
		<div className='Membership'>
			<div className='membership-header'>
				<img src={membership.image} alt='Header Membership' />
			</div>
			<div className='membership-body'>
				<div className='membership-info'>
					<div className='membership-icon'>
						<img src={membership.icon} alt='Membership Icon' />
					</div>
					<div className='membership-name'>
						<h4
							style={
								membership.title === 'Full Plan'
									? { color: '#6000de' }
									: { color: '#000000' }
							}
						>
							{membership.title}
							{membership.description && (
								<AiFillQuestionCircle
									style={{
										fontSize: 18,
										marginLeft: '1ch',
										cursor: 'pointer',
									}}
									onClick={() => {
										dispatch(
											openTrainingMore({
												modal: true,
												title: membership.title,
												more: membership.description,
											})
										);
									}}
								/>
							)}
						</h4>
						<h5>
							${membership.price} USD
							<sup>${membership.price_before}USD</sup>
						</h5>
					</div>
				</div>

				<ul className='membership-card-items'>
					{membership.items.map((e, i) => (
						<li
							key={i}
							style={
								e.item === 'Acceso adicional al campamento.'
									? { fontWeight: 700 }
									: { fontWeight: 300 }
							}
						>
							<IoCheckmarkCircle style={{ fontSize: 20, marginRight: 20 }} />
							{e.item}
							{e.more ? (
								<AiFillQuestionCircle
									className='question-icon'
									onClick={() => {
										dispatch(
											openTrainingMore({
												modal: true,
												title: e.item,
												more: e.more,
											})
										);
									}}
								/>
							) : null}
						</li>
					))}
				</ul>
				<div className='membership-button'>
					<a
						href={membership.urls[0].url}
						target={'_blank'}
						rel='noreferrer'
						className='paypal'
					>
						{membership.urls[0].name}
					</a>
					<a
						href={membership.urls[1].url}
						target={'_blank'}
						rel='noreferrer'
						className='card'
					>
						{membership.urls[1].name}
					</a>
				</div>
			</div>
		</div>
	);
};

export default MembershipCard;
