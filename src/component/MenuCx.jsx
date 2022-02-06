import styles from "../styles/menu.module.css"
import Image from "next/image";

export default function MenuCaixa(){
    return(
        <div className={styles.menu}>
            <div className={styles.imagem}>
                <Image src={require("../../public/images/rdmIcon.png")} alt="8==D"/>
            </div>
            <h1 className={styles.titulo}>Sistema RDM</h1>
            <hr />
            <nav className={styles.navegation}>
                <a href="#"><li>Principal [F10]</li></a> {/*Erro ignoravel*/}
                <a href="#"><li>Consulta [F2]</li></a>
                <a href="#"><li>Cancelamento [F3]</li></a>
                <a href="#"><li>Pagar [F11]</li></a>
                <a href="#"><li>Informações [F12]</li></a>
            </nav>
        </div>
    );
}