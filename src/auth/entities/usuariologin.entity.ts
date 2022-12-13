import { ApiProperty } from "@nestjs/swagger/dist"

export class UsuarioLogin {

    @ApiProperty()
    usuario: string

    @ApiProperty()
    senha: string

}