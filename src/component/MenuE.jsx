import styles from "../styles/menu.module.css"
import Image from "next/image";

export default function MenuEstoque() {
    return (
        <div className={styles.menu}>
            <div className={styles.imagem}>
                <Image src={require("../../public/images/rdmIcon.png")} alt="8==D-" />
            </div>
            <h1 className={styles.titulo}>Sistema RDM</h1>
            <hr />
            <nav className={styles.navegation}>
                <a href="#"><li>Principal</li></a> {/*Erro ignoravel*/}
                <a href="#"><li>Consultar produto</li></a>
                <a href="#"><li>Cadastrar novo produto</li></a>
                <a href="#"><li>Abrir chamado</li></a>
                <a href="#"><li>Informações</li></a>
            </nav>
        </div>
    );
}