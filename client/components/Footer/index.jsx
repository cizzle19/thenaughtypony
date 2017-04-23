import React from 'react';
import './styles/index.scss';

const Footer = () => (
  <footer>
  	<ul>
  		<li>Contact Us</li>
  		<li>
  			<div className="icons">
  				<i className="fa fa-facebook" aria-hidden="true"></i>
  				<i className="fa fa-twitter" aria-hidden="true"></i>
  				<i className="fa fa-instagram" aria-hidden="true"></i>
  				<i className="fa fa-spotify" aria-hidden="true"></i>
			</div>
  		</li>
  		<li
  			className="made"
  		>
  			Made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="//www.martinccontreras.com">MCC</a>
  		</li>
  	</ul>
  </footer>
);
export default Footer;
