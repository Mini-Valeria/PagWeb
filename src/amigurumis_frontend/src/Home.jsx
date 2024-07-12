import React from 'react';
import { useState } from 'react';
import { useRestActor } from "@bundly/ic-react";

export const Home = () => {
    const bnd = useRestActor("backend");
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            const res = await bnd.get("/users");
            console.log(res.data)
        } catch (error) {
            console.log("Error", error)
        }
    }
    getUsers()
    return (
        <>
          <html lang="en">
			<head>
				<meta charset="UTF-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<title>AQUA NOVA CLEAN</title>
				<link rel="stylesheet" href="styles.css" />
			</head>
			<body>
				<header>
					<div class="container-hero">
						<div class="container hero">
							<div class="customer-support">

								<div class="content-customer-support">

								</div>
							</div>

							<div class="container-logo">
								<i class="fa-solid fa-mug-hot"></i>
								<h1 class="logo"><a href="/">AQUA NOVA CLEAN</a></h1>
							</div>


						</div>

						<div class="container-navbar">
							<nav class="navbar container">
								<i class="fa-solid fa-bars"></i>
								<ul class="menu">
									<li><a href="/">Inicio</a></li>
									<li><a href="/fibra-capilar">Fibra capilar</a></li>
									<li><a href="/contaminantes">Contaminantes</a></li>
									<li><a href="/cultivos">Cultivos</a></li>
									<li><a href="#">Sensor de humedad</a></li>

								</ul>


								<form class="search-form">
									<input type="search" placeholder="Buscar..." />
									<button class="btn-search">
										<i class="fa-solid fa-magnifying-glass"></i>
									</button>
								</form>
							</nav>
						</div>
					</div>
				</header>
				<section class="banner">
					<div class="content-banner">
						<p>AGUA LIMPIA Y SEGURA</p>
						<h2>EFICIENTE<br />AHORRADOR</h2>
						<a href="#">CoNOCER MAS</a>


					</div>

					<section class="container top-categories">
						<h1 class="heading-1">MEjORES MATERIALES</h1>
						<div class="container-categories">
							<div class="card-category category-irish">
								<p>Carbon activado</p>
								<span>Ver más</span>
							</div>
							<div class="card-category category-expreso">
								<p>Arcilla</p>
								<span>Ver más</span>
							</div>
							<div class="card-category category-capuchino">
								<p>Fibra capilar </p>
								<span>Ver más</span>

							</div>
						</div>
					</section>
					


					
					<h1 class="heading-1">AQUA NOVA CLEAN</h1>
				</section>


			</body>
		</html>

            
        </>
    )
}