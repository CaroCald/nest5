import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {UsuarioEntity} from "./usuario/usuario.entity";
import {JwtService} from "./servicios/jwt.service";
import {AuthController} from "./auth/auth.controller";

@Module({
  imports: [

  ],
  controllers: [AppController, AuthController],
  providers: [AppService, JwtService],
})
export class AppModule {}
