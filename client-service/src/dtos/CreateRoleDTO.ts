import { IsNotEmpty, IsString, IsArray } from "class-validator";

export class CreateRoleDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsArray()
  @IsString({ each: true })
  permissions: string[];
}
