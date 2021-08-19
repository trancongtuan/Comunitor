
import { Module } from '@nestjs/common';
import { AppGateway } from './chat.gateway';

@Module({
  imports: [],
  controllers: [],
  providers: [AppGateway],
})
export class ChatModule {}