import { Column } from 'typeorm';
import { SharedEntity } from '../../user/entities/base.entity';

export class Department extends SharedEntity {
  @Column({
    type: 'varchar',
    length: 50,
    name: 'title',
    comment: '部门名称',
  })
  title!: string;

  @Column({
    type: 'int',
    name: 'department_id',
    comment: 'id',
  })
  department_id!: number;

  @Column({
    type: 'varchar',
    length: 50,
    name: 'mobile',
    nullable: true,
    comment: '手机号',
  })
  mobild!: string;

  @Column({
    type: 'varchar',
    length: 50,
    name: 'email',
    nullable: true,
    comment: '邮箱',
  })
  email!: string;

  @Column({
    type: 'varchar',
    length: 255,
    name: 'description',
    nullable: true,
    comment: '描述',
  })
  description!: string;

  @Column({
    type: 'tinyint',
    name: 'status',
    nullable: true,
    default: '0',
    comment: '状态0是正常,1是禁用',
  })
  status!: number;

  @Column({
    type: 'int',
    name: 'sort',
    nullable: true,
    default: '1',
    comment: '排序',
  })
  sort!: number;

  @Column({
    type: 'int',
    name: 'parent_id',
    nullable: true,
    default: -1,
    comment: '自己关联主键id',
  })
  parentId!: number;
}
