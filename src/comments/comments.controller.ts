import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {CommentsService} from "./comments.service";
import {CreateCommentDto} from "./dto/create-comment.dto";

@Controller('comments')
export class CommentsController {
    constructor( private commentsService: CommentsService) {
    }

    @Post()
    createComment(@Body() dto: CreateCommentDto) {
        return this.commentsService.createComment(dto)
    }

    @Get('/:value')
    getPostComments(@Param('value') value: number) {
        return this.commentsService.getPostComments(value);
    }
}
