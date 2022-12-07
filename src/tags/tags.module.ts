import { Module } from '@nestjs/common';
import { TagsController } from './tags.controller';
import { TagsService } from './tags.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Tag} from "./tags.model";
import {Post} from "../posts/posts.model";
import {PostTags} from "./post-tags.model";

@Module({
  controllers: [TagsController],
  providers: [TagsService],
  imports: [
    SequelizeModule.forFeature([Tag, Post, PostTags])
  ]
})

export class TagsModule {}
