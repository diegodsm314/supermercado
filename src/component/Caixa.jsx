import styles from "../styles/caixa.module.css"
import { useState } from "react";


export default function Caixa(){

    const[nome,setNome] = useState("");
    const[abrev,setAbrev] = useState("");
    const[codBar,setCodBar] = useState(123);
    const[preco,setPreco] = useState(0);
    const[quant,setQuant] = useState(0);

    const[carrinho,setCarrinho] = useState([])

    const[ID,setID] = useState(0);

    let produto = {};
    produto.nome="";
    produto.quant=0;
    produto.preco=0;
    produto.abrev="";
    produto.codigo="";
    produto.VALOR = () => (produto.quant*produto.preco).toFixed(2);

    const produto1 ={}
    produto1.nome="Detergente Minuano";
    produto1.quant=6;
    produto1.preco=2.18;
    produto1.abrev="UN";
    produto1.codigo="7897729088";
    produto1.VALOR = () => (produto1.quant*produto1.preco).toFixed(2);

    const produto2 ={}
    produto2.nome="Sabão em barra Ype Fr";
    produto2.quant=1;
    produto2.preco=14.99;
    produto2.abrev="UN";
    produto2.codigo="7897721088";
    produto2.VALOR = () => (produto2.quant*produto2.preco).toFixed(2);

    const produto3 ={}
    produto3.nome="Laranja Pera-Rio";
    produto3.quant=1.234;
    produto3.preco=7.98;
    produto3.abrev="KG";
    produto3.codigo="2000000188";
    produto3.VALOR = () => (produto3.quant*produto3.preco).toFixed(2);


    function SOMATORIO(carr){
        let sum = 0;
        for (let i of carr) {
            sum += parseFloat(i.VALOR());          
        }
        return sum
    }

    function addProduto(cBar){
        if(codBar == 123){
            produto = produto1;
        }
        if(codBar == 124){
            produto = produto2;
        }
        if(codBar == 125){
            produto = produto3;
        }

        setCarrinho([produto].concat(carrinho)); //teste do caixa
        setID(ID+1)
        setCodBar(codBar+1);
        if(codBar==125) setCodBar(123);

        setNome(produto.nome);
        setAbrev(produto.abrev);
        setPreco(produto.preco);
        setQuant(produto.quant);
    }


    return(
        <>
            <div className={styles.main}>
                <div className={styles.left}>
                    <div className={styles.nome}>{nome}</div>
                    <div className={styles.quant}>{`${quant} x ${preco}`} </div>
                    <div className={styles.valor}>R${(quant*preco).toFixed(2)}</div>
                    <div className={styles.codigo}>
                        <input type="number" name="codBar" id="codBar" placeholder="Entre com o codigo" value={codBar} onChange={evento => {setCodBar(evento.target.value);}} />
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
                                            <p key={2*index+1}>{atual.quant} {atual.abrev} x {atual.preco} = {atual.VALOR()}</p>
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