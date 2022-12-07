import { Module } from "@nestjs/common";
import { Bcrypt } from "./bcrypt/bcrypt";
import { AuthController } from "./controller/auth.controller";

@Module({
    imports: [],
    providers: [Bcrypt],
    controllers: [AuthController],
    exports: [Bcrypt]
})
export class AuthModule { }