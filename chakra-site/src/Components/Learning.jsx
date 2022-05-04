import { Flex, Heading, Text, Link, useColorMode,} from '@chakra-ui/react';
import { FiGlobe } from 'react-icons/fi'
import LearningData from '../Documents/Learning.json'


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
        {LearningData.map((data, index) => (
          <LearningItem {...data} key={index} />
        ))}
    </Flex>
  )
}

export default Learning