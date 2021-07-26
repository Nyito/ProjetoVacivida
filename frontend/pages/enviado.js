import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import {useForm} from "react-hook-form"

/** Pagina inicial, redireciona para o formulario digital, ou para o upload de arquivo 
 * no qual podemos enviar um arquivo para ser analisado pelo OCR
*/
export default function index() {
  return (
    <Layout home>

        <h1>
            Formulário enviado com sucesso!
        </h1>


      <section className={utilStyles.headingMd}>
        <h2><Link href='/'><a>Voltar para a página inicial</a></Link></h2>
      </section>
    </Layout>
  );
}