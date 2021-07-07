from db import db


class UserModel(db.Model):
    __tablename__ = "vacinado"
    cpf = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(80), nullable=False)
    dataNascimento = db.Column(db.DateTime, nullable=True)
    telefone = db.Column(db.Integer, nullable=False)
    endereco = db.Column(db.String(150), nullable=False)
    nomeMae = db.Column(db.String(80), nullable=False)
    nomeAplicador = db.Column(db.String(80), nullable=False)
    fabricante = db.Column(db.String(80), nullable=False)
    dose = db.Column(db.String(80), nullable=False)
    lote = db.Column(db.String(80), nullable=False)


    def save_to_db(self) -> None:
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self) -> None:
        db.session.delete(self)
        db.session.commit()


    @classmethod
    def find_by_username(cls, username: str) -> "UserModel":
        return cls.query.filter_by(username=username).first()

    @classmethod
    def find_by_email(cls, email: str) -> "UserModel":
        return cls.query.filter_by(email=email).first()

    @classmethod
    def find_by_id(cls, _id: int) -> "UserModel":
        return cls.query.filter_by(id=_id).first()
