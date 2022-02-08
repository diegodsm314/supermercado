import { useState } from "react"
import styles from "../styles/diversos.module.css"

export default function Pagamento(){
    const[metodo,setMetodo] = useState()
    const[quant,setQuant] = useState(1)
    const[valor,setValor] = useState(0.00)
    const[total,setTotal] = useState()
    const[it,setIt] = useState(true)

    const met = ['Dinheiro','Cartão credito', 'Cartão debito', 'Alimentação']
    const vezes = [1,2,3,4,5,6]

    return(
        <div className={it ? styles.noit : styles.doit}>
            <div className={styles.pagamento}>
                <form action="pagamento" method="post" className={styles.formulario}>
                    <h4>Selecione o metodo de pagamento</h4>
                    <select value={metodo} name="" id="" onChange={evento => { setMetodo(evento.target.value) }}>
                            {met.map((atual, index) => {return (
                                <option value={atual} key={index}>{atual}</option>)})}
                        </select>
                    <h4>Selecione o numero de parcelas</h4>
                    <select value={quant} name="" id="" onChange={evento => { setQuant(evento.target.value) }}>
                            {vezes.map((atual, index) => {return (
                            <option value={atual} key={index}>{atual}x</option>)})}
                        </select>
                    <h4>Valor</h4>
                    <input type="text" value={valor} onChange={evento => {setValor(evento.target.value); setTotal(total - evento.target.value)}}/>
                    <h4>Parcela</h4>
                    <input type="text" value={(valor/quant).toFixed(2)} onChange={evento => {setValor(evento.target.value); setTotal(total - evento.target.value)}}/>
                    <button type="submit" onClick={evento => {setIt(!it)}}>Ok</button>
                </form>
            </div>
        </div>

    )
}