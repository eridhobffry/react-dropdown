import styled, { css } from "styled-components";

export const Card = styled.div`
  display: block;
  width: 300px;
  height: 300px;
  position: relative;
  background: white;
  margin: 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SharedStyleDropdownMenuToggle = css`
  background: rgba(0, 0, 0, 0.05);
`;

export const DropdownMenu = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  .toggle {
    cursor: pointer;
    padding: 10px;
    margin: 2px 2px 0 0;
    transition: background 0.25s;

    &:hover {
      ${SharedStyleDropdownMenuToggle}
    }

    &.active {
      ${SharedStyleDropdownMenuToggle}
    }
  }
`;

export const Menu = styled.div`
  ${DropdownMenu} & {
    position: absolute;
    right: 25px;
    top: 10px;
    overflow: hidden;
    width: 0;
    height: 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 9999;
  }

  &.expanded {
    width: 120px;
    height: auto;
  }
`;

export const Ul = styled.ul`
  ${Menu} & {
    list-style: none;
  }
`;

export const Li = styled.li`
  ${Ul} & {
    cursor: pointer;
    width: 100%;
    padding: 10px 10px;
    transition: background 0.25s, color 0.25s;
    display: flex;
    align-items: center;
  }

  &:hover {
    color: #007dff;
    background: rgba(0, 0, 0, 0.025);
  }
`;

export const Label = styled.label`
  ${Li} & {
    margin-left: 10px;
  }
`;
