import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {FotoEntity} from "../foto/foto.entity";

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

    @OneToMany(type => FotoEntity,
        foto=> foto.usuarioId)

    fotos:FotoEntity[];

}