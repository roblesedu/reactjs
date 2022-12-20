import "./App.css"
import React from "react";

import Card from "./components/layout/Card";

import Mega from "./components/mega/Mega";
import Contador from "./components/contador/Contador";
import Input from "./components/formulario/Input";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>

	<div className="Cards">
		<Card titulo="#013 Mega" color="#B9006E">
			<Mega qtde={8} />
		</Card>

		<Card titulo="#012 Contador" color="#424242">
			<Contador numeroInicial={100}></Contador>
		</Card>

		<Card titulo="#011 Componente Controlado (Input)" color="#E45F56">
			<Input></Input>
		</Card>

		<Card titulo="#010 Comunicação indireta" color="#8BAD39">
			<IndiretaPai></IndiretaPai>
		</Card>

		<Card titulo="#09 Comunicação direta" color="#59323C">
			<DiretaPai></DiretaPai>
		</Card>

		<Card titulo="#08 Condicional - Par ou Ímpar" color="#982395">
			<ParOuImpar numero={21} />
			<UsuarioInfo usuario={{ nome: 'Eduardo' }} />
			{/* <UsuarioInfo usuario={{ }} />
			<UsuarioInfo /> */}
		</Card>

		<Card titulo="#07 Repetição - Produtos" color="#3A9AD9">
			<TabelaProdutos />
		</Card>

		<Card titulo="#06 Repetição - Alunos" color="#FF4C65">
			<ListaAlunos />
		</Card>

		<Card titulo="#05 Componente com Filhos" color="#00C8F8">
			<Familia sobrenome="Silva">
				<FamiliaMembro nome="Pedro" />
				<FamiliaMembro nome="Ana" />
				<FamiliaMembro nome="Gustavo" />
			</Familia>
		</Card>

		<Card titulo="#04 Desafio Aleatório" color="#FA6900">
			<Aleatorio min={1} max={60} />
		</Card>

		<Card titulo="#03 Fragmento" color="#E94C6F">
			<Fragmento />
		</Card>

		<Card titulo="#02 Com parâmetro" color="#E8B71A">
			<ComParametro
				titulo="Situação do Aluno"
				aluno="Pedro Silva"
				nota={9.3} />
		</Card>

		<Card titulo="#01 Fragmento" color="#588C73">
			<Primeiro />
		</Card>
	</div>
  </div>
);
