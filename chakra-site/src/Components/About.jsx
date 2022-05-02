import {
    Text,
    Link,
    Flex,
    Heading,
    HStack,
    IconButton,
    Popover,
    PopoverContent,
    PopoverTrigger,
    PopoverHeader,
    PopoverBody,
  } from '@chakra-ui/react';
import { AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram, FaLocationArrow} from 'react-icons/fa'

const About = () => {

  return (
    <Flex id='about' flexDirection={'column'} justify={'center'} align={'flex-start'} h={'100%'} marginLeft={10}>
        <Heading as='h1' size='4xl'>
            Duncan Klemm
        </Heading>
        <Text marginTop={'30px'} fontSize='2xl'>
            Software Engineer | Computer Scientist | Motion Graphics Artist
        </Text>
        <Text marginTop={'30px'}>
            Current student at Ball State University in Muncie, Indiana. My goal for life is to use my abilities and collaborate with others to make the world a better place.
        </Text>
        <HStack marginTop={10} gap={2}>
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
            <Popover>
                <PopoverTrigger>
                    <IconButton
                    aria-label='Current location'
                    icon={<FaLocationArrow />}
                    isRound
                    size='lg'
                    />
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverHeader>Current Location:</PopoverHeader>
                    <PopoverBody>Muncie, Indiana (Go Cardinals!)</PopoverBody>
                </PopoverContent>
            </Popover>
        </HStack>
    </Flex>
  )
}

export default About