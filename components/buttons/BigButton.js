import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
	display: inline-block;
	background-color: #ffc420;
	color: black;
	padding: 1em 3em;
	cursor: pointer;
	transition: 0.2s;
	border-radius: 30px;
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none;
	&:hover {
		background-color: black;
		color: #ffc420;
	}
`;

const ButtonText = styled.a`
	font-size: 1.5em;
	text-transform: capitalize;
	letter-spacing: 1.5px;
	color: inherit;
`;

const BigButton = ({ children, href }) => {
	return (
		<Button>
			<ButtonText href='/'>{children}</ButtonText>
		</Button>
	);
};

export default BigButton;
