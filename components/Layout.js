import classNames from 'class-names';

import Header from './Header';
import Footer from './Footer';

import styles from './Layout.scss?global';

const Layout = ({ children, flowUnderHeader }) => {
  const classes = classNames('layout-body', {
    'layout-body--no-padding': flowUnderHeader
  });

  return (
    <div>
      <Header />
      <div className={classes}>{children}</div>
      <Footer />
      <style global jsx>
        {styles}
      </style>
    </div>
  );
};

export default Layout;
