import { Controller, Get } from '@nestjs/common';
import { Res } from '@nestjs/common/decorators';
import { ApiExcludeEndpoint } from '@nestjs/swagger';


@Controller()
export class AppController {
  getBlog(): any {
    throw new Error('Method not implemented.');
  }
  constructor() {}

  @ApiExcludeEndpoint()
  @Get()
  async redirect(@Res() resposta: any){
    return resposta.redirect('/swagger')
  }
  
}