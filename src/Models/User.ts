import {Table, Column, Model, HasMany, CreatedAt, UpdatedAt, PrimaryKey, AutoIncrement} from 'sequelize-typescript';
 
@Table
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column
  UserId: number;

  @Column
  name: string;

  @Column
  Color: string;
 
  @Column
  birthday: Date;

  @CreatedAt
  creationDate: Date;
 
  @UpdatedAt
  updatedOn: Date;
 
  /*@HasMany(() => Room)
  rooms: Room[];*/
}
