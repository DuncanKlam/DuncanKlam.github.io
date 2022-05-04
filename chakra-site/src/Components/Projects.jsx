import '../Styles/projects.css'
import { Flex, Heading, HStack, Text, Link, useColorMode, useColorModeValue, Circle, AlertDialog, Button, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, useDisclosure, Switch} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi'
import { projectsInfo, badgeOptions } from '../Documents/projectsInfo';
import Select from 'react-select';
import Pagination from '../HOC/Pagination';

const ProjectItem = ({ title, badgeArray, date, desc, hasRepo = true, repoLink, hasDescLink, descLink, hasInteractive, interactiveLink}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const linkColor = useColorModeValue('blue.600', 'blue.400');
  return (
    <Flex flexDirection={'column'} marginBottom='30px' align={'flex-start'} >
      <HStack>
        <Heading as='h3' size='xl'>
          {title}
        </Heading>
        {badgeArray.slice(0,4)}
      </HStack>
      <Text fontStyle={'italic'} fontSize='sm'>
        {date}
      </Text>
      <Flex gap={5}>
        <Text fontSize={'xl'}>
          {desc}{hasDescLink ? <Link href={descLink.link} isExternal fontSize={'lg'} color={linkColor}>{descLink.name}</Link> : ''}
        </Text>
        {hasRepo && <Link href={repoLink} isExternal display={'flex'} gap={2} fontSize={'sm'} color={linkColor}>
          Github Repo <FaGithub mx='2px' />
        </Link>}
        {hasInteractive && <>
          <Link onClick={onOpen} isExternal display={'flex'} gap={2} justify='flex-end' fontSize={'sm'} color={linkColor}>
            Try it out
            <Circle size='20px' outline={'1px solid currentColor'}>
              <FiChevronRight mx='2px' />
            </Circle>
          </Link>
          <AlertDialog
            isOpen={isOpen}
            onClose={onClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                  External Link
                </AlertDialogHeader>
    
                <AlertDialogBody>
                  You may be faced with a blank screen for a minute, allow for extended loading time.
                </AlertDialogBody>
    
                <AlertDialogFooter>
                  <Button onClick={onClose}>
                    Cancel
                  </Button>
                  <Link href={interactiveLink} isExternal>
                    <Button href={interactiveLink} colorScheme='blue' ml={3} onClick={onClose}>
                      External Page <ExternalLinkIcon mx='2px' />
                    </Button>
                  </Link>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog> 
        </> }
      </Flex>
    </Flex>
  )
}

const Projects = () => {
  const { colorMode } = useColorMode()

  const [filteredProjects, setFilteredProjects] = useState(projectsInfo)
  const [projectsFilter, setProjectsFilter] = useState([])
  const [intersectionSearch, setIntersectionSearch] = useState(false)

  useEffect(() => {
    if(projectsFilter.length === 0){
      setFilteredProjects(projectsInfo)
    } else {
      if(intersectionSearch){
        setFilteredProjects(projectsInfo.filter((project) => 
        projectsFilter.every(({ badge }) => project.badgeArray.includes(badge))
      ))
      } else {
        setFilteredProjects(projectsInfo.filter((project) => 
          projectsFilter.some(({ badge }) => project.badgeArray.includes(badge))
        ))
      }
    }
  }, [projectsFilter, intersectionSearch])

  const formatOptionLabel = ({ label, colorMain, colorAlt }) => {

    const color = colorMode === 'light' ? colorMain : colorAlt
    const background = colorMode === 'light' ? colorAlt : colorMain

    return (
      <div style={{ display: "flex" }}>
        <div style={{ marginLeft: "10px", color: color, backgroundColor : background, padding: '2px 5px', borderRadius: '5px', fontWeight: 'bold'}}>
          {label}
        </div>
      </div>
    )
  };


  return (
    <Flex id='projects' flexDirection={'column'} justify={'flex-start'} align={'flex-start'} h={'100%'} marginLeft={10} marginBottom={0} paddingTop={10}>
        <Flex marginBottom={10} w={'60%'} justify='space-between' align='flex-end' gap={5}>
          <Heading as='h1' size='3xl'>
              Projects
          </Heading>
          <Select options={badgeOptions} isMulti formatOptionLabel={formatOptionLabel} 
          className='projects-filter' onChange={( value ) => {setProjectsFilter(value)}}
          placeholder="Filter projects by tag..." 
          theme={theme => ({
              ...theme,
              borderRadius: 20,
              colors: {
                ...theme.colors,
                neutral0: `${ colorMode === 'light' ? 'white' : '#0b0d22'}`,
                neutral10: `${ colorMode === 'light' ? 'fillColor' : 'fillColor'}`,
                primary25: `${ colorMode === 'light' ? '#dfdfdf' : '#757575'}`,
                danger: `${ colorMode === 'light' ? '#ff0000' : '#ff6666'}`,
                dangerLight:  `${ colorMode === 'light' ? 'white' : '#0b0d22'}`
              },
            })}
          />
          <Switch size='lg' colorScheme='purple' onChange={(e) => setIntersectionSearch(e.target.checked)}/>
          <Text fontSize={'sm'}>
            Intersection Search
          </Text>
        </Flex>
        {/* {filteredProjects.map( (props, index) => {
          return (
            <ProjectItem {...props} key={index}/>
          )
        })} */}
        <Pagination data={filteredProjects} RenderComponent={ProjectItem} pageLimit={Math.ceil(filteredProjects.length/6)} dataLimit={6}/>
    </Flex>
  )
}

export default Projects