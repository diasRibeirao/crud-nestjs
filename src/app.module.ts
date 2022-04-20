import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('##COPIAR_AQUI##'),
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
