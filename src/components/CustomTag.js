import React from 'react';
import { Tag, Text, Box } from '@chakra-ui/react';

const CustomTag = ({ text, number }) => {
  return (
    <Tag size="lg" rounded="full" m={2}>
      <Text fontWeight="bold">
        {text}{' '}
        <Box as="span" fontSize="sm" ml={1} color="black">
          <Text as="span" fontWeight="normal" fontSize="xs">
            {number}
          </Text>
        </Box>
      </Text>
    </Tag>
  );
};

export default CustomTag;
