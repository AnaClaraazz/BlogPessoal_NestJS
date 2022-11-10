import { ApiProperty } from "@nestjs/swagger"

export class UsuarioLogin {

    @ApiProperty()
    usuario: string

    @ApiProperty()
    senha: string
}