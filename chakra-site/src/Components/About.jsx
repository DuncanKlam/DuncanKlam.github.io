import {
    Text,
    Link,
    Flex,
    Heading,
    HStack,
    useColorMode,
    IconButton
  } from '@chakra-ui/react';
import { AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram} from 'react-icons/fa'

const About = () => {

    const { colorMode } = useColorMode()

  return (
    <Flex id='about' flexDirection={'column'} justify={'center'} align={'flex-start'} h={'100%'} marginLeft={10}>
        <Heading as='h1' size='4xl'>
            Duncan Klemm
        </Heading>
        <HStack>
            <Text fontSize='lg' marginLeft={1}>
                Indiana, US | 
            </Text>
            <Link href='mailto:duncan.klemm141@gmail.com' isExternal color={colorMode === 'light' ? 'blue.600' : 'blue.400'}>
                duncan.klemm141@gmail.com
            </Link>
        </HStack>
        <Text marginTop={10}>
            Software Engineer | Computer Scientist | Motion Graphics Artist
        </Text>
        <Text marginTop={5} marginBottom={10}>
            Current student at Ball State University in Muncie, Indiana. My goal for life is to use my abilities and collaborate with others to make the world a better place.
        </Text>
        <HStack marginTop={5} gap={2}>
            <Link href='https://www.linkedin.com/in/duncan-klemm-506320190/' isExternal >
                <IconButton
                    aria-label='LinkedIn link'
                    icon={<FaLinkedinIn />}
                    isRound
                    size='lg'
                />
            </Link>
            <Link href='https://github.com/DuncanKlam' isExternal>
                <IconButton
                    aria-label='Github link'
                    icon={<FaGithub />}
                    isRound
                    size='lg'
                />
            </Link>
            <Link href='https://twitter.com/KlemmChowdah_II' isExternal>
                <IconButton
                    aria-label='Twitter link'
                    icon={<FaTwitter />}
                    isRound
                    size='lg'
                />
            </Link>
            <Link href='https://www.instagram.com/klemmchowdah/' isExternal>
                <IconButton
                    aria-label='Instagram link'
                    icon={<FaInstagram />}
                    isRound
                    size='lg'
                />
            </Link>
            <Link  href='mailto:duncan.klemm141@gmail.com' isExternal>
                <IconButton
                    aria-label='Email link'
                    icon={<AiOutlineMail fill='currentColor'/>}
                    isRound
                    size='lg'
                />
            </Link>
        </HStack>
    </Flex>
  )
}

export default About