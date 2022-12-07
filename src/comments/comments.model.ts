import {Column, Model, Table, DataType, BelongsTo, ForeignKey} from "sequelize-typescript";
import {User} from "../users/users.model";
import {Post} from "../posts/posts.model";

interface CommentCreationAttrs {
    content: string;
    postId: number;
    userId: number;
}

@Table({tableName: 'comments'})
export class Comment extends Model<Comment,CommentCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id:number;
    @Column({type: DataType.STRING, allowNull: false})
    content: string;

    @ForeignKey(() => Post)
    @Column({type: DataType.INTEGER})
    postId: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;
}
