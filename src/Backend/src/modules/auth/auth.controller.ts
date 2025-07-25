import { AuthService } from "./auth.service";
import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDto, LoginDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post('register')
    async register(@Body() body: unknown) {
        const data = RegisterDto.parse(body); //ZOD Verify
        return this.authService.register(data);
    }

    @Post('login')
    async login(@Body() body: unknown) {
        const data = LoginDto.parse(body);
        return this.authService.login(data);
    }


}