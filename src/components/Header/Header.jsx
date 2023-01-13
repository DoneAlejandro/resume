import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="container">
      <div className="header">
        <h1 className="header__title">
          <NavLink to={"/"}>Болдырев Алексей</NavLink>
        </h1>
		<div className="header__navbar">
			<NavLink></NavLink>
		</div>
      </div>
    </header>
  );
};
