import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import {useForm, Controller } from "react-hook-form";





export default function Form() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
  const { 
    register, handleSubmit} = useForm();


  
  /* funcao para a submissao dos dados */

  async function onSubmit(data){
    const registerApi = await fetch(BASE_URL + '/api/vacina', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).catch((error) => {
      console.error('Error:', error)
    })
    let result = await registerApi.json()
    if (result.success) {
      console.log('formulario enviado')
    } else {
      console.log('erro ao enviar formulario')
    }
  };



  /* campos a serem preenchidos */

  return (
    <Layout home>
   <form onSubmit={handleSubmit(onSubmit)}>
      <div> 


       <div>
         <label>Nome: </label>
         <input name="nome"
           {...register("nome")} required  >
         </input>
       </div>



       <div>
         <label>CPF: </label>
         <input name="cpf"
          {...register("cpf")} required  />
        </div>
      


       <div>
         <label>Data de Nascimento: </label>
          <input name="dataNascimento"
            {...register("dataNascimento")} required  />
        </div>
      


        <div>
          <label>Telefone: </label>
          <input name="telefone"
            {...register("telefone")} required  />
        </div>
      


        <div>
          <label>Endereço: </label>
          <input name="endereco"
            {...register("endereco")} required  />
        </div>
      


       <div>
          <label>Nome da mãe: </label>
          <input name="nomeMae"
            {...register("nomeMae")} required  />
        </div>
      


       <div>
          <label>Nome do aplicador: </label>
          <input name="nomeAplicador"
            {...register("nomeAplicador")} required  />
        </div>
      


       <div>
        <label>Vacina: </label>
         <select name="fabricante"
          {...register("fabricante")} required >
           <option value="Selecionar">Selecionar</option>
           <option value="Astrazeneca">Astrazeneca</option>
           <option value="Pfizer">Pfizer</option>
           <option value="Janssen">Janssen</option>
           <option value="CoronaVac">CoronaVac</option>
         </select>
        </div>
      


        <div>
          <label>Dose </label>
          <select name="dose"
            {...register("dose")} required>
            <option value="Selecionar">Selecionar</option>
            <option value="1">1ª Dose</option>
            <option value="2">2ª Dose</option>
          </select>
        </div>



        
        <input type="file" name="picture"{...register("picture")}  />
        <button>Enviar</button>
       </div>
   </form>

    </Layout>
  );


}