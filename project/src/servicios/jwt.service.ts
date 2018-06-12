import {Injectable} from "@nestjs/common";

const jwtPaquete:any =('jsonwebtoken');
@Injectable()
export class JwtService{
    private readonly  jwt = jwtPaquete;
    private readonly secreto= 'El sol no quema tanto';

    emitirToken(payload:any){
    this.jwt.sign(payload, this.secreto);
    }

}