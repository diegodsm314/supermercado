import { useState } from "react";
import styles from "../styles/estoque.module.css"


export default function Estoque(){
    const random = (Math.floor(Math.random()*100000000));

    const[nome,setNome] = useState("");
    const[marca,setMarca] = useState("");
    const[abrev,setAbrev] = useState("");
    const[codBar,setCodBar] = useState(`789${random}`);   //Geração de um codigo de barras randomico
    const[preco,setPreco] = useState(0.00);
    const[entrada,setEntrada] = useState(new Date().toISOString().substring(0,10));
    const[categoria,setCategoria] = useState("");
    const[validade,setValidade] = useState(new Date().toISOString().substring(0,10));

    const categorias=["Selecione","Hortifruit","Não Pereciveis","Açougue", "Padaria", "Higiene", "Limpeza", "Beleza","Utilidade domestica","Eletricos","Eletronicos"];

    
    return(
        <div className={styles.cadastro}>
            <form action="cads" method="post" className={styles.formulario}>
                <div className={styles.A}>
                    <h4>Nome do produto</h4>
                    <input type="text" value={nome} name="nome" id="nome" placeholder="Nome" onChange={evento => setNome(evento.target.value)}/>
                </div>
                <div className={styles.B}>
                    <h4>Marca</h4>
                    <input type="text" value={marca} name="marca" id="marca" placeholder="Empresa" onChange={evento => setMarca(evento.target.value)}/>
                </div>
                <div className={styles.A}>
                    <h4>Preço</h4>
                    <input type="text" value={preco} name="preco" id="preco" placeholder="Preço" onChange={evento => setPreco(evento.target.value)}/>
                </div>
                <div className={styles.B}>
                    <h4>Nome abreviado</h4>
                    <input type="text" value={abrev} name="abrev" id="abrev" placeholder="Descrição" onChange={evento => setAbrev(evento.target.value)} />
                </div>
                <div className={styles.C}>
                    <h4>Validade:</h4>
                    <input type="date" value={validade} name="validade" id="validade" placeholder="validade" onChange={evento => { setValidade(evento.target.value); /*console.log(evento.target.value);*/; }} />
                </div>
                <div className={styles.D}>
                    <h4>Categoria</h4>
                    <select value={categoria} name="" id="" onChange={evento => { setCategoria(evento.target.value) }}>
                        {categorias.map((atual, index) => {return (<option value={atual} key={index}>{atual}</option>)})}
                    </select>
                </div>
                <div className={styles.C}>
                <h4>Data de entrada:</h4>
                <input type="date" value={entrada} name="entrada" id="entrada" placeholder="entrada" onChange={evento => {setEntrada(evento.target.value); /*console.log(evento.target.value);*/}}/>
                </div>
                <div className={styles.B}>
                    <h4>Codigo de barras</h4>
                    <input type="text" value={codBar} name="codBar" id="codBar" placeholder="codBar" onChange={evento => {setCodBar(evento.target.value);}}/>
                </div>

            </form>
        </div>
        
    );
}