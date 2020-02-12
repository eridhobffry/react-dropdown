import React from "react";
import Icon from "@material-ui/core/Icon";
import { Li, Label } from "../../styled_fragment/styled_dropdown";

const ListMenu = props => {
  const { onClick, classFaMaterialIcon, label, children } = props;

  return (
    <Li onClick={onClick}>
      <span>
        <Icon className={classFaMaterialIcon} />
      </span>
      <Label>{label}</Label>
    </Li>
  );
};

export default ListMenu;
