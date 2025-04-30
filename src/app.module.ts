import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { RegisterController } from './register/register.controller';
import { RegisterService } from './register/register.service';
import { RegisterModule } from './register/register.module';
import { StaffController } from './staff/staff.controller';
import { StaffModule } from './staff/staff.module';
import { InventoryModule } from './inventory/inventory.module';
import { LogginModule } from './loggin/loggin.module';

@Module({
  imports: [AuthModule, RegisterModule, StaffModule, InventoryModule, LogginModule],
  controllers: [AppController, AuthController, RegisterController, StaffController],
  providers: [AppService, AuthService, RegisterService],
})
export class AppModule {}
