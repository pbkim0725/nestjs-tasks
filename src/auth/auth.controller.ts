import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('/signup')
  signUp(@Body() authCredentialDto: AuthCredentialsDto) {
    console.log(authCredentialDto);
  }
}
