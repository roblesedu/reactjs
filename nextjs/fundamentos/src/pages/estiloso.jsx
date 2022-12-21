import Layout from '../components/Layout'
import styles from '../styles/Estiloso.module.css'

export default function Estiloso() {
	return (
		<Layout>
			<div className={styles.roxo}>
				<h1>Estilo usando CSS Módulo</h1>
			</div>
		</Layout>
	)
}