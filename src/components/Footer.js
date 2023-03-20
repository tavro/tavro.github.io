import React from 'react';

class Footer extends React.Component {
    render() {
        return ( 
          <div className={`Footer`}>
	      	  <footer>
				      <p>{new Date().getFullYear()} © Isak Horvath</p>
		        </footer>
          </div>
        )
    }
}

export default Footer;