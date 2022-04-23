import { Flex, Heading, Text, SimpleGrid, Circle, useColorModeValue, useColorMode} from '@chakra-ui/react';
import { FiMail, FiCoffee, FiPaperclip, FiBluetooth, FiEye, FiCopy, FiBatteryCharging, FiGrid, FiGift, FiZap} from 'react-icons/fi'
import { FaReact, FaJava, FaPython } from 'react-icons/fa'
import { DiJavascript1 } from 'react-icons/di'
import { GiSpiderWeb, GiBigGear } from 'react-icons/gi'

const SkillItem = ({ icon, skill, bgColor = 'blackAlpha.100'}) => {

  const textColor = useColorModeValue('black', 'white')

  return (
    <Flex height='80px' w={'340px'} align={'center'} outline={'1px solid gray'} padding={8} borderRadius={10}>
      <Circle size='60px' bg={bgColor} marginRight={5}>
        {icon}
      </Circle>
      <Text fontSize={'lg'} color={textColor}>
        {skill}
      </Text>
    </Flex>
  )
}


const Skills = () => {

  const { colorMode } = useColorMode()

  const colorSwitch = (light, dark) => {
    return colorMode === 'light' ? light : dark
  }

  return (
    <Flex  flexDirection={'column'} justify={'center'} align={'flex-start'} h={'100%'} marginLeft={10} id='skills'>
        <Heading as='h1' size='3xl'>
          Skills
        </Heading>
        <Heading as='h1' size='xl' marginTop={10} marginBottom={5}>
          General Skills
        </Heading>
        <SimpleGrid columns={[2, null, 4]} spacing='40px'>
          <SkillItem skill={'Drinking coffee'} icon={<FiCoffee size={30}/>}/>
          <SkillItem skill={'Responding to emails'} icon={<FiMail size={30}/>}/>
          <SkillItem skill={'Paper-clipping'} icon={<FiPaperclip size={30}/>}/>
          <SkillItem skill={'Connecting to Bluetooth'} icon={<FiBluetooth size={30}/>}/>
          <SkillItem skill={'Looking'} icon={< FiEye size={30}/>}/>
          <SkillItem skill={'Ctrl+c'} icon={<FiCopy size={30} />}/>
          <SkillItem skill={'Battery charging'} icon={<FiBatteryCharging size={30}/>}/>
          <SkillItem skill={'Gift giving'} icon={< FiGift size={30}/>}/>
        </SimpleGrid>
        <Heading as='h1' size='xl' marginTop={10} marginBottom={5}>
          Technical Skills
        </Heading>
        <SimpleGrid columns={[2, null, 4]} spacing='40px' >
          <SkillItem skill={'React.js'} icon={<FaReact size={40} color={colorSwitch('#3182ce','#bee3f8')}/>} bgColor={colorSwitch('blue.100','blue.500')}/>
          <SkillItem skill={'Javascript'} icon={<DiJavascript1 size={40} color={colorSwitch("#D69E2E",'#FEFCBF')}/>} bgColor={colorSwitch('yellow.100','yellow.500')}/>
          <SkillItem skill={'Java'} icon={<FaJava size={40} color={colorSwitch('#DD6B20','#FEEBC8')}/>} bgColor={colorSwitch('orange.100', 'orange.500')}/>
          <SkillItem skill={'Python'} icon={<FaPython size={40} color={colorSwitch('#38A169','#C6F6D5')} />} bgColor={colorSwitch('green.100','green.500')}/>
          <SkillItem skill={'Web Development'} icon={<GiSpiderWeb size={40} color={colorSwitch('#718096','#EDF2F7')} />} bgColor={colorSwitch('gray.100','gray.500')}/>
          <SkillItem skill={'Software Engineering'} icon={<GiBigGear size={40} color={colorSwitch('#718096','#EDF2F7')} />} bgColor={colorSwitch('gray.100','gray.500')}/>
          <SkillItem skill={'Project Management'}  icon={<FiGrid size={40} color={colorSwitch('#718096','#EDF2F7')} />} bgColor={colorSwitch('gray.100','gray.500')}/>
          <SkillItem skill={'Agile Methodologies'} icon={<FiZap size={40} color={colorSwitch('#718096','#EDF2F7')} />} bgColor={colorSwitch('gray.100','gray.500')}/>
        </SimpleGrid>
    </Flex>
  )
}

export default Skills