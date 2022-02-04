import styles from "../styles/caixa.module.css"
import { useState } from "react";


export default function Caixa(){

    const[nome,setNome] = useState("");
    const[abrev,setAbrev] = useState("");
    const[codBar,setCodBar] = useState(123);
    const[preco,setPreco] = useState("");
    const[total,setTotal] = useState("");

    const[carrinho,setCarrinho] = useState([])

    const[ID,setID] = useState(0);

    const produto ={}
    produto.nome="Detergente";
    produto.quant=6;
    produto.preco=2.18;
    produto.abrev="UN";
    produto.codigo="7897729088";
    produto.VALOR = ()=>{
        return produto.quant * produto.preco;
    }

    const produto2 ={}
    produto2.nome="Sabão";
    produto2.quant=1;
    produto2.preco=14.99;
    produto2.abrev="UN";
    produto2.codigo="7897721088";
    produto2.VALOR = ()=>{
        return produto2.quant * produto2.preco;
    }

    const produto3 ={}
    produto3.nome="Agua Sanitaria";
    produto3.quant=1;
    produto3.preco=7.98;
    produto3.abrev="UN";
    produto3.codigo="7897729188";
    produto3.VALOR = ()=>{
        return produto3.quant * produto3.preco;
    }


    function SOMATORIO(carr){
        let sum = 0;
        for (let i of carr) {
            sum += i.VALOR();
            
        }
        return sum
    }

    function addProduto(cBar){
        if(codBar == 123){
            setCarrinho([produto].concat(carrinho)); //teste do caixa
            setID(ID+1)
        }
        if(codBar == 124){
            setCarrinho([produto2].concat(carrinho));
            setID(ID+1)
        }
        if(codBar == 125){
            setCarrinho([produto3].concat(carrinho));
            setID(ID+1)
        }
        setCodBar(codBar+1);
        if(codBar==125) setCodBar(123);

    }


    return(
        <>
            <div className={styles.main}>
                <div className={styles.left}>
                    <div className={styles.nome}>{produto.nome}</div>
                    <div className={styles.quant}>{`${produto.quant} x ${produto.preco}`} </div>
                    <div className={styles.valor}>{produto.VALOR().toFixed(2)}</div>
                    <div className={styles.codigo}>
                        <input type="number" name="codBar" id="codBar" value={codBar} onChange={evento => {setCodBar(evento.target.value);}} />
                    </div>
                    <button onClick={addProduto}>Teste</button>
                </div>
                <div className={styles.right}>

                    <div className={styles.lista}>
                        {
                            carrinho.map((atual, index) => {
                                return (
                                    <div key={2*index+2}>
                                        <div className={styles.indice}>
                                            <p key={index}>0{ID - index} {atual.codigo} {atual.nome}</p>
                                            <p key={2*index+1}>{atual.quant} {atual.abrev} x {atual.preco} = {atual.VALOR().toFixed(2)}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className={styles.total} >
                        <hr />
                        {SOMATORIO(carrinho).toFixed(2)}
                    </div>
                </div>
            </div>
        </>
    )
}