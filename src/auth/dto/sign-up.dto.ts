import { IsEmail, IsNotEmpty } from "class-validator"

export class SignUpDto {
    @IsNotEmpty()
    name:string

    @IsNotEmpty()
    surname:string

    @IsEmail()
    email:string

    @IsNotEmpty()
    password:string
}
