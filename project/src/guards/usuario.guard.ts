
import {CanActivate, ExecutionContext, Injectable} from "@nestjs/common";
import {Observable} from "rxjs/index";
import {Reflector} from "@nestjs/core";

@Injectable()
export class UsuarioGuard implements CanActivate {

    constructor(private reflector: Reflector) {
    }


    canActivate(
        context: ExecutionContext):
        boolean |
        Promise<boolean> |
        Observable<boolean> {
        const request = context
            .switchToHttp()
            .getRequest();
        console.log('Request', request);
        console.log('Cabeceras', request.headers);

        const reflectorNombreDato = this.reflector.get('nombreDato', context.getHandler());
        const reflectorPermisos = this.reflector.get('permiso', context.getHandler());

        // console.log('reflectorNombreDato', reflectorNombreDato);
        //console.log('reflectorPermisos', reflectorPermisos);
        const reflectorNecesitaValidacion = this.reflector.get('permiso', context.getHandler());


        if(reflectorNecesitaValidacion )
        {
            //validar


            //tomar el valor de la cookie de sesion
            //#id de sesion
            //buscamos en la base de datos los roles
            //administrador
            //sacar el reflector roles y buscar si hay el rol administrador


            /*if(tieneRoles){
                return true; //tiene acceso
            }
            else
            {
                return false; //forbidden
            }*/

        }else
        {
            //no validamos que tiene acceso
            return true;
        }
        return false;

    }

}