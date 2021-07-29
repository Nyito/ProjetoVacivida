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

Username: okteto

Password: okteto


e fazer o port-foward pela seguinte linha de comando:

    kubectl port-forward --namespace leoishicava svc/postgresql 5432:5432

Após baixar o arquivo de configuração do Okteto e salvar na pasta de Downloads, é necessário configurar as variáveis de ambiente com o comando:

    $Env:KUBECONFIG=("$HOME\Downloads\okteto-kube.config;$Env:KUBECONFIG;$HOME\.kube\config")
  






**Para acessar o formulário e banco de dados pelo localhost:**

**Requisitos:**
  Ter uma conta no git
  
  Ter instalado:
  
    git (https://www.atlassian.com/git/tutorials/install-git#windows)
    
    python(https://www.python.org/downloads/)
    
    pipenv(https://www.pythontutorial.net/python-basics/install-pipenv-windows/)
    
    pytesseract e Pillow(https://pypi.org/project/pytesseract/)  
    
    node.js( https://nodejs.org/en/download/current/)
    
    npm (https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/)
    
 
OBS.: talvez seja necessário baixar o tesseract.exe no computador, e mudar o PATH da linha 92 do arquivo em "\ProjetoVacivida\backend\resources\vacina.py"
para o local onde o tesseract.exe está salvo. No nosso caso ele se encontra em "C:\\Program Files\\Tesseract-OCR\\tesseract.exe", mas isso pode mudar.

    https://github.com/UB-Mannheim/tesseract/wiki

  
**Obtendo o código:**
No prompt de comando

  git clone https://github.com/Nyito/ProjetoVacivida
  
  
 Para rodar no localhost, é importante mudar as variáveis de ambiente (arquivo .env) dentro do frontend e backend para:
 
 **.env do frontend:**

    NEXT_PUBLIC_BASE_URL=http://localhost:3000
    #URL_API_BACKEND=https://vacivida-leoishicava.cloud.okteto.net
    URL_API_BACKEND=http://0.0.0.0:5000
    JWT_KEY=segredo


**.env do backend:**
  
    JWT_SECRET_KEY=segredo
    #SQLALCHEMY_DATABASE_URI=postgresql+psycopg2://okteto:okteto@postgresql.leoishicava.svc.cluster.local/okteto?client_encoding=utf8
    SQLALCHEMY_DATABASE_URI=sqlite:///data.db
    
    
Dessa maneira, ao enviar o formulário ou um arquivo de imagem, os dados serão salvos no arquivo "data.db" dentro da pasta do backend. 
 
  
  
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
  
 
 O frontend e o backend devem estar rodando simultaneamente em terminais separados.
 
 
Para vizualizar os seus dados após o envio dos dados, pode-se utilizar um aplicativo, ou o site listado abaixo, arrastando o arquivo "data.db" para dentro do site.

    https://inloop.github.io/sqlite-viewer/
  
  
  
  
  
  
  
  
  
 
