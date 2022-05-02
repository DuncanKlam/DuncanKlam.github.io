import { Flex, Heading, Text, SimpleGrid, Circle, useColorModeValue, HStack, Tooltip,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button} from '@chakra-ui/react';
import { GeneralSkills, TechnicalSkills } from '../Documents/skillsInfo';

const Dots = ({ number }) => {

  const words = ['Novice', 'Advanced Beginner', 'Knowledgable', 'Proficient', 'Expert']
  const glowColor = useColorModeValue('#A3A4B3','#6D6E80');
  const solidCirc = <Circle size={'10px'} bg={'currentColor'} /> 
  const emptyCirc = <Circle size={'10px'} border={'1px solid currentColor'}/>
  const Filled = ({children}) => {return <Tooltip label={words[number-1]}><Flex gap={2} _hover={{'box-shadow': '0px 0px 5px 5px ' + glowColor + ';', bg : glowColor, borderRadius: 5 }} >{children}</Flex></Tooltip> }
  
  switch (number) {
    case 3:
      return(<><Filled>{solidCirc}{solidCirc}{solidCirc}</Filled>{emptyCirc}{emptyCirc}</>)
    case 4:
      return(<><Filled>{solidCirc}{solidCirc}{solidCirc}{solidCirc}</Filled>{emptyCirc}</>)
    case 5:
      return(<><Filled>{solidCirc}{solidCirc}{solidCirc}{solidCirc}{solidCirc}</Filled></>)
    default:
      break;
  }
}

const SkillItem = ({ icon, skill, bgColor = 'blackAlpha.100', proficiency = 0, explanation = []}) => {

  const textColor = useColorModeValue('black', 'white')
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Flex height='80px' w={'340px'} align={'center'} outline={'1px solid gray'} padding={8} borderRadius={10} onClick={onOpen}>
        <Circle size='60px' bg={bgColor} marginRight={5}>
          {icon}
        </Circle>
        <Flex direction={'column'} align={'flex-start'} gap={3}>
          <Text fontSize={'lg'} color={textColor}>
            {skill}
          </Text>
          <HStack>
            <Dots number={proficiency} />
          </HStack>
        </Flex>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader><Flex align={'center'} gap={2}>{icon}{skill}</Flex></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {explanation.map(expString => (
              <Text>{expString}</Text>
            ))}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}


const Skills = () => {

  return (
    <Flex  flexDirection={'column'} justify={'center'} align={'flex-start'} h={'105%'} w={'95%'} marginLeft={10} id='skills'>
        <Heading as='h1' size='3xl'>
          Skills
        </Heading>
        <Heading as='h1' size='xl' marginTop={10} marginBottom={5}>
          General Skills
        </Heading>
        <SimpleGrid columns={[2, null, 4]} spacing='40px'>
          {GeneralSkills.map( props => (<SkillItem {...props} />))}
        </SimpleGrid>
        <Heading as='h1' size='xl' marginTop={10} marginBottom={5}>
          Technical Skills
        </Heading>
        <SimpleGrid columns={[2, null, 4]} spacing='40px' >
          {TechnicalSkills().map( props => (<SkillItem {...props} />))}         
        </SimpleGrid>
    </Flex>
  )
}

export default Skills