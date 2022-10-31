import { faker } from '@faker-js/faker';
import { ItemTypeOrmEntity } from './item.typeorm-entity';

export const itemFixtureFactory = (
  input: Partial<ItemTypeOrmEntity>
): ItemTypeOrmEntity => {
  console.log(new ItemTypeOrmEntity());
  return Object.assign(new ItemTypeOrmEntity(), {
    id: faker.datatype.uuid() as ItemTypeOrmEntity['id'],
    bagSectionId: faker.datatype.uuid(),
    name: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    quantity: faker.datatype.number(100),
    weight: faker.datatype.float({ min: 0.01, max: 1000, precision: 2 }),
    ...input,
  });
};
