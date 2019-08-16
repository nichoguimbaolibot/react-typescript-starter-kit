import * as React from 'react';

import Header from '../Header/Header';

interface ILayoutProps {
  children: JSX.Element[] | JSX.Element;
}

const Layout: React.SFC<ILayoutProps> = ({ children }) => {
  return (
    <section className="layout-section">
      <Header />

      {children}
    </section>
  );
};

export default Layout;
