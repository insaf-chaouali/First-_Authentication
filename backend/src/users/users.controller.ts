import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<{ message: string; user: User }> {
    const { email } = createUserDto;

    const existing = await this.usersService.findByEmail(email);
    if (existing) {
      throw new HttpException('Cet email est déjà utilisé', HttpStatus.BAD_REQUEST);
    }

    const { password, firstName, lastName, phoneNumber } = createUserDto;

    const user = await this.usersService.createUser(
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
    );

    return {
      message: 'Inscription réussie',
      user,
    };
  }
}
