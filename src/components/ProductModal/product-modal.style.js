import styled, { css } from "styled-components";

const modalColorType = (props) => {
  switch (props.modalType.toLowerCase()) {
    case "ajouter":
      return css`
        border: 3px solid green;
        background: lightgreen;
        color: white;
      `;
    case "editer":
      return css`
        border: 3px solid white;
        background: purple;
        color: white;
      `;
    default:
      return css`
        background: lightgreen;
      `;
  }
};

const isShownModal = (props) => {
  if (!props.open)
    return css`
      display: none;
    `;
};
export const AddProductModalContainer = styled.div`
  position: fixed;
  z-index: 18;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 12px;
  border: 2px solid #fe0000;
  align-items: center;
  ${isShownModal}
  & > form {
    width: 80%;
  }
  margin: 15px 15px;
`;

export const AddProductTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

export const AddProductButtonStyled = styled.button`
  float: right;
  font-size: 1em;
  margin-bottom: 12px;
  padding: 12px;
  border-radius: 50px;
  font-weight: bold;
  ${modalColorType}
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-bottom: 12px;
  font-size: 1em;
  & input[type="checkbox"] {
    display: block;
    width: 35px;
    height: 35px;
    margin-left: 8px;
  }
`;
