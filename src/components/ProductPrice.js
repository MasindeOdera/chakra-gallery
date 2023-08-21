import React from 'react';
import { Text } from '@chakra-ui/react';

const ProductPrice = ({ price1, price2 }) => {
  const parsedPrice1 = parseFloat(price1);
  const parsedPrice2 = parseFloat(price2);

  const discountPercentage = price2 ? ((parsedPrice1 - parsedPrice2) / parsedPrice1) * 100 : 0;

  if (price2) {
    return (
      <Text ml="10px">
        <s>{parsedPrice1.toFixed(2)}</s> <span style={{ color: 'red' }}>{parsedPrice2.toFixed(2)}</span>{" "}
        <span
          style={{
            fontSize: 'smaller',
            border: '1px solid red',
            color: 'red',
            padding: '2px',
            borderRadius: '4px',
            marginLeft: '5px',
          }}
        >
          - {discountPercentage.toFixed(0)}%
        </span>
      </Text>
    );
  } else {
    return <Text>{parsedPrice1.toFixed(2)}</Text>;
  }
};

export default ProductPrice;
