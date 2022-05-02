import React from 'react';
import "./NotFound.css";
import {Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
<div id="notfound">
	<Container >
		
		<div className="notfound">
			<div className="notfound-404">
				<h1>4<span>0</span>4</h1>
			</div>
			<p>Sorry 💔💔❌This is not Your Distination. So, For Your Kind information You Can Redirect Home Page</p>
		
            <Link to="/">Home Page</Link>
		</div>
		
	</Container>
	</div>
    );
};

export default NotFound;