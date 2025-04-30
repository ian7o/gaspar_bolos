import React from "react";

interface ButtonProps {
    text: string;
    style?: React.CSSProperties;
    buttonLink: string
    buttonStyle?: React.CSSProperties
    buttonTextStyle?: React.CSSProperties

}

const Button = ({data}: { data: ButtonProps }) => {
    const {text, buttonLink, style, buttonStyle}: ButtonProps = data
    return (
        <a href={buttonLink}>
            <button style={style}>
                <p style={buttonStyle}>
                    {text}
                </p>
            </button>
        </a>
    );
};

export default Button;
