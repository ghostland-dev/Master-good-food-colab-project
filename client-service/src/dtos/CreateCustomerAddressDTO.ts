import { IsNotEmpty, IsString, IsBoolean, IsNumber } from "class-validator";

export class CreateCustomerAddressDTO {
  @IsNumber()
  @IsNotEmpty()
  user_id: number;

  @IsString()
  @IsNotEmpty()
  address_line: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  postal_code: string;

  @IsBoolean()
  is_default: boolean;
}
