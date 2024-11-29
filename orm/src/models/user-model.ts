import {
  Column,
  DataType,
  Default,
  HasMany,
  HasOne,
  Model,
  Table,
} from "sequelize-typescript";
import { Post } from "./post-model";
import { Profile } from "./profile-model";

enum UserRole {
  ADMIN = "admin",
  USER = "user",
  GUEST = "quest",
}

@Table({
  tableName: "users",
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
})
export class User extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING(25),
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING(20),
    unique: true,
    allowNull: false,
  })
  login!: string;

  @Default(UserRole.GUEST)
  @Column({
    type: DataType.ENUM(...Object.values(UserRole)),
    allowNull: false,
  })
  role!: UserRole;

  @HasMany(() => Post)
  posts!: Post[];

  @HasOne(() => Profile)
  profile!: Profile;
}
