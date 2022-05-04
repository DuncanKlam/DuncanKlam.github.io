import { Flex, HStack, Text, useColorModeValue} from '@chakra-ui/react';
import { AiOutlineCopyrightCircle } from 'react-icons/ai'

const Footer = () => {

    const textColor = useColorModeValue('gray.400','gray.600')

  return (
    <Flex justify={'center'} color={textColor}>
        <HStack>
            <Text>
                Copyright
            </Text>
            <AiOutlineCopyrightCircle />
            <Text>
                Duncan Klemm 2022
            </Text>
        </HStack>
    </Flex>
  )
}

export default Footer