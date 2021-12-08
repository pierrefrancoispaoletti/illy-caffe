import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../_const";

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
  background: ${colors.main};
  border: 1px solid ${colors.secondary};
  border-radius: 12px;
  padding: 6px;
  box-shadow: 0px 9px 15px -5px rgba(0, 0, 0, 0.58);
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
  color: ${colors.secondary};
  &.active {
    text-decoration: underline;
    & > li {
      background: ${colors.secondary};
      border: 1px solid ${colors.main};
      color: ${colors.main};
    }
  }
`;
