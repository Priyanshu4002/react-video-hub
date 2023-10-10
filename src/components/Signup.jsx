import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={['16','4']}>
      <form>
        <VStack alignItems={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} my={'16'}>
          <Heading>VIDEO HUB</Heading>
          <Avatar alignSelf={'center'} boxSize={'20'} />

          <Input required placeholder='Username' focusBorderColor='purple.500' type='text'/>
          <Input required placeholder='Email' focusBorderColor='purple.500' type='email'/>
          <Input required placeholder='Password' focusBorderColor='purple.500' type='password'/>
          <Button type='submit' colorScheme={'purple'}>Sign Up</Button>
          <Text textAlign={'right'} >already registered? {" "}
            <Button variant={'link'} colorScheme={'purple'}>
              <Link to={'/login'}>Log In</Link>
            </Button>
          </Text>
          
        </VStack>
      </form>
   </Container>
  )
}

export default Signup
