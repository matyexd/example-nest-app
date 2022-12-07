import {Body, Controller, Get, Post} from '@nestjs/common';
import {PostsService} from "./posts.service";
import {CreatePostDto} from "./dto/create-post.dto";

@Controller('posts')
export class PostsController {

    constructor( private postService: PostsService) {
    }

    @Post()
    createPost(@Body() dto: CreatePostDto) {
        return this.postService.create(dto)
    }

    @Get()
    getAllPosts() {
        return this.postService.getAll()
    }

}
