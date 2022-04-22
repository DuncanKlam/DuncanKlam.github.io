import {
  ChakraProvider,
  Box,
  Link,
  VStack,
  Circle,
  theme,
  Flex,
  Divider} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../HOC/ColorModeSwitcher';
import { AiOutlineFilePdf } from 'react-icons/ai'
import About from '../Components/About';
import Education from '../Components/Education';
import Resume from '../Documents/resume.pdf'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects';
import Learning from '../Components/Learning';
import Contact from '../Components/Contact';
import { ColorModeProfile } from '../HOC/ColorModeProfile';

function App() {

  return (
    <ChakraProvider theme={theme}>
      <Flex textAlign="center" overflow={'hidden'}>
        <Flex w={300} h={'100vh'} bgColor={'blackAlpha.500'} flexDirection={'column'} justify={'center'} align={'center'} gap={10}>
          <Circle size='160px' bg={'blackAlpha.100'} color='white'>
            <ColorModeProfile />
          </Circle>
          <VStack>
            <Link href='#about'>About</Link>
            <Link href='#education'>Education</Link>
            <Link href='#skills'>Skills</Link>
            <Link href='#projects'>Projects</Link>
            <Link href='#learning'>Learning</Link>
            <Link href='#contact'>Contact</Link>
          </VStack>
          <Divider w={150}/>
          <Link href={Resume} isExternal display={'flex'} gap={2} target='_blank'>
            <AiOutlineFilePdf size={28}/> Resume 
          </Link>
          <ColorModeSwitcher />
        </Flex>
        <Box w='100%' p={4} overflow={'auto'} h='100vh'>
          <About />
          <Education />
          <Skills />
          <Projects />
          <Learning />
          <Contact />
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
