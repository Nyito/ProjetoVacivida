import axios from 'axios'
/* JWT secret key */
const KEY = process.env.JWT_KEY

const urlApi = process.env.URL_API_BACKEND

const register = async (req, res) => {
  const { method } = req

  switch (method) {
    case 'POST':
      const { nome,
              cpf,  
              dataNascimento,
              idade,
              sexo, 
              telefone, 
              endereco, 
              nomeMae, 
              nomeAplicador, 
              fabricante, 
              lote,
              
              cirrose,
              diabetes,
              doencaNeurologica,
              doencaRenal,
              doencaCardiovascular,
              gestante,
              hemoglobinopatia,
              hipertensao,
              imunossuprimido,
              obesidadeGrave,
              pacienteOncologico,
              hiv,
              pneumopatia,
              puerpera,
              sindromeDown,
              terapiaRenal,
              transplantado
              
            } = req.body

      /* Caso os campos obrigatorios estiverem em branco... */
      if (!cpf || !nome || !dataNascimento) {
        return res.status(400).json({
          success: false,
          message: 'faltam campos a serem preenchidos',
        })
      }
      
      try {
        const resposta = await axios.post(`${urlApi}/register1`, {
          nome: nome,
          cpf: cpf,
          dataNascimento: dataNascimento,
          idade: idade,
          sexo: sexo,
          telefone: telefone,
          endereco: endereco,
          nomeMae: nomeMae,
          nomeAplicador: nomeAplicador,
          fabricante: fabricante,
          lote: lote,
          dose: "1",

          cirrose: cirrose,
          diabetes: diabetes,
          doencaNeurologica: doencaNeurologica,
          doencaRenal: doencaRenal,
          doencaCardiovascular: doencaCardiovascular,
          gestante: gestante,
          hemoglobinopatia: hemoglobinopatia,
          hipertensao: hipertensao,
          imunossuprimido: imunossuprimido,
          obesidadeGrave: obesidadeGrave,
          pacienteOncologico: pacienteOncologico,
          hiv: hiv,
          pneumopatia: pneumopatia,
          puerpera: puerpera,
          sindromeDown: sindromeDown,
          terapiaRenal: terapiaRenal,
          transplantado: transplantado
        })

        return res.status(201).json({
          success: true,
          message: resposta.data.message,
        })
      } catch (e) {
        if (e.code == 'ECONNREFUSED') {
          return res.status(500).json({
            success: false,
            message:
              'ECONNREFUSED: Não é possível se conectar à API no backend!',
          })
        }
        if (e.response.status == 400) {
          return res.status(400).json({
            success: false,
            message: e.response.data.message,
          })
        }
      }
  }
}
export default register
