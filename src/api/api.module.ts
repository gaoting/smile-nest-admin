import { UserModule } from './user/user.module';

import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { MenusModule } from './menus/menus.module';
import { RoleModule } from './role/role.module';
import { DepartmentModule } from './department/department.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, MenusModule, LoginModule, DepartmentModule, RoleModule, AuthModule],
})
export class ApiModule {}
