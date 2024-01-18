import { Entity, Column, Index } from 'typeorm';
import { SharedEntity } from './base.entity';

@Entity('user')
export class UserEntity extends SharedEntity {
  @Index()
  @Column({
    type: 'varchar',
    length: 50,
    name: 'username',
    nullable: true,
    comment: '账号',
  })
  username!: string;

  @Column({
    type: 'varchar',
    length: 100,
    name: 'password',
    comment: '密码',
  })
  password!: string;

  // @Column({
  //   type: 'tinyint',
  //   name: 'account_type',
  //   nullable: true,
  //   default: '3',
  //   comment: '账号类型:1是admin,2是superAdmin,3普通账号',
  // })
  // accountType!: number;

  // @Column({
  //   type: 'int',
  //   name: 'department_id',
  //   nullable: true,
  //   default: '-1',
  //   comment: '部门',
  // })
  // departmentId!: number;

  // @Column({
  //   type: 'tinyint',
  //   name: 'status',
  //   nullable: true,
  //   default: '0',
  //   comment: '状态0是正常,1是禁用',
  // })
  // status!: number;

  // @Column({
  //   type: 'varchar',
  //   length: 30,
  //   name: 'last_login_ip',
  //   nullable: true,
  //   comment: '最后登录ip地址',
  // })
  // lastLoginIp!: string;

  // @Column({
  //   type: 'timestamp',
  //   name: 'last_login_date',
  //   nullable: true,
  //   comment: '最后登录时间',
  // })
  // lastLoginDate!: Date;

  @Column({
    type: 'varchar',
    length: 30,
    name: 'salt',
    nullable: true,
    comment: '密码盐',
  })
  salt!: string;
}
