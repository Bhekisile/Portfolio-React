import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Footer.css';

const Footer = ({ phrase, link, toAddress }) => (
  <div className="footer-link">
    {phrase}
    <Link
      to={toAddress}
      className="footer-link-addr"
    >
      {link}
    </Link>
  </div>
);

Footer.propTypes = {
  phrase: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  toAddress: PropTypes.string.isRequired,
};

export default Footer;
