import { Flex, Heading, Text, Link, useColorMode,} from '@chakra-ui/react';
import { FiGlobe } from 'react-icons/fi'


const LearningItem = ({ title, desc, href }) => {

  const { colorMode } = useColorMode()

  return (
    <Flex flexDirection={'column'} justify={'flex-start'} align={'flex-start'} marginBottom={10}>
      <Heading size={'xl'}>
        {title}
      </Heading>
      <Text textAlign={'left'} w={'95%'}>
        {desc}
      </Text>
      <Link href={href} isExternal display={'flex'} gap={2} color={colorMode === 'light' ? 'blue.600' : 'blue.400'}>
        <FiGlobe size={25}/>Official Site
      </Link>
    </Flex>
  )
}

const Learning = () => {
  return (
    <Flex  flexDirection={'column'} justify={'center'} align={'flex-start'} h={'100%'} marginLeft={10} id='learning'>
        <Heading as='h1' size='3xl'  marginBottom={10}>
            Currently Learning
        </Heading>
        <LearningItem title={'React.js'} href={'https://reactjs.org/'} desc="React is a free and open-source front-end JavaScript library for building user interfaces 
                                                                            based on UI components. It is maintained by Meta and a community of individual developers 
                                                                            and companies. This library is incredibly fun to learn and use. It makes web development
                                                                            so incredibly easy. Javascript is also just the s*** in general."/>
        <LearningItem title={'Node.js'} href={'https://nodejs.org/en/'} desc='Node.js is an open-source, cross-platform, back-end JavaScript runtime environment 
                                                                              that runs on the V8 engine and executes JavaScript code outside a web browser. My
                                                                              goal with learning Node is to ultimately build a lean, mean, request processing 
                                                                              machine (program) and host my own server. Alternatively, I will open an Inmotion
                                                                              account.' />
        <LearningItem title={'Go'} href={'https://go.dev/'} desc="Go is a statically typed, compiled programming language designed at Google by Robert Griesemer, 
                                                                  Rob Pike, and Ken Thompson. It is syntactically similar to C, but with memory safety, garbage 
                                                                  collection, structural typing, and CSP-style concurrency. I am excited to be learning Go because 
                                                                  I feel it will be a slightly more forgiving environemnt in to advance my skills with pointers."/>
    </Flex>
  )
}

export default Learning