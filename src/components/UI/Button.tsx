import React from "react";
import "./Button.css";
interface Props {
  title: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  iconColor?: string;
  variant: string;
}

const Button = ({ title, iconLeft, iconRight, variant, iconColor }: Props) => {
  const variantStyle = () => {
    switch (variant) {
      case "primary":
        return "primary";
      case "secondary":
        return "secondary";
      case "success":
        return "success";
      case "danger":
        return "danger";
      default:
        return "primary";
    }
  };

  return (
    <button className={`btn ${variantStyle()}`}>
      {iconLeft && (
        <span className={`icon-left ${iconColor}`}>{iconLeft} </span>
      )}
      {title}
      {iconRight && (
        <span className={`icon-right ${iconColor}`}>{iconRight}</span>
      )}
    </button>
  );
};

export default Button;
