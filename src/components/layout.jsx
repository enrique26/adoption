import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = (props) => (
  <div className="Layout">
    <Header></Header>
      {props.children}
    <Footer></Footer>
  </div>

);

export default Layout;
