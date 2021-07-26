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
      <section className={utilStyles.headingMd}>
        <h1><Link href='/dose1'><a>Primeira Dose</a></Link></h1>
        <h2><Link href='/dose2'><a>Segunda Dose</a></Link></h2>
      </section>
    </Layout>
  );
}