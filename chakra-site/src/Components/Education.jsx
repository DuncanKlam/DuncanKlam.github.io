import { Text, Flex, Heading, HStack} from '@chakra-ui/react';

const SchoolMarker = ({ school, dateRange, location, degree, degree1Area, degree1Conc, degree2, degree2Area, degree2Conc}) => {
    return (      
    <Flex direction={'column'} align={'flex-start'} justify={'flex-start'} >
        <Flex align={'center'} width='850px' justify={'space-between'}>
            <HStack>
                <Heading as='h4' size='lg' >{ school }</Heading>
                <Text fontSize='md' fontStyle={'italic'}>{ location }</Text>
            </HStack>
            <Text fontSize='xl'>{ dateRange }</Text>
        </Flex>
        {degree && <Heading as='h6' size='md' marginTop={4}>{ degree }</Heading>}
        {degree && <Text fontSize='lg'>{ degree1Area }</Text>}
        {degree1Conc && <Text fontSize='md' fontStyle={'italic'}>{ degree1Conc }</Text>}
        {degree2 && <Heading as='h6' size='md' marginTop={4}>{ degree2 }</Heading>}
        {degree2 &&  <Text fontSize='lg'>{ degree2Area }</Text>}
        {degree2Conc && <Text fontSize='sm' fontStyle={'italic'}>Focus: { degree2Conc }</Text>}
    </Flex>
    )
}


const Education = () => {

  return (
    <Flex flexDirection={'column'} justify={'center'} align={'flex-start'} h={'100%'} marginLeft={10} id='education' gap={10}>
        <Heading as='h1' size='3xl'>
            Education
        </Heading>
        <SchoolMarker school={'Ball State University (BSU)'} dateRange={'AUG 2018 - MAY 2022'} location={'Muncie, IN'} 
                      degree={'Bachelor of the Arts'} degree1Area={'Computer Science'} degree2={'Bachelor of the Arts'} 
                      degree2Area={'Telecommunications'} degree2Conc={'Digital Production/Digital Video'}/>
    </Flex>
  )
}

export default Education 