import {Table, Column, Model, HasMany, CreatedAt, UpdatedAt, PrimaryKey, AutoIncrement, Unique, BelongsToMany} from 'sequelize-typescript';
import {UserRoom} from './UserRoom';
import {User} from './User';

@Table
export class Room extends Model<Room> {
  @PrimaryKey
  @AutoIncrement
  @Column
  roomId: number;

  @Unique
  @Column
  RoomKey: string;

  @BelongsToMany(() => User, () => UserRoom)
  users: User[];

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

}
