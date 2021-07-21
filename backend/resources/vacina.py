from flask_restful import Resource
from flask import Flask, request

# from werkzeug.security import safe_str_cmp
from flask_jwt_extended import (
    create_access_token,
    create_refresh_token,
    get_jwt_identity,
    jwt_required,
)
import bcrypt
from models.vacina import VacinaModel
from schemas.vacina import VacinaSchema

# Para o VacinaFileResgister
import boto3
import os
UPLOAD_FOLDER = './uploaded_files'
app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


# Mensagens pré-definidas
USER_ALREADY_EXISTS = "Um usuário com esse login já existe."
USER_EMAIL_ALREADY_EXISTS = "Um usuário com esse email já existe."

CREATED_SUCCESSFULLY = "Vacinação cadastrada com sucesso!"

USER_NOT_FOUND = "Usuário não encontrado."
USER_DELETED = "Usuário removido."
INVALID_CREDENTIALS = "Credenciais inválidas."
# USER_LOGGED_OUT = "Usuário <id={user_id}> deslogado com sucesso."

vacina_schema = VacinaSchema()


class VacinaRegister(Resource):
    @classmethod
    def post(cls):
        
        try:
            vacina_json = request.get_json()

            print(vacina_json)


            vacina = vacina_schema.load(vacina_json)


            vacina.save_to_db()

            v = VacinaModel.find_by_cpf("46726345828")
            print(v.id)
            
        except Exception as error:
            print(error)
        return {"message": CREATED_SUCCESSFULLY}, 201

class VacinaFileRegister(Resource):
    @classmethod
    def post(cls):
        #client = boto3.client('textract')
        try:
            print("chamou api\n")
            arq = request.files['file']
            print(arq.filename)

            path = os.path.join(app.config['UPLOAD_FOLDER'], arq.filename)
            #arq.save(path)


            
        except Exception as error:
            print(error)
        return {"message": CREATED_SUCCESSFULLY}, 201