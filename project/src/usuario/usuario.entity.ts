import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('web_usuario_carolina')
export class UsuarioEntity{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({ length: 500 })
    nombre: string;

    @Column({ length: 500 })
    apellido: string;

    @Column({ length: 500 })
    edad: string;

}