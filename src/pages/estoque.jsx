import styles from "../styles/estoque.module.css"
import Estoque from "../component/Estoque"
import MenuEstoque from "../component/MenuE";

export default function estoquePage(){
    return(
    <>  
        <MenuEstoque/>
        <Estoque/>
    </>
    );
}