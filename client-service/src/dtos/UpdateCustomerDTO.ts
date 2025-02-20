import { IsOptional, IsString, IsEmail } from "class-validator";

export class UpdateCustomerDTO {
  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  firstname?: string;

  @IsOptional()
  @IsString()
  lastname?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  role_id?: number;

  @IsOptional()
  is_active?: boolean;
}
