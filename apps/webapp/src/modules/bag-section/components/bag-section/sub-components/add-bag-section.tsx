import { AddIcon } from '@chakra-ui/icons';
import { Button, Center } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

type Props = {
  addBagSection: () => void;
};

export const AddBagSection: FunctionComponent<Props> = ({ addBagSection }) => {
  return (
    <Button
      border="1px"
      borderColor="gray.200"
      borderRadius={'sm'}
      onClick={addBagSection}
    >
      <Center margin={'6px'}>
        <AddIcon boxSize={8} color="teal" />
      </Center>
    </Button>
  );
};
