import Link from 'next/link';

import styles from './Header.scss';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div className="header">
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/blog">
      <a style={linkStyle}>Blog</a>
    </Link>
    <Link href="/privacy-policy">
      <a style={linkStyle}>Priacy Policy</a>
    </Link>
    <style jsx>{styles}</style>
  </div>
);

export default Header;
