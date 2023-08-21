import React from 'react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Grid, GridItem, Link, Text } from '@chakra-ui/react';

const ProductSize = ({ productId }) => {
  return (
    <Accordion allowToggle>
      <AccordionItem className="reset-style">
        <h2>
          <AccordionButton>Größen</AccordionButton>
        </h2>
        <AccordionPanel className="custom-accordion-panel">
          <Grid templateColumns='repeat(5, 1fr)' gap={6}>
            <GridItem w='100%'>
              <Link><Text as='b'>XS</Text></Link>
            </GridItem>
            <GridItem w='100%'>
              {productId === 1 ? (
                <Link><Text as='s'>S</Text></Link> // Apply strikethrough for first product.
              ) : (
                <Link><Text as='b'>S</Text></Link>
              )}
            </GridItem>
            <GridItem w='100%'>
              <Link><Text as='b'>M</Text></Link>
            </GridItem>
            <GridItem w='100%'>
              {productId === 3 ? (
                <Link><Text as='s'>XL</Text></Link>
              ) : (
                <Link><Text as='b'>XL</Text></Link>
              )}
            </GridItem>
            <GridItem w='100%'>
              <Link><Text as='b'>XXL</Text></Link>
            </GridItem>
          </Grid>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default ProductSize;