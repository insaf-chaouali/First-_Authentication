import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const { email, password } = body;
    try {
      const user = await this.authService.validateUser(email, password);
      return {
        message: 'Connexion réussie',
        user,
      };
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }
}
