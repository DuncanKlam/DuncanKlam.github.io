import { Text, Flex, Heading, HStack} from '@chakra-ui/react';

const SchoolMarker = ({ school, dateRange, location, degree, conc1, conc2}) => {
    return (      
    <Flex direction={'column'} align={'flex-start'} justify={'flex-start'} >
        <Flex align={'center'} width='850px' justify={'space-between'}>
            <HStack>
                <Heading as='h4' size='lg' >{ school }</Heading>
                <Text fontSize='md' fontStyle={'italic'}>{ location }</Text>
            </HStack>
            <Text fontSize='xl'>{ dateRange }</Text>
        </Flex>
        <Heading as='h6' size='md' marginTop={4}>{ degree }</Heading>
        <Text fontSize='lg'>{ conc1 }</Text>
        {conc2 && <Heading as='h6' size='md' marginTop={4}>{ degree }</Heading>}
        <Text fontSize='lg'>{ conc2 }</Text>
    </Flex>
    )
}


const Education = () => {

  return (
    <Flex flexDirection={'column'} justify={'center'} align={'flex-start'} h={'100%'} marginLeft={10} id='education' gap={10}>
        <Heading as='h1' size='3xl'>
            Education
        </Heading>
        <SchoolMarker school={'Ball State University (BSU)'} dateRange={'AUG 2018 - MAY 2022'} location={'Muncie, IN'} degree={'Bachelor of the Arts'} conc1={'Computer Science'} conc2={'Video Production'}/>
        <SchoolMarker school={'West Ottawa High School (WOHS)'} dateRange={'AUG 2014 - MAY 2018'} location={'Holland, MI'} degree={'G.E.D.'}/>
    </Flex>
  )
}

export default Education 