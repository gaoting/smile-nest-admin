// import {Type} from 'class-transformer'
import {IsNotEmpty, MaxLength} from 'class-validator'

export class CreateUserDto {
  @MaxLength(50, { message: '账号最大长度为50' })
  @IsNotEmpty({message:'用户名不能为空'})
  username!: string;
}
