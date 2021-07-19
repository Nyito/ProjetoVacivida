import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import {useForm, Controller } from "react-hook-form";
import { TextField, Checkbox } from "@material-ui/core";





export default function Form() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
  const { register, handleSubmit, control, reset, } = useForm();


  
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


        <div>
          <label>
            Selecionar os campos em caso positivo:
          </label>
        </div>


        <div>
          <label>Cirrose: </label>
          <Controller
            name="cirrose"
            control={control}
            defaultValue={false}
            rules={{ required: true }}
            render={({ field }) => <Checkbox {...field} />}
          />
        </div>


        <div>
          <label>Diabetes: </label>
          <Controller
            name="diabetes"
            control={control}
            defaultValue={false}
            rules={{ required: true }}
            render={({ field }) => <Checkbox {...field} />}
          />
        </div>


        <div>
          <label>Doença Neurológica: </label>
          <Controller
            name="doencaNeurologica"
            control={control}
            defaultValue={false}
            rules={{ required: true }}
            render={({ field }) => <Checkbox {...field} />}
          />
        </div>


        <div>
          <label>Doença Renal: </label>
          <Controller
            name="doencaRenal"
            control={control}
            defaultValue={false}
            rules={{ required: true }}
            render={({ field }) => <Checkbox {...field} />}
          />
        </div>


        <div>
          <label>Doença Cardiovascular: </label>
          <Controller
            name="doencaCardiovascular"
            control={control}
            defaultValue={false}
            rules={{ required: true }}
            render={({ field }) => <Checkbox {...field} />}
          />
        </div>


        <div>
          <label>Gestante: </label>
          <Controller
            name="gestante"
            control={control}
            defaultValue={false}
            rules={{ required: true }}
            render={({ field }) => <Checkbox {...field} />}
          />
        </div>



        <div>
          <label>Hemoglobinopatia: </label>
          <Controller
            name="hemoglobinopatia"
            control={control}
            defaultValue={false}
            rules={{ required: true }}
            render={({ field }) => <Checkbox {...field} />}
          />
        </div>


        <div>
          <label>Hipertensão: </label>
          <Controller
            name="hipertensão"
            control={control}
            defaultValue={false}
            rules={{ required: true }}
            render={({ field }) => <Checkbox {...field} />}
          />
        </div>


        <div>
          <label>Imunossuprimido: </label>
          <Controller
            name="imunossuprimido"
            control={control}
            defaultValue={false}
            rules={{ required: true }}
            render={({ field }) => <Checkbox {...field} />}
          />
        </div>


        <div>
          <label>Obesidade Grave: </label>
          <Controller
            name="obesidadeGrave"
            control={control}
            defaultValue={false}
            rules={{ required: true }}
            render={({ field }) => <Checkbox {...field} />}
          />
        </div>


        <div>
          <label>Paciente Oncológico: </label>
          <Controller
            name="pacienteOncologico"
            control={control}
            defaultValue={false}
            rules={{ required: true }}
            render={({ field }) => <Checkbox {...field} />}
          />
        </div>


        <div>
          <label>HIV: </label>
          <Controller
            name="hiv"
            control={control}
            defaultValue={false}
            rules={{ required: true }}
            render={({ field }) => <Checkbox {...field} />}
          />
        </div>


        <div>
          <label>Pneumopatia: </label>
          <Controller
            name="pneumopatia"
            control={control}
            defaultValue={false}
            rules={{ required: true }}
            render={({ field }) => <Checkbox {...field} />}
          />
        </div>


        <div>
          <label>Puerpera: </label>
          <Controller
            name="puerpera"
            control={control}
            defaultValue={false}
            rules={{ required: true }}
            render={({ field }) => <Checkbox {...field} />}
          />
        </div>


        <div>
          <label>Síndrome de Down: </label>
          <Controller
            name="sindromeDown"
            control={control}
            defaultValue={false}
            rules={{ required: true }}
            render={({ field }) => <Checkbox {...field} />}
          />
        </div>


        <div>
          <label>Terapia Renal: </label>
          <Controller
            name="terapiaRenal"
            control={control}
            defaultValue={false}
            rules={{ required: true }}
            render={({ field }) => <Checkbox {...field} />}
          />
        </div>


        <div>
          <label>Transplantado: </label>
          <Controller
            name="transplantado"
            control={control}
            defaultValue={false}
            rules={{ required: true }}
            render={({ field }) => <Checkbox {...field} />}
          />
        </div>


        
        <input type="file" name="picture"{...register("picture")}  />
        <button>Enviar</button>
       </div>
   </form>

    </Layout>
  );


}