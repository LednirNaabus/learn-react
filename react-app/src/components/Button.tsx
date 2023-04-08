import { MouseEvent } from "react";

interface ButtonProp {
  color: string;
  text: string;
  onClick: () => void;
}

const Button = ({ color, text, onClick }: ButtonProp) => {
  // let classNames = ["primary", "warning", "danger", "success"];
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
