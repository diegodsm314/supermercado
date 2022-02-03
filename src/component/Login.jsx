import { useState } from "react";
import styles from "../styles/diversos.module.css"

export default function Login(){
    const [user,setUser] = useState(123456)
    const [password,setPassword] = useState("");
    const [liberado,setLiberado] = useState(false)

    let users = ["123412","123456"]
    const senha = "123456789012";

    return(
        <>
            <div className={styles.login}>
                <h4>Efetue o login para continuar</h4>
                <div>
                <input type="number" name="login" id="login" value={user} className={styles.user} min={99999} required onChange={evento => setUser(evento.target.value)}/>
                <span className={styles.validity}></span>
                </div>
                <h4>Senha</h4>
                <div>
                    <input type="password" name="passw" id="passw" className={styles.password} onChange={evento => setPassword(evento.target.value)} />
                </div>
                <div className={styles.divButton}>
                    <button type="submit" onClick={pass => {
                        users.forEach(item => {
                            if (user == item) {
                                if (pass == senha) {
                                    setLiberado(true);
                                }
                            }
                        });
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
        </>

    );
}
