# ProjetoVacivida

By
Daniel Hiroki Yamashita
Eduardo Thomaz Noronha
José Vitor Martins Makiyama
Leonardo Ihara Ishicava
Nicholas Yassuo Ito



**Para acessar o formulário pela internet:**

**Link Formulário:**
https://projeto-vacivida.vercel.app

Ao enviar o formulário, os dados são armazenados no banco de dados hospedado na plataforma Okteto.
Para verificar o conteúdo do banco de dados, pode-se utilizar um aplicativo como o DBeaver, criando uma database com:

Database: okteto
Uername: okteto
Password: okteto

e fazer o port-foward pela seguinte linha de comando:

  kubectl port-forward --namespace leoishicava svc/postgresql 5432:5432

Importante notar, que é necessário configurar as variaveis de ambiente com o comando

  $Env:KUBECONFIG=("$HOME\Downloads\okteto-kube.config;$Env:KUBECONFIG;$HOME\.kube\config")
  
após baixar o arquivo de configuração do Okteto e salvar no path acima.

**Requisitos:**
  Ter uma conta no git
  
  Ter instalado:
  
    git (https://www.atlassian.com/git/tutorials/install-git#windows)
    
    python(https://www.python.org/downloads/)
    
    pipenv(https://www.pythontutorial.net/python-basics/install-pipenv-windows/)
    
    pyextract e Pillow(https://pypi.org/project/pytesseract/)  
    
    node.js( https://nodejs.org/en/download/current/)
    
    npm (https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/)
    
    
    
  
**Obtendo o código:**
No prompt de comando

  git clone https://github.com/Nyito/ProjetoVacivida
  
**Rodar o backend:**
    
    cd ProjetoVacivida
  
    cd backend
  
    pipenv shell
  
    pipenv install
  
    python app.py
 
 Assim o backend estará rodando
 
**Rodar o frontend:**
      
    cd ProjetoVaciVida 
  
    cd frontend
  
    npm install
  
    npm run dev
  
  O frontend estará rodando no http://localhost:3000



  
  
 
