import React from "react";

interface ButtonProps {
  name: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ name, onClick, type = "button", disabled = false }) => {
  return (
    <button onClick={onClick} type={type} disabled={disabled} className="btn">
      {name}
    </button>
  );
};

export default Button;
