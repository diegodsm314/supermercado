import { useState } from "react";
import styles from "../styles/diversos.module.css"

export default function Login(){
    const [user,setUser] = useState(123456)
    const [password,setPassword] = useState("");
    const [liberado,setLiberado] = useState(false)
    const[it,setIt] = useState(true)

    let users = ["123412","123456"]
    const senha = "123456789012";

    return(
        <div className={it ? styles.noit : styles.doit}>
            <div className={styles.login}>
                <h4>Efetue o login para continuar</h4>
                <div>
                <input type="number" name="login" id="login" value={user} className={styles.user} min={99999} required onChange={evento => setUser(evento.target.value)}/>
                <span className={styles.validity}></span>
                </div>
                <h4>Senha</h4>
                <div>
                    <input type="password" value={password} name="passw" id="passw" className={styles.password} onChange={evento => setPassword(evento.target.value)} />
                </div>
                <div className={styles.divButton}>
                    <button type="submit" onClick={ () => {
                        users.forEach(item => {
                            if (user == item) {
                                if (password == senha) {
                                    setIt(!it)
                                    setLiberado(true);  //deve se para aqui, de forma codicional e a div.sucess deve ser printada fora do button :D
                                }
                            }
                        });
                        console.log(liberado);
                        if (liberado) {
                            setLiberado(false); 
                            return (
                                <div className={styles.sucess}>
                                    <p>Login efetuado com sucesso</p>
                                </div>
                            )
                        }
                        else {
                            return (
                                <div className={styles.unsucess}>
                                    <p>Usuario ou senha incorretos</p>
                                </div>
                            )
                        }
                    }}>Ok</button>
                </div>
                
            </div>
        </div>

    );
}
