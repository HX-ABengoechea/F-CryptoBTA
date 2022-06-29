/*IMPORT UTILITIES*/
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
/*IMPORT COMPONENTS*/
import { Particless } from "../../../particles/blockchain/Particle";
import btn from "./BTARecurso 2.png";
/*IMPORT CSS*/
import {
	Container,
    ImgContainer,
	SubContainer,
	Input,
	Buttom,
	TextWhite,
	TextBlue,
	Paraph,
} from "./styledComponents";

const Academy = () => {
	const [user, setUser] = useState({ nombre: "", email: "" });
	const handleInputChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
		console.log(user);
	};
	const handleSubmmit = (e) => {
		//#00c2cb
		//#d9d9d9

		console.log(user);
		window.location.replace("https://t.me/Community_Bta");
	};
	return (
		<Container>
			<Particless />
            <ImgContainer>
			<SubContainer>
				<Paraph>
					<TextWhite>Horario</TextWhite>
				</Paraph>

				<Paraph>
					<TextBlue>13:00</TextBlue>
					<TextWhite>Hora Madrid Lunes</TextWhite>
					<TextBlue>4 de julio</TextBlue>
				</Paraph>
				<Paraph>
					<TextBlue>-Temario: </TextBlue>
				</Paraph>
				<Paraph>
					<TextBlue>-Casas </TextBlue>
					<TextWhite>de cambio.</TextWhite>
				</Paraph>
				<Paraph>
					<TextBlue>-Tarjetas</TextBlue>
					<TextWhite>Cryptos</TextWhite>
				</Paraph>
				<Paraph>
					<TextBlue>-Plataforma para</TextBlue>
					<TextWhite>operar cryptos.</TextWhite>
				</Paraph>
				<Paraph>
					<TextWhite>-Mercado de</TextWhite>
					<TextBlue>futuros.</TextBlue>
				</Paraph>
				<Paraph>
					<TextBlue>-Plataforma</TextBlue>
					<TextWhite>NASDAQ.</TextWhite>
				</Paraph>

				<Paraph>
					<TextWhite style={{ fontWeight: 100}} >SUBSCRIBETE A LA MASTER CLASS</TextWhite>
				</Paraph>
				<Input
					name="nombre"
					variant="standard"
					placeholder="Nombre"
					autoComplete="on"
					value={user.nombre}
					onChange={handleInputChange}
				></Input>
				<Input
					name="email"
					variant="standard"
					placeholder="Email"
					autoComplete="on"
					value={user.email}
					onChange={handleInputChange}
				/>
				<Buttom onClick={handleSubmmit} style={{ width: "100%" }}>
					<img
						src={btn}
						style={{ width: "100%", marginLeft: "0rem" }}
						aly="btn"
					/>
				</Buttom>
			</SubContainer>
            </ImgContainer>
		</Container>
	);
};

export default Academy;