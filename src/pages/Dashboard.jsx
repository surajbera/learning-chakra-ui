import { Box, Container, Heading, Text } from '@chakra-ui/react'

export default function Dashboard() {
  return (
    <div>
      <Container as='section' /* maxWidth='960px' */ maxWidth='2xl'>
        <Heading my='10px' p='10px'>
          Chakra UI Component
        </Heading>
        <Text marginLeft='30px'>
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum{' '}
        </Text>
        <Text ml='30px' color='blue.400' fontWeight='bold'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          dolorem libero sapiente assumenda. Quibusdam expedita sint iste minus,
          nihil, unde sed neque quisquam autem ipsam tenetur repellat modi aut.
          Distinctio.
        </Text>
        <Box my='30px' p='20px' bg='linkedin.300'>
          <Text>This is a box!</Text>
        </Box>
      </Container>
    </div>
  )
}
