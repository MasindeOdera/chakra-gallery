import React from 'react';
import { Flex, Card, Image, Box, Spacer } from '@chakra-ui/react';
import ProductSize from './ProductSize';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedColor } from '../redux/colorSlice';
import '../styles/ProductDetail.scss';

const ProductDetail = ({ productId, colors, onColorChange }) => {
  const imageUrls = {
    GreyBlue: '/img/image1.jpg',
    Black: '/img/image1-2.webp',
    Sand: '/img/image1-3.webp',
    Navy: '/img/image2.webp',
    Red: '/img/image2-1.webp',
    WhiteIsh: '/img/image3.jpg',
    BlackIsh: '/img/image4.jpg',
    White: '/img/image4-1.webp'
  };

  const productColors = {
    GreyBlue: '#465e89',
    Black: '#000000',
    Sand: '#ece90a',
    Navy: '#08369c',
    Red: '#dc2626',
    WhiteIsh: '#ffffff',
    BlackIsh: '#000000',
    White: '#ffffff'
  };

  const dispatch = useDispatch();
  const selectedColor = useSelector((state) => state.color[productId]);

  const handleColorChange = (color) => {
    dispatch(setSelectedColor({ productId, color }));
    onColorChange(color);
  };

  const selectedImageUrl = imageUrls[selectedColor];

  return (
    <Flex direction="column" boxSize="270px" h="460px" p="2" m="2" shadow="md">
      <Image src={selectedImageUrl} alt="Product" boxSize="270px" h="406px" mt="2" mb="2"/>
      <Flex>
        <Box className="color-selection">
          <Flex>
          {colors.map((color) => (
            <Card
              key={color}
              className={selectedColor === color ? 'image-selection active' : 'image-selection'}
              p="2"
              m="2"
              shadow="md"
              maxW="100px"
              bg={productColors[color]}
              cursor="pointer"
              _hover={{ bg: 'gray.200' }}
              onClick={() => handleColorChange(color)}
            >
            </Card>
          ))}
          </Flex>
        </Box>
        <Spacer />
        <Box>
          <ProductSize />
        </Box>
      </Flex>
    </Flex>
  );
};

export default ProductDetail;
