import React, { useState } from 'react';
import ProductDetail from '../components/ProductDetail';
import { Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const ProductGallery = () => {
  const initialProductColors = [
    { id: 1, colors: ['GreyBlue', 'Black', 'Sand'], price1: '49,99 €', price2: '19,99 €'  },
    { id: 2, colors: ['Navy', 'Red'],price1: '89,99 €' },
    { id: 3, colors: ['BlackIsh', 'White'], price1: '49,99 €', price2: '38,99 €'  },
    { id: 4, colors: ['WhiteIsh'], price1: '49,99 €'  }
  ];

  const [products, setProducts] = useState(initialProductColors);

  const selectedColors = useSelector((state) => state.color);

  const handleColorChange = (productId, color) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, selectedColor: color }
          : product
      )
    );
  };

  return (
    <Flex direction={['column', 'column', 'row']} justify="center" align="center" height="100vh" flexWrap="wrap" gap="10px">
      {initialProductColors.map((product) => (
        <ProductDetail
          key={product.id}
          productId={product.id}
          colors={product.colors}
          price1={product.price1}
          price2={product.price2}
          selectedColor={selectedColors[product.id] || product.colors[0]} // Fetch selected color for this product
          onColorChange={(color) => handleColorChange(product.id, color)}
        />
      ))}
    </Flex>
  );
};

export default ProductGallery;
