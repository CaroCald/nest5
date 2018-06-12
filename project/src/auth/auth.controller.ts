import {BadRequestException, Body, Controller, Post} from "@nestjs/common";
import {JwtService} from "../servicios/jwt.service";

@Controller('Auth')
export class AuthController {
    constructor(private _jwtService: JwtService){

    }
    @Post('emitir')
    emitirToken(@Body('usuario') usuario, @Body('password') password){
        const enviarParametros= usuario && password;
        if(enviarParametros){
            const credencialesValidas= usuario==='adrianeguez' && password==='1234';
            if(credencialesValidas){
                return {
                    jwt: this._jwtService.emitirToken({
                        usuario:usuario
                    })
                };
            }
            else{
                throw new BadRequestException(
                    {
                        mensaje: 'credenciales invalidas'
                    }
                )
            }
        }else
        {
            throw new BadRequestException({
                mensaje:'No envia parametros'
            })
        }
    }

    @Post('verificarSync')
    verificarTokenSync(@Body('jwt') jwt){
        const enviaParametos=jwt;
        if(enviaParametos){
            const tokenValido=this._jwtService.verificarTokenSync(jwt);
            if(tokenValido){
                return {mensaje: 'OK'}
            }else {
                throw new BadRequestException({
                    mensaje:'Token no valido'
                })
            }
        }else{
            throw new BadRequestException({
                mensaje:'No envia parametros'
            })
        }

    }

    @Post('verificarAsync')
    verificarTokeAsyn(@Body('jwt') jwt){
        const enviarParametos=jwt;
        if(enviarParametos){
           this._jwtService.verificarTokenASync(jwt, (error, datos)=>{
               if(error){
                   throw new  BadRequestException({
                       mensaje: 'Token Invalido',
                       error: error
                   });
               }
           })

        }else{
            throw new BadRequestException({
                mensaje:'No envia parametros'
            })
        }
    }
}