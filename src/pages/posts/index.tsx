import { GetStaticProps } from 'next'
import Head from 'next/head'
import { getPrismicCLient } from '../../services/prismic'
import styles from './styles.module.scss'
import Prismic from '@prismicio/client'

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

export const getStaticProps: GetStaticProps =  async () => {
  const prismic = getPrismicCLient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'posts')
  ], {
    fetch: ['posts.title', 'posts.content'],
    pageSize: 100
  })

  console.log(response)

  return {
    props : {

    }
  }
}