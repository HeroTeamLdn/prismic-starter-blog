import Link from 'next/link';

import styles from './Footer.scss';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <footer className="footer">
    Website Footer
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <style jsx>{styles}</style>
  </footer>
);

export default Header;
