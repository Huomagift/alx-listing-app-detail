import { ButtonProps } from "@/interfaces";
import React from "react";

const Button: React.FC<ButtonProps> = ({label, styles}) => {
    return (
        <button className={`px-4 py-2 font-medium ${styles}`}>
            {label}
        </button>
    )
}

export default Button;
