import * as React from 'react';
import NextLink from 'next/link';
import {
  Container,
  Box,
  Link as ChakraLink,
  SimpleGrid,
  Stack,
  Text,
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  Link
} from '@chakra-ui/react';
import FooterSignup from '@/components/footer/signup';
import { siteConfig } from '@/components/footer/site-config';
// Here we have used react-icons package for the icons
import { FaGithub, FaDev, FaLinkedin, FaQuora, FaTwitter } from 'react-icons/fa';
import { NextURL } from 'next/dist/server/web/next-url';

const Footer = () => {
  return (
    <Container maxW="5xl" p={{ base: 5, md: 10 }}>
      <SimpleGrid
        flexDirection="column-reverse"
        gridTemplateColumns={['1fr', '1fr', '1fr 1fr', '1fr 1fr']}
        borderTopWidth={2}
        mt="30px"
        borderTopColor="gray.900"
        pt="20px"
      >
        <Box d={['block', 'block', 'none', 'none']} mb="30px">
          <FooterSignup />
        </Box>
        <Box>
          <SimpleGrid columns={[1, 1, 2, 2]}>
            <Stack mb={['10px', '10px', 0, 0]}>
              <Text as="span">
                <NextLink href="/Contact" >Contact Me</NextLink>
              </Text>
              <Text as="span">
                <NextLink href="/faqs"  > FAQs</NextLink>
              </Text>
              <Text as="span">
                <NextLink href="/testimonials" > Testimonials</NextLink>
              </Text>
            </Stack>
            <Stack>
             
              <Text as="span">
                <NextLink href="/Sponsor" >Sponsor</NextLink>
              </Text>
              <Text as="span">
                <NextLink href="/Contribute" > Contribute</NextLink>
              </Text>
            </Stack>
          </SimpleGrid>
          <Text mt="12px" color="gray.500">
            Copyright 2022, All Rights Reserved.
           
          </Text>
        </Box>
        <Box d={['none', 'none', 'block', 'block']}>
          <FooterSignup />
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Footer;