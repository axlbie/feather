import { FunctionComponent } from 'react';
import { BagSection } from '../../core/domain/bag.model';
import { BagSectionComponent } from '../bag-section/bag-section.presentation';

type Props = {
  bagSections: BagSection[];
};
export const BagSectionsComponent: FunctionComponent<Props> = ({
  bagSections,
}) => {
  return (
    <div>
      {bagSections.map((bagSection) => (
        <BagSectionComponent
          key={bagSection.getId()}
          bagSection={bagSection}
          addItemInBag={() => ({})}
          deleteItemInBag={() => ({})}
          updateItemInBag={() => ({})}
        />
      ))}
    </div>
  );
};