import React from "react";
import { useForm } from "react-hook-form";
import Header from "./Header";

function App() {
  const { 
    register, handleSubmit} = useForm();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };

  return (
    
   <form onSubmit={handleSubmit(onSubmit)}>
    <Header title="Formulário Vacivida">
      <div>

       <div>
         <label>Nome: </label>
         <input name="Nome"
           {...register("Nome")} required  >
         </input>
       </div>

       <div>
         <label>CPF: </label>
         <input name="CPF"
          {...register("CPF")} required  />
        </div>
      
       <div>
         <label>Data de Nascimento: </label>
          <input name="Data"
            {...register("Data")} required  />
        </div>
      
        <div>
          <label>Telefone: </label>
          <input name="Telefone"
            {...register("Telefone")} required  />
        </div>
      
        <div>
          <label>Endereço: </label>
          <input name="Endereco"
            {...register("Endereco")} required  />
        </div>
      
       <div>
          <label>Nome da mãe: </label>
          <input name="NomeDaMae"
            {...register("NomeDaMae")} required  />
        </div>
      
       <div>
          <label>Nome do aplicador: </label>
          <input name="NomeDoAplicador"
            {...register("NomeDoAplicador")} required  />
        </div>
      
       <div>
        <label>Vacina: </label>
         <select name="TipoVacina"
          {...register("Vacina")} required >
           <option value="Selecionar">Selecionar</option>
           <option value="Astrazeneca">Astrazeneca</option>
           <option value="Pfizer">Pfizer</option>
           <option value="Janssen">Janssen</option>
           <option value="CoronaVac">CoronaVac</option>
           <option value="Calabronks">Calabronks</option>
         </select>
        </div>
      
        <div>
          <label>Dose </label>
          <select name="Dose"
            {...register("Dose")} required>
            <option value="Selecionar">Selecionar</option>
            <option value="1">1ª Dose</option>
            <option value="2">2ª Dose</option>
            <option value="3">?????</option>
          </select>
        </div>
        
        <input type="file" name="picture"{...register("Formulário")}  />
        <button>Submit</button>
       </div>
    </Header>
   </form>
  );
}

export default App;
