import styled, { css } from "styled-components";

const contentVisible = (props) => {
  if (!props.visible)
    return css`
      display: none;
    `;
};

const getWineColor = (props) => {
  switch (props.color) {
    case "rouge":
      return css`
        color: #742f37;
      `;
    case "blanc":
      return css`
        color: #f1f285;
      `;
    case "rosé":
      return css`
        color: #ffb9b9;
      `;
    default:
      break;
  }
};

export const TableauContainer = styled.div`
  border: 14px solid #deb887;
  margin: 12px;
  box-shadow: 0px 9px 23px -5px rgba(0, 0, 0, 0.58);
`;

export const TableauWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #484b56;
  min-height: 80vh;
`;

export const TableauTitle = styled.h2`
  position: relative;
  font-family: "crayonHand";
  font-size: 2.6em;
  color: #fdfdfd;
  text-align: center;
  text-decoration: underline;
  letter-spacing: 10px;
  overflow-wrap: anywhere;
  @media (max-width: 379px) {
    font-size: 1.9em;
  }
`;

export const TableauContent = styled.div`
  position: relative;
  font-family: "crayonHand";
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: flex-start;
  line-height: 36px;
  color: #fdfdfd;
  margin: 0px 1.5em;
  text-align: center;
  font-size: 1.8rem;
  @media (max-width: 420px) {
    align-items: center;
  }
  ${contentVisible}

  .title {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    color: #fdfdfd;
    letter-spacing: 2px;
    font-size: 2rem;
    text-transform: uppercase;
    margin-bottom: 12px;
    @media (max-width: 420px) {
      flex-direction: column;
      justify-content: center;
    }
  }

  .price {
    font-size: 2rem;
    padding: 12px;
    text-decoration: underline;
  }

  .description {
    text-align: left;
  }

  .wine-color {
    font-size: 1.5em;
    ${getWineColor}
  }
`;

export const WineColorContainer = styled.div``;

export const WineItemElement = styled.span`
  padding: 6px 8px;
  border: 3px solid white;
  border-radius: 50px;
  display: inline-block;
  margin-right: 1em;
  background: grey;
  font-size: 0.7em;
  ${getWineColor}
  :last-child {
    margin-right: 0;
  }
  @media (max-width: 420px) {
    margin-right: 0;
  }
`;
