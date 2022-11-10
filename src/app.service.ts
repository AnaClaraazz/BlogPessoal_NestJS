import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getBlog(): string {
    return 'Esse é meu BlogPessoal';
  }
  getnome(): string {
    return 'Me chamo Ana Clara';
  }
  getsou(): string {
    return 'Sou uma futura DEV'
  }
}
