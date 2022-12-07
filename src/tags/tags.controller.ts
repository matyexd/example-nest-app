import {Body, Controller, Get, Param, Post, Put, Query} from '@nestjs/common';
import {RolesService} from "../roles/roles.service";
import {CreateRoleDto} from "../roles/dto/create-role.dto";
import {TagsService} from "./tags.service";
import {CreateTagDto} from "./dto/create-tag.dto";

@Controller('tags')
export class TagsController {
    constructor(private tagsService: TagsService) {
    }

    @Post()
    create(@Body() dto: CreateTagDto){
        return this.tagsService.createTag(dto)
    }

    @Get()
    get() {
        return this.tagsService.getTags()
    }

    @Put('?')
    getByValue(@Query('postId') postId: number,@Query('tagId') tagId: number) {
        console.log(postId, tagId)
        return this.tagsService.setPostTag(postId, tagId)
    }
}
