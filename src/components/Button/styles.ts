import styled, { css } from 'styled-components';

type Tbutton = {
  validation: boolean
}

export const ButtonContainer = styled.button<Tbutton>`
  width: 100%;
  height: 42px;
  background-color: #81259D;
  color: #FFF;
  border: 1px solid #81259D;
  border-radius: 21px;
  transition: all .5s;

  &:hover {
    opacity: 0.6;
    cursor:pointer;
  }

  ${({validation}) => validation === true && css`
    background-color: gray;
    border: 1px solid gray;

    &:hover {
      opacity: 1;
      cursor: auto;
    }
  `}
`