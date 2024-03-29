import { bagSectionFixtureFactory } from '../../core/domain/bag.model';
import { itemFixtureFactory } from '../../core/domain/item.model';
import { addItemInBag, bagSectionReducer } from './bag-section.reducer';

const initialState = {
  value: bagSectionFixtureFactory(),
};
const itemToAdd = itemFixtureFactory();

describe('bagSectionReducer', () => {
  it('should add an item', () => {
    const actual = bagSectionReducer(initialState, addItemInBag(itemToAdd));
    expect(actual.value.getContent().length).toStrictEqual(4);
  });
});
