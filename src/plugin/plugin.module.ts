import { Global, Module } from '@nestjs/common';
import { ToolsService } from './tools.server';

@Global()
@Module({
  providers: [ToolsService],
  exports: [],
  imports: [],
})
export class PluginModule {}
