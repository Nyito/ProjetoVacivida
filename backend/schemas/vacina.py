from schema import ma
from models.vacina import VacinaModel


class VacinaSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = VacinaModel
        dump_only = ("id",)
        load_instance = True
