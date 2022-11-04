import { FunctionComponent } from 'react';
import { Loader } from '../../../../shared/components/loader/loader';
import { useAddItemInBagSection } from '../../hooks/mutations/useAddItemInBagSection.hook';
import { useDeleteItemInBagSection } from '../../hooks/mutations/useDeleteItemInBagSection.hook';
import { useUpdateInBagSection } from '../../hooks/mutations/useUpdateItemInBagSection.hook';
import { useGetBagSections } from '../../hooks/queries/useGetBagSections.hook';
import { BagSectionsComponent } from './bag-sections.presentation';

export const BagSectionsContainer: FunctionComponent = () => {
  const { bagSections, isLoading, isError } = useGetBagSections();
  const { updateItemInBagSection } = useUpdateInBagSection();
  const { addItemInBagSection } = useAddItemInBagSection();
  const { deleteItemInBagSection } = useDeleteItemInBagSection();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>IS ERROR</div>;
  }

  if (bagSections.length === 0) {
    return <div>IS EMPTY</div>;
  }

  return (
    <BagSectionsComponent
      bagSections={bagSections}
      addItemInBag={addItemInBagSection}
      updateItemInBag={updateItemInBagSection}
      deleteItemInBag={deleteItemInBagSection}
    ></BagSectionsComponent>
  );
};
