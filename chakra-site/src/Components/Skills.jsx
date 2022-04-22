import { Flex, Heading, Text} from '@chakra-ui/react';

const Skills = () => {

  return (
    <Flex  flexDirection={'column'} justify={'center'} align={'flex-start'} h={'100%'} marginLeft={10} id='skills'>
        <Heading as='h1' size='3xl'>
            Skills
        </Heading>
        <Text fontStyle={'italic'}>None</Text>
    </Flex>
  )
}

export default Skills