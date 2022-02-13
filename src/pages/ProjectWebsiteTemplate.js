import React from 'react';

import Header from '../components/Header';

class ProjectWebsiteTemplate extends React.Component {
    render() {
        return (
        <div className="ProjectWebsiteTemplate">
	      <Header index={1} content={this.props.content} logged_in={this.props.logged_in}/>
	      <main>
	        <h2>{this.props.header}</h2>
	        <p>{this.props.description}</p>
	      </main>
	</div>
        )
    }
}

export default ProjectWebsiteTemplate;