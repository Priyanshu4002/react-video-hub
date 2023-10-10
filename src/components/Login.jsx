import { Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
   <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack alignItems={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} my={'16'}>
          <Heading>Welcome Back</Heading>

          <Input required placeholder='Email' focusBorderColor='purple.500' type='email'/>
          <Input required placeholder='Password' focusBorderColor='purple.500' type='password'/>
          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forgetpaassword'}>Forget Password</Link>
          </Button>
          <Button type='submit' colorScheme={'purple'}>Log In</Button>
          <Text textAlign={'right'} >New User? {" "}
            <Button variant={'link'} colorScheme={'purple'}>
              <Link to={'/signup'}>Sign Up</Link>
            </Button>
          </Text>
          
        </VStack>
      </form>
   </Container>
  )
}

export default Login
