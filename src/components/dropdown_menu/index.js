import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icon from "@material-ui/core/Icon";
import {
  DropdownMenuElm,
  Menu,
  Ul
} from "../../styled_fragment/styled_dropdown";

const DropdownMenu = props => {
  const { children } = props;

  const [active, setActive] = useState(false);

  return (
    <DropdownMenuElm tabIndex="0" onBlur={() => setActive(false)}>
      <div
        className={`toggle ${active ? "active" : ""}`}
        onClick={() => setActive(!active)}
      >
        <span>
          <Icon className="fa fa-plus-circle" />
        </span>
      </div>
      <Menu active={active}>
        <Ul>{children}</Ul>
      </Menu>
    </DropdownMenuElm>
  );
};

export default DropdownMenu;
