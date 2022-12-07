import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Tag} from "./tags.model";
import {CreateTagDto} from "./dto/create-tag.dto";
import {Post} from "../posts/posts.model";
import {PostsService} from "../posts/posts.service";

@Injectable()
export class TagsService {
    constructor(@InjectModel(Tag) private tagsRepository: typeof Tag, @InjectModel(Post) private postRepository: typeof Post) {
    }


    async createTag(dto: CreateTagDto) {
        const tag = await this.tagsRepository.create(dto)
        return tag;
    }

    async getTags() {
        const tags = await this.tagsRepository.findAll({include: {all: true}});
        return tags
    }

    async setPostTag(postId: number, tagId: number) {
        const post = await this.postRepository.findOne({where: {id: postId}})
        const tags = await post.$get('tags')
        const tagsId = tags.map(tag => tag.id)
        await post.$set('tags', [...tagsId, tagId])
    }
}
