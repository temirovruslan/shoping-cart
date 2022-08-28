import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Shop from "./components/Shop";

export default function App () {
	return (
		<div className="App">
			<Header />

			<Shop/>

			<Footer />
		</div>
	);
}


