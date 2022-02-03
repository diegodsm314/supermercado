import { useState } from "react";
import styles from "../styles/estoque.module.css"


export default function Consulta(){

    const[nome,setNome] = useState("");
    const[marca,setMarca] = useState("");
    const[codBar,setCodBar] = useState("");
    const[categoria,setCategoria] = useState("");

    const categorias=["Selecione","Hortifruit","Não Pereciveis","Açougue", "Padaria", "Higiene", "Limpeza", "Beleza","Utilidade domestica","Eletricos","Eletronicos"];


    return (
        <div className={styles.consulta}>
            <form action="const" className={styles.formulario} method="get">
                <h3 className={styles.titulo}>Consulta por:</h3>
                <div className={styles.G}>
                    <h4>Nome do produto</h4>
                    <input type="text" value={nome} name="nome" id="nome" placeholder="Nome" onChange={evento => setNome(evento.target.value)} />
                </div>
                <div className={styles.H}>
                    <h4>Marca</h4>
                    <input type="text" value={marca} name="marca" id="marca" placeholder="Empresa" onChange={evento => setMarca(evento.target.value)}/>
                </div>
                <div className={styles.H}>
                    <h4>Codigo de barras</h4>
                    <input type="text" value={codBar} name="codBar" id="codBar" placeholder="Digite" onChange={evento => {setCodBar(evento.target.value);}}/>
                </div>
                <div className={styles.I}>
                    <h4>Categoria</h4>
                    <select value={categoria} name="" id="" onChange={evento => { setCategoria(evento.target.value) }}>
                        {categorias.map((atual, index) => {return (<option value={atual} key={index}>{atual}</option>)})}
                    </select>
                </div>
                <button type="submit" className={styles.butt}>Consultar</button>
            </form>

        </div>
    )
}