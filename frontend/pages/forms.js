import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import {useForm, Controller } from "react-hook-form";
import { Checkbox } from "@material-ui/core";





export default function form() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
  const { register, handleSubmit, control } = useForm();


  
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
         <label>1) Nome: </label>
         <input name="nome"
           {...register("nome")} required  >
         </input>
       </div>



       <div>
         <label>2) CPF: </label>
         <input name="cpf"
          {...register("cpf")} required  />
        </div>
      


       <div>
         <label>3) Data de Nascimento: </label>
          <input name="dataNascimento"
            {...register("dataNascimento")} required  />
        </div>
      


        <div>
         <label>4) Idade: </label>
          <input name="idade"
            {...register("idade")} required  />
        </div>
      


        <div>
        <label>5) Sexo: </label>
         <select name="sexo"
          {...register("sexo")} required >
           <option value="Selecionar">Selecionar</option>
           <option value="feminino">Feminino</option>
           <option value="masculino">Masculino</option>
           <option value="outro">Outro</option>
         </select>
        </div>
      


        <div>
          <label>6) Telefone: </label>
          <input name="telefone"
            {...register("telefone")} required  />
        </div>
      


        <div>
          <label>7) Endereço: </label>
          <input name="endereco"
            {...register("endereco")} required  />
        </div>
      


       <div>
          <label>8) Nome da mãe: </label>
          <input name="nomeMae"
            {...register("nomeMae")} required  />
        </div>
      


       <div>
          <label>9) Nome do aplicador: </label>
          <input name="nomeAplicador"
            {...register("nomeAplicador")} required  />
       </div>
      
      


       <div>
        <label>10) Vacina: </label>
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
          <label>11) Lote: </label>
          <input name="lote"
            {...register("lote")} required  />
       </div>
      


        <div>
          <label>12) Dose </label>
          <select name="dose"
            {...register("dose")} required>
            <option value="Selecionar">Selecionar</option>
            <option value="1">1ª Dose</option>
            <option value="2">2ª Dose</option>
          </select>
        </div>


        <div>
          <label>
            13) Selecionar os campos a seguir em caso positivo:
          </label>
        </div>


        <div>
          <label>Cirrose: </label>
          <Controller
            name="cirrose"
            control={control}
            defaultValue={false}
            rules={{ required: false }}
            render={({ field }) => <Checkbox {...field} />}
          />
        </div>


        <div>
          <label>Diabetes: </label>
          <Controller
            name="diabetes"
            control={control}
            defaultValue={false}
            rules={{ required: false }}
            render={({ field }) => <Checkbox {...field} />}
          />
        </div>


        <div>
          <label>Doença Neurológica: </label>
          <Controller
            name="doencaNeurologica"
            control={control}
            defaultValue={false}
            rules={{ required: false }}
            render={({ field }) => <Checkbox {...field} />}
          />
        </div>


        <div>
          <label>Doença Renal: </label>
          <Controller
            name="doencaRenal"
            control={control}
            defaultValue={false}
            rules={{ required: false }}
            render={({ field }) => <Checkbox {...field} />}
          />
        </div>


        <div>
          <label>Doença Cardiovascular: </label>
          <Controller
            name="doencaCardiovascular"
            control={control}
            defaultValue={false}
            rules={{ required: false }}
            render={({ field }) => <Checkbox {...field} />}
          />
        </div>


        <div>
          <label>Gestante: </label>
          <Controller
            name="gestante"
            control={control}
            defaultValue={false}
            rules={{ required: false }}
            render={({ field }) => <Checkbox {...field} />}
          />
        </div>



        <div>
          <label>Hemoglobinopatia: </label>
          <Controller
            name="hemoglobinopatia"
            control={control}
            defaultValue={false}
            rules={{ required: false }}
            render={({ field }) => <Checkbox {...field} />}
          />
        </div>


        <div>
          <label>Hipertensão: </label>
          <Controller
            name="hipertensao"
            control={control}
            defaultValue={false}
            rules={{ required: false }}
            render={({ field }) => <Checkbox {...field} />}
          />
        </div>


        <div>
          <label>Imunossuprimido: </label>
          <Controller
            name="imunossuprimido"
            control={control}
            defaultValue={false}
            rules={{ required: false }}
            render={({ field }) => <Checkbox {...field} />}
          />
        </div>


        <div>
          <label>Obesidade Grave: </label>
          <Controller
            name="obesidadeGrave"
            control={control}
            defaultValue={false}
            rules={{ required: false }}
            render={({ field }) => <Checkbox {...field} />}
          />
        </div>


        <div>
          <label>Paciente Oncológico: </label>
          <Controller
            name="pacienteOncologico"
            control={control}
            defaultValue={false}
            rules={{ required: false }}
            render={({ field }) => <Checkbox {...field} />}
          />
        </div>


        <div>
          <label>HIV: </label>
          <Controller
            name="hiv"
            control={control}
            defaultValue={false}
            rules={{ required: false }}
            render={({ field }) => <Checkbox {...field} />}
          />
        </div>


        <div>
          <label>Pneumopatia: </label>
          <Controller
            name="pneumopatia"
            control={control}
            defaultValue={false}
            rules={{ required: false }}
            render={({ field }) => <Checkbox {...field} />}
          />
        </div>


        <div>
          <label>Puerpera: </label>
          <Controller
            name="puerpera"
            control={control}
            defaultValue={false}
            rules={{ required: false }}
            render={({ field }) => <Checkbox {...field} />}
          />
        </div>


        <div>
          <label>Síndrome de Down: </label>
          <Controller
            name="sindromeDown"
            control={control}
            defaultValue={false}
            rules={{ required: false }}
            render={({ field }) => <Checkbox {...field} />}
          />
        </div>


        <div>
          <label>Terapia Renal: </label>
          <Controller
            name="terapiaRenal"
            control={control}
            defaultValue={false}
            rules={{ required: false }}
            render={({ field }) => <Checkbox {...field} />}
          />
        </div>


        <div>
          <label>Transplantado: </label>
          <Controller
            name="transplantado"
            control={control}
            defaultValue={false}
            rules={{ required: false }}
            render={({ field }) => <Checkbox {...field} />}
          />
        </div>


        
        <button>Enviar</button>
       </div>
   </form>

    </Layout>
  );


}