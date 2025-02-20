import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateCustomerDTO {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsNotEmpty()
  firstname: string;

  @IsNotEmpty()
  lastname: string;

  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  role_id: number;
}
