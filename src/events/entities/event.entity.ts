import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column()
  name: string;

  @Column()
  type: string;

  // that we can save any kind of data in the payload column
  @Column('json')
  payload: Record<string, any>;
}
