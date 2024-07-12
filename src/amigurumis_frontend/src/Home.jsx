import React from 'react';
import { useState } from 'react';
import { useRestActor } from '@bundly/ic-react';
import Log from './assets/Images/Log.png';
import { AuthButton } from '@bundly/ic-react';

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
				<title>NODAGUA</title>
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
								<img src = {Log} width="175" height= "50"/>
							</div>
						</div>

                       <div>
                      <ul class="menu">
                            <li>   </li>
									<li><a href="/">Inicio</a></li>
									<li><a href="/Pag">Funcionamiento</a></li>
									<li><a href="/privacidad">Privacidad</a></li>
									<li><AuthButton></AuthButton></li>
								</ul>
                       </div>
						</div>
				</header>
				<section class="banner">
					<div class="content-banner">
						<h2>CUIDA EL AGUA, CUIDA TU VIDA</h2>
					</div>
					
					<section class="container top-categories">
						<h1 class="heading-1">SOPORTE</h1>
						<div class="container-categories">
							</div>
							</section>
				</section>

			</body>
		</html>

            
        </>
    )
}