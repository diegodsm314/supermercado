import Consulta from "../component/Consulta";
import Estoque from "../component/Estoque"
import MenuEstoque from "../component/MenuE";
import styles from "../styles/estoque.module.css"
import styles2 from "../styles/diversos.module.css"

export default function estoquePage(){
    return(
    <>  
        <MenuEstoque/>
        <div className={styles.estoque}>
        <hr />
            <h2 className={styles.titulo} id="consulta">Consultar produto</h2>
            <hr />  
        </div>
        <Consulta/>
        <div className={styles.estoque}>
            <hr />
            <h2 className={styles.titulo} id="cadastro">Cadastrar produto</h2>
            <hr />    
        </div>
        <Estoque/>
        <div className={styles.chamado}>
            <hr />
            <h2 className={styles.titulo} id="cadastro">Cadastrar produto</h2>
            <hr />    
        </div>
    </>
    );
}