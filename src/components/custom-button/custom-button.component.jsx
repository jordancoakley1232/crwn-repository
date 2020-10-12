import React from 'react';
import "./custom-button.styles.scss"

const CustomButton = ({ children, handleClick, isGoogleSignIn, ...otherProps }) => {
    return (
        <button
            className={`${isGoogleSignIn ? 'google-sign-in' : ""} custom-button`} {...otherProps} onClick={handleClick} >
            {children}
        </button>
    )
}

export default CustomButton;


