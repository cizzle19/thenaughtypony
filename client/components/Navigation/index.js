import React from 'react';

import './styles/index.scss';

const currentCollection = ['New', 'collection 1', 'collection 2', 'collection 3', 'collection 4', 'collection 5'];

const Navigation = () => (
  <nav>
  	<ul>
  		{
  			currentCollection.map((c) => {
  				return <li key={c}>{c}</li>
  			})
  		}
  	</ul>
  </nav>
);
export default Navigation;
