import Head from 'next/head'
import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container} >
        <div className={styles.posts} >
          <a href='#' >
            <time>12 de março de 2021</time>
            <strong>Como renomear vários arquivos de uma vez usando o terminal</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum non, consequatur hic exercitationem quo eum dolor temporibus ipsa totam quia ratione eius aperiam expedita ipsam! Neque suscipit similique omnis aspernatur?</p>
          </a>

          <a href='#' >
            <time>12 de março de 2021</time>
            <strong>Como renomear vários arquivos de uma vez usando o terminal</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum non, consequatur hic exercitationem quo eum dolor temporibus ipsa totam quia ratione eius aperiam expedita ipsam! Neque suscipit similique omnis aspernatur?</p>
          </a>

          <a href='#' >
            <time>12 de março de 2021</time>
            <strong>Como renomear vários arquivos de uma vez usando o terminal</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum non, consequatur hic exercitationem quo eum dolor temporibus ipsa totam quia ratione eius aperiam expedita ipsam! Neque suscipit similique omnis aspernatur?</p>
          </a>
        </div>
      </main>
    </>
  )
}