from db import db


class VacinaModel(db.Model):
    __tablename__ = "vacinacao"
    id = db.Column(db.Integer, primary_key=True)
    cpf = db.Column(db.String(80), nullable=True)
    nome = db.Column(db.String(80), nullable=True)
    dataNascimento = db.Column(db.String(80), nullable=True)
    telefone = db.Column(db.String(80), nullable=True)
    endereco = db.Column(db.String(150), nullable=True)
    nomeMae = db.Column(db.String(80), nullable=True)
    nomeAplicador = db.Column(db.String(80), nullable=True)
    fabricante = db.Column(db.String(80), nullable=True)
    dose = db.Column(db.String(80), nullable=True)


    def save_to_db(self) -> None:
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self) -> None:
        db.session.delete(self)
        db.session.commit()

    @classmethod
    def find_by_cpf(cls, cpf: str) -> "VacinaModel":
        return cls.query.filter_by(cpf=cpf).first()