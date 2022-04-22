import { Badge } from '@chakra-ui/react';
import { React } from 'react';

const markdown = <Badge key='md' >Markdown</Badge>
const sideProject = <Badge colorScheme='purple' key='sdp'>Side Project</Badge>
const java = <Badge colorScheme='orange' key='jav'>Java</Badge>
const ongoing = <Badge colorScheme={'yellow'} key='ong'>Ongoing</Badge>
const group = <Badge colorScheme={"teal"} key='gcb'>Group Collaboration</Badge>
const shell = <Badge colorScheme='red' key='shl'>Shell</Badge>
const react = <Badge colorScheme='blue' key='rct'>React</Badge>
const chakra = <Badge colorScheme='green' key='cha'>Chakra</Badge>

export const projectsInfo = [
    {
        "title": "This Website",
        "badgeArray": [ sideProject, ongoing, react, chakra ],
        "date": 'September 2021 - present',
        "desc": "The website you're currently visiting. How do you like it? Please leave feedback.",
        "repoLink": 'https://github.com/DuncanKlam/DuncanKlam.github.io',
        "hasOtherLink": false,
    },
    {
        "title": "Apex Legends Stats Dashboard",
        "badgeArray": [ sideProject, ongoing, react, chakra ],
        "date": 'April 2022',
        "desc": "A dashboard that displays data based on the trackers that are equipped to your current legend",
        "repoLink": 'https://github.com/DuncanKlam/Apex-Legends-Stats-Dashboard',
        "hasOtherLink": false,
    },
    {
        "title": "Covid Data Scraper",
        "badgeArray": [ sideProject, ongoing, shell ],
        "date": 'April 2022 - present',
        "desc": "A lightweight python script that displays basic covid data for any given state or county.",
        "repoLink": 'https://github.com/DuncanKlam/CovidDataScraper',
        "hasOtherLink": false,
    },
    {
        "title": "Full Court Analytics - Player Site",
        "badgeArray": [ group, react] ,
        "date": 'September 2021 - April 2022',
        "desc": "The individual player version of ",
        "hasRepo": false,
        "hasOtherLink": true,
        "otherLink": {
            link: 'https://fullcourtanalytics.com/',
            name: 'fullcourtanalytics.com'
        }
    },
    {
        "title": "Full Court Analytics",
        "badgeArray": [ group, markdown ],
        "date": 'September 2021 - April 2022',
        "desc": "The side documentation for the Full Court Analytics Player Site.",
        "repoLink": 'https://github.com/DuncanKlam/FullCourtAnalytics',
        "hasOtherLink": false,
    },
    {
        "title": "Quaternary Calculator",
        "badgeArray": [ group, java ],
        "date": 'September 2021',
        "desc": "A basic calculator that operates in base 4 with the ability to switch to base 10.",
        "repoLink": 'https://github.com/DuncanKlam/QuaternaryCalculator',
        "hasOtherLink": false,
    },
    {
        "title": "Workout Generator",
        "badgeArray": [ sideProject, java ],
        "date": 'April 2020',
        "desc": "Generate a random workout according to user specifications with this small application.",
        "repoLink": 'https://github.com/DuncanKlam/Workout-Generator',
        "hasOtherLink": false,
    },
    {
        "title": "To-Do List Application",
        "badgeArray": [ group, java ],
        "date": 'April 2020',
        "desc": "A lightweight application that allows you to connect to a remote server to push and pull basic to-do items.",
        "repoLink": 'https://github.com/DuncanKlam/ToDoListApplication',
        "hasOtherLink": false,
    },
]

export const badgeOptions = [
    {
        label : 'Frameworks/Tools',
        options : [
            {
                value: 'chakra', label: 'Chakra', badge: chakra, colorMain: '#276749', colorAlt: '#68D391'
            },
            {
                value: 'react', label: 'React', badge: react, colorMain: '#2c5282', colorAlt: '#63b3ed'
            },
        ]
    },
    {
        label: 'Languages',
        options : [
            {
                value: 'java', label: 'Java', badge: java, colorMain: '#9C4221', colorAlt: '#F6AD55'
            },
            {
                value: 'markdown', label: 'Markdown', badge: markdown, colorMain: '#4A5568', colorAlt: '#EDF2F7'
            },
            {
                value: 'shell', label: 'Shell', badge: shell, colorMain: '#63171B', colorAlt: '#FED7D7'
            },
        ] 
    },
    {
        label: 'Misc Status',
        options : [
            {
                value: 'group', label: 'Group Collaboration', badge: group, colorMain: '#285E61', colorAlt: '#4FD1C5'
            },   
            {
                value: 'ongoing', label: 'Ongoing', badge: ongoing, colorMain: '#975A16', colorAlt: '#F6E05E'
            },
            {
                value: 'side-project', label: 'Side Project', badge: sideProject, colorMain: '#322659', colorAlt: '#E9D8FD'
            },
        ]
    },
]
   