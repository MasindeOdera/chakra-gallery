import React, { useState } from 'react';
import ProductDetail from '../component/ProductDetail';
import { Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const ProductGallery = () => {
  const initialProductColors = [
    { id: 1, colors: ['GreyBlue', 'Black', 'Sand'] },
    { id: 2, colors: ['Navy', 'Red'] },
    { id: 3, colors: ['BlackIsh', 'White'] },
    { id: 4, colors: ['WhiteIsh'] }
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
    <Flex direction={['column', 'column', 'row']} justify="center" align="center" height="100vh" flexWrap="wrap">
      {initialProductColors.map((product) => (
        <ProductDetail
          key={product.id}
          productId={product.id}
          colors={product.colors}
          selectedColor={selectedColors[product.id] || product.colors[0]} // Fetch selected color for this product
          onColorChange={(color) => handleColorChange(product.id, color)}
        />
      ))}
    </Flex>
  );
};

export default ProductGallery;
