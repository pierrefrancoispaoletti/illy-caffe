import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const CategoriesContainer = styled.nav`
  display: flex;
  padding: 8px 0px;
  overflow-x: auto;
  margin-bottom: 25px;
`;

export const ListContainer = styled.ul`
  padding: 0px 8px;
  margin: auto;
  display: flex;
  align-items: flex-start;
  list-style: none;
`;
export const CategoryItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 60px;
  height: 60px;
  margin: 0px 8px;
  background: #fdfdfd;
  border: 1px solid #fe0000;
  border-radius: 12px;
  padding: 6px;
  box-shadow: 0px 9px 23px -5px rgba(0, 0, 0, 0.58);
  transition: all 0.5s;
`;

export const IconWrapper = styled.div`
  text-align: center;
  margin-bottom: 6px;
`;

export const CategoryTitle = styled.span`
  line-height: 1em;
  font-size: 1em;
  text-align: center;
  width: 100%;
`;

export const LinkContainer = styled(NavLink)`
  text-decoration: none;
  color: #fe0000;
  &.active {
    text-decoration: underline;
    & > li {
      background: #fe0000;
      border: 1px solid #fdfdfd;
      color: #fdfdfd;
    }
  }
`;
