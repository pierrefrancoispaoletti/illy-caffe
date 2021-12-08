import styled, { css } from "styled-components";
import { colors } from "../../_const";

const contentVisible = (props) => {
  if (!props.visible)
    return css`
      display: none;
    `;
};

const playAnimation = (props) => {
  if (props.transition) {
    return "runing";
  }
};

const getTransitionType = (props) => {
  //blur pour une transition blur,
  //scale pour un zoom
  switch (props.transitionType) {
    case "blur":
      return css`
        animation: blurArray 0.5s ease-in-out ${playAnimation};
        @keyframes blurArray {
          0% {
            filter: blur(10px);
          }
          100% {
            filter: blur(0);
          }
        }
      `;
    case "scale":
      return css`
        animation: scaleArray 0.2s ease ${playAnimation};
        @keyframes scaleArray {
          0% {
            transform: scale(100%);
          }
          100% {
            transform: scale(0%);
          }
        }
      `;
    case "scale reverse":
      return css`
        animation: scaleArray 1.5s linear ${playAnimation} reverse;
        @keyframes scaleArray {
          0% {
            transform: scale(100%);
          }
          50% {
            transform: scale(50%);
          }
          75% {
            transform: scale(25%);
          }
          100% {
            transform: scale(0%);
          }
        }
      `;

    default:
      break;
  }
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
  margin: 0px 8px;
  box-shadow: 0px 9px 23px -5px rgba(0, 0, 0, 0.58);
  perspective: 1500px;
  background: #484b56;
`;

export const TableauWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #484b56;
  min-height: 80vh;
  ${getTransitionType}
`;

export const TableauTitle = styled.h2`
  position: relative;
  font-family: "crayonHand";
  font-size: 2.6em;
  margin-bottom: 12px;
  color: ${colors.main};
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
  color: ${colors.main};
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
    align-items: flex-start;
    color: ${colors.main};
    letter-spacing: 2px;
    font-size: 1.5rem;
    text-transform: uppercase;
    margin-bottom: 12px;
    & > span {
      max-width: 50%;
      text-align: left;
    }
    @media (max-width: 420px) {
      & > span {
        max-width: 100%;
        text-align: center;
      }
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .price {
    font-family: "ChalkAboutItalic";
    font-weight: 400;
    :not(.wineprice) {
      border-bottom: 3px solid ${colors.main};
    }
    font-size: 1.2rem;
    @media (max-width: 370px) {
      font-size: 1.5rem;
    }
  }

  .description {
    text-align: center;
    margin: 0;
  }

  .wine-color {
    font-size: 1.5em;
    ${getWineColor}
  }
`;

export const WineColorContainer = styled.div``;

export const WinePriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: right;
  justify-content: center;
  vertical-align: baseline;
`;

export const WinePriceElement = styled.span`
  background-color: #565a68;
  margin-bottom: 8px;
  width: 100%;
  ${getWineColor};
`;

export const WineItemElement = styled.span`
  padding: 6px 8px;
  border: 3px solid ${colors.main};
  border-radius: 50px;
  display: inline-block;
  margin-right: 1em;
  background: grey;
  font-size: 0.7em;
  :active {
    background: ${colors.main};
    border: 3px solid black;
  }
  ${getWineColor}
  :last-child {
    margin-right: 0;
  }
  @media (max-width: 420px) {
    margin-right: 0;
  }
`;
