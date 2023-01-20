import {
  Box,
  Flex,
  Heading,
  Button,
  Text,
  Spacer,
  HStack,
} from '@chakra-ui/react'

function Navbar() {
  return (
    <Flex as='nav' p='10px' alignItems='center' border='1px solid green'>
      <Heading as='h1'>Dojo Tasks</Heading>
      <Spacer />
      <HStack spacing='20px'>
        <Box bg='gray.200' p='10px'>
          M
        </Box>
        <Text>mario@netninja.dev</Text>
        <Button colorScheme='purple'>Logout</Button>
      </HStack>
    </Flex>
  )
}

export default Navbar
