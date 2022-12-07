import {Module} from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import {ConfigModule} from "@nestjs/config";
import {User} from "./users/users.model";
import { RolesModule } from './roles/roles.module';
import {Role} from "./roles/roles.model";
import { PostsModule } from './posts/posts.module';
import {UserRoles} from "./roles/user-roles.model";
import {Post} from "./posts/posts.model";
import { TagsModule } from './tags/tags.module';
import { CommentsModule } from './comments/comments.module';
import {Comment} from "./comments/comments.model";
import {PostTags} from "./tags/post-tags.model";
import {Tag} from "./tags/tags.model";


@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Role, UserRoles, Post, Comment, PostTags, Tag],
            autoLoadModels: true
        }),
        UsersModule,
        RolesModule,
        PostsModule,
        TagsModule,
        CommentsModule,
    ]
})
export class AppModule {

}