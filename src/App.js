import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import TopMenu from './components/TopMenu';
import Products from './components/Products';
import useFetch from './hooks/useFetch';
import { urlApiProducts, STORAGE_PRODUCT_CART } from './utils/constants';

function App() {
	const products = useFetch(urlApiProducts, null);
	const [ productsCart, setProductCart ] = useState([]);

	useEffect(() => {
		getProductsCart();
	}, []);

	const getProductsCart = () => {
		const idsProducts = localStorage.getItem(STORAGE_PRODUCT_CART);

		if (idsProducts) {
			const idsProductsSplit = idsProducts.split(',');
			setProductCart(idsProductsSplit);
		} else {
			setProductCart([]);
		}
	};

	const addProductCart = (id, name) => {
		const idsProducts = productsCart;
		idsProducts.push(id);
		setProductCart(idsProducts);
		localStorage.setItem(STORAGE_PRODUCT_CART, productsCart);
		getProductsCart();
		toast.success(`${name} añadido al carrito correctamente`);
	};
	return (
		<div className="App">
			<TopMenu productsCart={productsCart} getProductsCart={getProductsCart} products={products} />
			<Products products={products} addProductCart={addProductCart} />
			<ToastContainer
				position="bottom-left"
				autoClose={5000}
				hideProgressBar
				newestOnTop
				closeOnClick
				rtl={false}
				draggable
				pauseOnHover={false}
			/>
		</div>
	);
}

export default App;
