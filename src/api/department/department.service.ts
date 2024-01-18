import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
// import {}

@Injectable()
export class DepartmentService {
  // constructor(
  //   @InjectRepository()
  // ){}

  create(createDepartmentDto: CreateDepartmentDto) {
    return createDepartmentDto;
  }

  findAll() {
    return `This action returns all department`;
  }

  findOne(id: number) {
    return `This action returns a #${id} department`;
  }

  update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    return { id, updateDepartmentDto };
  }

  remove(id: number) {
    return `This action removes a #${id} department`;
  }
}
