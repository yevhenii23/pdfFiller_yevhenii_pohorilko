import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Button.scss";

const Button = ({
	text,
	onClick,
	size,
	color,
	disabled = false,
	onHover = false,
	onActive = false,
	onFocused = false 
}) => {

	const handleClick = () => {
		console.log("clicked");
		onClick();
	};

	const buttonClasses = classNames("button", {
		"button--small": size === "small",
		"button--large": size === "large",
		"button--orange": color === "orange",
		"button--gray": color === "gray",
		"button--hover": onHover && color === "orange",
		"button--hover-gray": onHover && color === "gray",
		"button--active": onActive && color === "orange",
		"button--active-gray": onActive && color === "gray",
		"button--focus": onFocused && color === "orange",
		"button--focus-gray": onFocused && color === "gray",
		"button--disabled": disabled && color === "orange",
		"button--disabled-gray": disabled && color === "gray",
	});

	return (
		<button
			className={buttonClasses}
			onClick={handleClick}
			disabled={disabled}
			tabIndex={disabled ? -1 : undefined}
			aria-disabled={disabled}
		>
			{text}
		</button>
	);
};

Button.propTypes = {
	text: PropTypes.node.isRequired,
	onClick: PropTypes.func,
	size: PropTypes.oneOf(["small", "large"]),
	color: PropTypes.oneOf(["orange", "gray"]),
	disabled: PropTypes.bool,
	onHover: PropTypes.bool,
	onActive: PropTypes.bool,
	onFocused: PropTypes.bool,
};

Button.defaultProps = {
	onClick: () => {},
	size: "small",
	color: "orange",
	disabled: false,
	onHover: false,
	onActive: false,
	onFocused: false,
    
};

export default Button;
