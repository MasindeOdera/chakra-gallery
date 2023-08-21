import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import ProductGallery from './view/ProductGallery';

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <ProductGallery />
    </ChakraProvider>
  );
}

export default App;
