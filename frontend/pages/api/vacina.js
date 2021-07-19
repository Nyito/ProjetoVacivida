import axios from 'axios'
/* JWT secret key */
const KEY = process.env.JWT_KEY

const urlApi = process.env.URL_API_BACKEND

const register = async (req, res) => {
  const { method } = req

  switch (method) {
    case 'POST':
      const { cpf, nome, dataNascimento, telefone, endereco, nomeMae, nomeAplicador, fabricante, dose } = req.body
      /* Caso o usuário ou senha ou email estiverem em branco... */
      if (!cpf || !nome || !dataNascimento) {
        return res.status(400).json({
          success: false,
          message: 'faltam campos a serem preenchidos',
        })
      }
      try {
        const resposta = await axios.post(`${urlApi}/register`, {
          cpf: cpf,
          nome: nome,
          dataNascimento: dataNascimento,
          telefone: telefone,
          endereco: endereco,
          nomeMae: nomeMae,
          nomeAplicador: nomeAplicador,
          fabricante: fabricante,
          dose: dose,
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
