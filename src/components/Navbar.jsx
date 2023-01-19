import { Box, Flex } from '@chakra-ui/react'

function Navbar() {
  return (
    <Flex
      bg='gray.200'
      /* justifyContent='space-between' */ justify='space-between'
      wrap='wrap'
      gap='2'
    >
      <Box w='150px' h='150px' bg='red'>
        1
      </Box>
      <Box w='150px' h='150px' bg='blue'>
        2
      </Box>
      <Box w='150px' h='150px' bg='green' flexGrow='1'>
        3
      </Box>
      <Box w='150px' h='150px' bg='yellow' flexGrow='2'>
        4
      </Box>
    </Flex>
  )
}

export default Navbar
