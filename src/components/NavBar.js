import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from './CartWidget';


function NavBar(){
    return (
        <nav className="navbar navbar-light">
			<div className="container-fluid">
                <h1>Libreria el Aleph <CartWidget /></h1>
				<a className="navbar-brand" href="#">1</a>
			  	<a className="navbar-brand" href="#">2</a>
			  	<a className="navbar-brand" href="#">3</a>
			  	<a className="navbar-brand" href="#">4</a>
			</div>
			
		</nav>
    )
}

export default NavBar;