import {Table, Column, Model, HasMany, CreatedAt, UpdatedAt, PrimaryKey, AutoIncrement, Unique, HasOne, BelongsTo, ForeignKey} from 'sequelize-typescript';
import {User} from './User';
import {Room} from './Room';

@Table
export class UserRoom extends Model<UserRoom> {
    @ForeignKey(() => User)
    @Column
    userId: number;

    @ForeignKey(() => Room)
    @Column
    roomId: number;

}