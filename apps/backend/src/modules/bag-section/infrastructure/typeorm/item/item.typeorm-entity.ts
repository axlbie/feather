import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BagSectionTypeOrmEntity } from '../bag-section/bag-section.typeorm-entity';

@Entity()
export class ItemTypeOrmEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column()
  quantity!: number;

  @Column({ type: 'float' })
  weight!: number;

  @ManyToOne(() => BagSectionTypeOrmEntity)
  @JoinColumn()
  bagSection: BagSectionTypeOrmEntity | undefined | null;

  @Column({ nullable: true })
  bagSectionId!: BagSectionTypeOrmEntity['id'] | null;

  public toObject() {
    return Object.fromEntries(
      Object.entries({ ...this }).filter(([, v]) => !!v)
    );
  }
}
