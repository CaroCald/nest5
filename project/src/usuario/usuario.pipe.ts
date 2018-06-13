
import {ArgumentMetadata, BadRequestException, Injectable, PipeTransform} from '@nestjs/common'
import {USUARIO_SCHEMA} from "./usuario.schema";
import * as Joi from 'joi';
import {PeticionInvalidaException} from "../exceptions/peticion-invalida.exception";
@Injectable()
export class UsuarioPipe implements PipeTransform{

    constructor(private schema) {}

    transform(valorEnBrutoDelRequest:any, metadatosDelosDecoradorasDelNestJs: ArgumentMetadata){
        this.schema=USUARIO_SCHEMA;
        const {
            error
        }=Joi.validate(valorEnBrutoDelRequest, this.schema);

        if(error){
            throw new  PeticionInvalidaException('Peticion Invalida',error, 4);

        }
        return valorEnBrutoDelRequest;
    }

    //
}
