import {Column, Model, Table, DataType, BelongsTo, ForeignKey, HasMany, BelongsToMany} from "sequelize-typescript";
import {User} from "../users/users.model";
import {Comment} from "../comments/comments.model";
import {PostTags} from "../tags/post-tags.model";
import {Tag} from "../tags/tags.model";

interface PostCreationAttrs {
    title: string;
    content: string;
    userId: number;
}

@Table({tableName: 'posts'})
export class Post extends Model<Post,PostCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id:number;
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    title:string;
    @Column({type: DataType.STRING, allowNull: false})
    content: string;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @BelongsTo(() => User)
    author: User

    @HasMany(() => Comment)
    comments: Comment[]

    @BelongsToMany(() => Tag, () => PostTags)
    tags: Tag[]
}
