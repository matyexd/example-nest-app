import { Module } from '@nestjs/common';
import {CommentsController} from "./comments.controller";
import {CommentsService} from "./comments.service";
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/users.model";
import {Post} from "../posts/posts.model";
import {Comment} from "./comments.model"

@Module({
    controllers: [CommentsController],
    providers: [CommentsService],
    imports: [
        SequelizeModule.forFeature([User, Post, Comment])
    ]
})
export class CommentsModule {}
