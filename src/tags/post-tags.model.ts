import {Column, Model, Table, DataType, BelongsToMany, ForeignKey} from "sequelize-typescript";
import {Post} from "../posts/posts.model";
import {Tag} from "./tags.model";

@Table({tableName: 'post-tags', createdAt: false, updatedAt: false})
export class PostTags extends Model<PostTags> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id:number;
    @ForeignKey(() => Tag)
    @Column({type: DataType.INTEGER})
    tagId: number;
    @ForeignKey(() => Post)
    @Column({type: DataType.INTEGER})
    postId: number;
}
