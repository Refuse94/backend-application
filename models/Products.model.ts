import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  productname!: string;

  @Column()
  productprice!: number;

  @Column()
  productcompany!: string;
}
