import React from "react";
import { menuItems } from "../../general/variables";
import { Card } from "../../styled_fragment/styled_dropdown";
import DropdownMenu from "../dropdown_menu";
import ListMenu from "../../controls/list_menu";

const AppDDown = () => {
  return (
    <Card>
      <DropdownMenu>
        {menuItems.map((item, index) => {
          return (
            <ListMenu
              key={index}
              label={item.label}
              classFaMaterialIcon={item.icon}
              onClick={() => alert(`You click ${item.label}`)}
            />
          );
        })}
      </DropdownMenu>
    </Card>
  );
};

export default AppDDown;
