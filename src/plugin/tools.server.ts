// import { Injectable } from '@nestjs/common';
// import { Request } from 'express';
import { v4 as uuidv4 } from 'uuid';

export class ToolsService {
  get uuidToken(): string {
    return uuidv4().replace(/-/g, '');
  }
}
