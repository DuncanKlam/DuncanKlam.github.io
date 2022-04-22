import '../Styles/projects.css'
import { Flex, Heading, HStack, Text, Link, useColorMode} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import { projectsInfo, badgeOptions } from '../Documents/projectsInfo';
import Select from 'react-select';

const ProjectItem = ({ title, badgeArray, date, desc, hasRepo = true, repoLink, color, hasOtherLink, otherLink}) => {

  return (
    <Flex flexDirection={'column'} marginBottom='30px' align={'flex-start'} >
      <HStack>
        <Heading as='h3' size='xl'>
          {title}
        </Heading>
        {badgeArray}
      </HStack>
      <Text fontStyle={'italic'} fontSize='sm'>
        {date}
      </Text>
      <Flex gap={5}>
        <Text fontSize={'xl'}>
          {desc}{hasOtherLink ? <Link href={otherLink.link} isExternal fontSize={'lg'} color={color === 'light' ? 'blue.600' : 'blue.400'}>{otherLink.name}</Link> : ''}
        </Text>
       {hasRepo && <Link href={repoLink} isExternal display={'flex'} gap={2} justify='center' fontSize={'sm'} color={color === 'light' ? 'blue.600' : 'blue.400'}>
          Github Repo <FaGithub mx='2px' />
        </Link>}
      </Flex>
    </Flex>
  )
}

const Projects = () => {
  const { colorMode } = useColorMode()

  const [filteredProjects, setFilteredProjects] = useState(projectsInfo)
  const [projectsFilter, setProjectsFilter] = useState([])

  useEffect(() => {
    if(projectsFilter.length === 0){
      setFilteredProjects(projectsInfo)
    } else {
      setFilteredProjects(projectsInfo.filter((project) => 
        projectsFilter.some(({ badge }) => project.badgeArray.includes(badge))
      ))
    }
  }, [projectsFilter])

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
    <Flex  flexDirection={'column'} justify={'center'} align={'flex-start'} h={'130%'} marginLeft={10} id='projects'>
        <Flex marginBottom={10} w={'60%'} justify='space-between' align='flex-end' gap={10}>
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
            },
          })}
          />
        </Flex>
        {filteredProjects.map( (props, index) => {
          return (
            <ProjectItem {...props} key={index} color={colorMode}/>
          )
        })}
    </Flex>
  )
}

export default Projects