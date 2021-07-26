from schema import ma
from models.vacina import VacinaModel1
from models.vacina import VacinaModel2

class VacinaSchema1(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = VacinaModel1
        dump_only = ("id",)
        load_instance = True

class VacinaSchema2(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = VacinaModel2
        dump_only = ("id",)
        load_instance = True
