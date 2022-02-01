import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <Image src={require("../../public/images/rdmIcon.png")} alt="8==D"/>
        <div className={styles.select}>   
          <a href="#"><div className={styles.button}>Sistema Caixa</div></a>
          <a href="/estoque"><div className={styles.button}>Sistema Estoque</div></a>
        </div>
      </div>
    </>
  )
}
