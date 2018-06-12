import {Get, Controller, ReflectMetadata, Post} from '@nestjs/common';
import { AppService } from './app.service';
import {UsuarioPipe} from "./usuario/usuario.pipe";
import {USUARIO_SCHEMA} from "./usuario/usuario.schema";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ReflectMetadata('metodoasegurado', false)
  @ReflectMetadata('roles', ['Admin', 'usuario'])
  root(): string {
      return this.appService.root();
  }

    @Post('Crear')
    @ReflectMetadata('metodoasegurado', true)
    crear() {

    }


}
