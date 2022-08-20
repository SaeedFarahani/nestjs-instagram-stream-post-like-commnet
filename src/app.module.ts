import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentLikeModule } from './comment-like/comment-like.module';

@Module({
  imports: [CommentLikeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
