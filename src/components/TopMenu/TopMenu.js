import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { ReactComponent as Logo } from '../../assets/svg/logo-helado.svg';

import Cart from '../Cart';

import './TopMenu.scss';

export default function TopMenu(props) {
	const { productsCart, getProductsCart, products } = props;
	return (
		<Navbar bg="dark" variant="dark" className="top-menu">
			<Container>
				<BrandNav />
				{/* <MenuNav /> */}
				<Cart productsCart={productsCart} getProductsCart={getProductsCart} products={products} />
			</Container>
		</Navbar>
	);
}

function BrandNav() {
	return (
		<Navbar.Brand>
			<Logo />
			<h2> La casa de los helados</h2>
		</Navbar.Brand>
	);
}

function MenuNav() {
	return (
		<Nav className="mr-auto">
			<Nav.Link href="#">Sabores</Nav.Link>
			<Nav.Link href="#">Cucurucho</Nav.Link>
			<Nav.Link href="#">Tarrina</Nav.Link>
		</Nav>
	);
}
