import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "./user-model";

@Table({
  tableName: "profiles",
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
})
export class Profile extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING(30),
    allowNull: false,
  })
  city!: string;

  @Column({
    type: DataType.STRING, //255
    allowNull: false,
  })
  detailInfo!: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: true,
  })
  user_id!: number;

  @BelongsTo(() => User)
  user!: User;
}
