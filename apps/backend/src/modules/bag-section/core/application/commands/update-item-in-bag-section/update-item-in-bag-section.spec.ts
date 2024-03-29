import { TestingModule } from '@nestjs/testing';
import { DataSource, Repository } from 'typeorm';
import { testingModuleFactory } from '../../../../../../shared/test/test.module';
import { BagSectionModule } from '../../../../bag-section.module';
import { ItemTypeOrmEntity } from '../../../../infrastructure/typeorm/item/item.typeorm-entity';
import { bagSectionId, fixtures, itemIdOne } from './fixtures';
import { UpdateItemInBagSectionCommand } from './update-item-in-bag-section.command';
import { UpdateItemInBagSectionCommandHandler } from './update-item-in-bag-section.command-handler';
describe('UpdateItemInBagSectionCommandHandler', () => {
  let commandHandler: UpdateItemInBagSectionCommandHandler;
  let itemRepository: Repository<ItemTypeOrmEntity>;
  let dataSource: DataSource;
  let module: TestingModule;

  beforeAll(async () => {
    [module, dataSource] = await testingModuleFactory(
      [BagSectionModule],
      fixtures
    );
    commandHandler = module.get(UpdateItemInBagSectionCommandHandler);
    itemRepository = dataSource.getRepository(ItemTypeOrmEntity);
  });

  afterAll(async () => {
    await dataSource.destroy();
  });

  it('should update an item', async () => {
    const command = new UpdateItemInBagSectionCommand({
      id: itemIdOne,
      name: 'newName',
      description: 'newDescription',
      weight: 20000,
      quantity: 42,
    });
    await commandHandler.execute(command);
    const updatedItem = await itemRepository.findOneOrFail({
      where: { id: itemIdOne },
    });
    expect({ ...updatedItem }).toStrictEqual({
      id: itemIdOne,
      name: 'newName',
      description: 'newDescription',
      bagSectionId: bagSectionId,
      weight: 20000,
      quantity: 42,
      bagSection: undefined,
    });
  });
});
