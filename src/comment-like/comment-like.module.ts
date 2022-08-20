import { Module } from '@nestjs/common';
import { CommentLikeService } from './comment-like.service';
import { CommentLikeService } from './comment-like.service';

@Module({
  providers: [CommentLikeService]
})
export class CommentLikeModule {}
