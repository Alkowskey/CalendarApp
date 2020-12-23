import {Table, Column, Model, HasMany, CreatedAt, UpdatedAt, PrimaryKey, AutoIncrement, Unique, BelongsToMany} from 'sequelize-typescript';
import {UserRoom} from './UserRoom';
import {Room} from './Room';

@Table
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column
  userId: number;

  @Unique
  @Column
  name: string;

  @Column
  color: string;

  @Column
  birthday: Date;

  @BelongsToMany(() => Room, () => UserRoom)
  rooms: Room[];

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

}
