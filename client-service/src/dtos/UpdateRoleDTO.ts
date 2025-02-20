import { IsOptional, IsString, IsArray } from "class-validator";

export class UpdateRoleDTO {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  permissions?: string[];
}
