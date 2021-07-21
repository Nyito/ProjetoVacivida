from db import db


class VacinaModel(db.Model):
    __tablename__ = "vacinacao"
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100), nullable=True)
    cpf = db.Column(db.String(100), nullable=True, unique=True)
    dataNascimento = db.Column(db.String(100), nullable=True)
    idade = db.Column(db.String(100), nullable=True)
    sexo = db.Column(db.String(100), nullable=True)
    telefone = db.Column(db.String(100), nullable=True)
    endereco = db.Column(db.String(200), nullable=True)
    nomeMae = db.Column(db.String(100), nullable=True)
    nomeAplicador = db.Column(db.String(100), nullable=True)
    fabricante = db.Column(db.String(100), nullable=True)
    lote = db.Column(db.String(100), nullable=True)
    dose = db.Column(db.String(100), nullable=True)
    cirrose = db.Column(db.Boolean, nullable=True)
    diabetes = db.Column(db.Boolean, nullable=True)
    doencaNeurologica = db.Column(db.Boolean, nullable=True)
    doencaRenal = db.Column(db.Boolean, nullable=True)
    doencaCardiovascular = db.Column(db.Boolean, nullable=True)
    gestante = db.Column(db.Boolean, nullable=True)
    hemoglobinopatia = db.Column(db.Boolean, nullable=True)
    hipertensao = db.Column(db.Boolean, nullable=True)
    imunossuprimido = db.Column(db.Boolean, nullable=True)
    obesidadeGrave = db.Column(db.Boolean, nullable=True)
    pacienteOncologico = db.Column(db.Boolean, nullable=True)
    hiv = db.Column(db.Boolean, nullable=True)
    pneumopatia = db.Column(db.Boolean, nullable=True)
    puerpera = db.Column(db.Boolean, nullable=True)
    sindromeDown = db.Column(db.Boolean, nullable=True)
    terapiaRenal = db.Column(db.Boolean, nullable=True)
    transplantado = db.Column(db.Boolean, nullable=True)



    def save_to_db(self) -> None:
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self) -> None:
        db.session.delete(self)
        db.session.commit()

    @classmethod
    def find_by_cpf(cls, cpf: str) -> "VacinaModel":
        return cls.query.filter_by(cpf=cpf).first()