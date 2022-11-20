import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  title: string;
  disabled: boolean
}

export function Button({disabled = true, ...props}: IButtonProps) {
  return(
    <ButtonContainer 
    validation={disabled} 
    disabled={disabled} 
    >
      {props.title}
    </ButtonContainer>
  ) 
}