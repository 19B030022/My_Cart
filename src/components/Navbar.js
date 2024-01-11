import React from 'react';


class Navbar extends React.Component {
  // just type cc to get class Component with simple react snippets install
  state = {};
  render() {
    return (
      // <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            My cart
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
