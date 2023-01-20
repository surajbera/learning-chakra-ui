import { Box, SimpleGrid } from '@chakra-ui/react'

export default function Dashboard() {
  return (
    <div>
      <SimpleGrid columns={4} spacing={10} minChildWidth='250px' p='10px'>
        <Box bg='white' height='200px' border='1px solid'></Box>
        <Box bg='white' height='200px' border='1px solid'></Box>
        <Box bg='white' height='200px' border='1px solid'></Box>
        <Box bg='white' height='200px' border='1px solid'></Box>

        <Box bg='white' height='200px' border='1px solid'></Box>
        <Box bg='white' height='200px' border='1px solid'></Box>
        <Box bg='white' height='200px' border='1px solid'></Box>
        <Box bg='white' height='200px' border='1px solid'></Box>

        <Box bg='white' height='200px' border='1px solid'></Box>
        <Box bg='white' height='200px' border='1px solid'></Box>
        <Box bg='white' height='200px' border='1px solid'></Box>
        <Box bg='white' height='200px' border='1px solid'></Box>
      </SimpleGrid>
    </div>
  )
}
