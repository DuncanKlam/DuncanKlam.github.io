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
    Tooltip,
    Circle,
    useColorModeValue
  } from '@chakra-ui/react';
import { AiOutlineMail, AiOutlineSmile } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram, FaLocationArrow, FaStore} from 'react-icons/fa'

const SocialIcon = ({link, label, ariaLabel, icon}) => {
    return (
        <Link href={link} isExternal>
            <Tooltip label={label}>
                <IconButton 
                    aria-label={ariaLabel}
                    icon={icon}
                    isRound
                    size='lg'
                />
            </Tooltip>
        </Link>
    )
}

const SocialPopover = ({ label, icon, header, body, link, linkLabel}) => {

    const background = useColorModeValue('blackAlpha.100', "whiteAlpha.200")
    const hover = useColorModeValue('blackAlpha.200', 'whiteAlpha.300')
    const linkColor = useColorModeValue('blue.600', 'blue.400')

    return (
        <Popover>
            <PopoverTrigger>
                <Circle>
                    <Tooltip label={label}>
                        <Circle size='50px' bg={background} _hover={{ bgColor : hover, cursor: 'pointer'}}>
                            {icon}
                        </Circle>
                    </Tooltip>
                </Circle>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverHeader>{header}</PopoverHeader>
                <PopoverBody>
                    {body}
                    <Link href={link} color={linkColor} isExternal>
                        {linkLabel}
                    </Link>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}

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
            <SocialIcon link={'https://www.linkedin.com/in/duncan-klemm-506320190/'} label={"LinkedIn"} ariaLabel={'LinkedIn link'} icon={<FaLinkedinIn />}/>
            <SocialIcon link={'https://github.com/DuncanKlam'} label={'Github'} ariaLabel={'Github link'} icon={<FaGithub />}/>
            <SocialIcon link={'https://twitter.com/KlemmChowdah_II'} label={'Twitter'} ariaLabel={'Twitter link'} icon={<FaTwitter />} />
            <SocialIcon link={'https://www.instagram.com/klemmchowdah/'} label={'Instagram'} ariaLabel={'Instagram link'} icon={<FaInstagram />}/>
            <SocialIcon link={'mailto:duncan.klemm141@gmail.com'} label={'Email'} ariaLabel={'Email link'} icon={<AiOutlineMail fill='currentColor'/>}/>
            <SocialIcon link={'https://duncanklam.itch.io/'} label={'Itch.io'} ariaLabel={'itch dot i o link'} icon={<FaStore />}/>
            <SocialPopover label={'Location'} icon={<FaLocationArrow size={17}/>} header={'Current Location:'} body={'Muncie, Indiana (Go Cardinals!)'}/>
            <SocialPopover label={'Smiley Face'} icon={<AiOutlineSmile size={25}/>} header={'Smiley Face:'} body={'You clicked on the smiley face! Have some '} link={'https://www.piday.org/million/#million_pi'} linkLabel={'pie.'}/>
        </HStack>
    </Flex>
  )
}

export default About