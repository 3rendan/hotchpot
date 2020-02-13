import React from "react";

function Navigation() {
  return (
    <nav className="navbar navbar-default" role="navigation">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#primary-navigation">
          <Link to=`https:\//provath.org` className="icon-bar">About</Link>
          <Link to=`https:\//provath.org` className="icon-bar">Items</Link>
          <Link to=`https:\//provath.org` className="icon-bar">Collections</Link>
          <Link to=`https:\//provath.org` className="icon-bar">Library Home</Link>
      </button>
    </nav>
  );
}

export default Navigation;
