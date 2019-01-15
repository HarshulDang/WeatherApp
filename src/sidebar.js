import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/">
        Dashboard
      </a>

      <a className="menu-item" href="/burgers">
        Email
      </a>

      <a className="menu-item" href="/pizzas">
        Compose
      </a>

      <a className="menu-item" href="/desserts">
        Calendar
      </a>

      <a className="menu-item" href="/desserts">
        Chat
      </a>

      <a className="menu-item" href="/desserts">
        Charts
      </a>

      <a className="menu-item" href="/desserts">
        Maps
      </a>
    </Menu>
  );
};
