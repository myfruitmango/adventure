import React from "react";
import { Menu } from "antd";

const Header = ({ value }) => {
  return (
    <div>
      <Menu
        mode="horizontal"
        items={[
          { label: "Home", key: "home" },
          { label: !value ? "About" : value, key: "about" },
        ]}
      />
    </div>
  );
};

export default Header;
