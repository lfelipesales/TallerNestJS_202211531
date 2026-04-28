import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Museum {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  city: string;

  @Column()
  address: string;

  @Column()
  description: string;

  // NUEVO CAMPO
  @Column()
  foundedBefore: number;

}