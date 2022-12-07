import {Column, Model, Table, DataType, BelongsTo, ForeignKey, HasMany, BelongsToMany} from "sequelize-typescript";
import {User} from "../users/users.model";
import {Comment} from "../comments/comments.model";
import {Post} from "../posts/posts.model";
import {PostTags} from "./post-tags.model";

interface TagCreationAttrs {
    name: string;
}

@Table({tableName: 'tags'})
export class Tag extends Model<Tag,TagCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id:number;
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name:string;

    @BelongsToMany(() => Post, () => PostTags)
    posts: Post[]
}
