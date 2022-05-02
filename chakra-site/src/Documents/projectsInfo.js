import { Badge } from '@chakra-ui/react';

const shell = <Badge colorScheme='black' key='shl'>Shell</Badge>
const markdown = <Badge colorScheme={'gray'} key='md' >Markdown</Badge>
//red theme available before nedding to create custom themes
const java = <Badge colorScheme='orange' key='jav'>Java</Badge>
const ongoing = <Badge colorScheme={'yellow'} key='ong'>Ongoing</Badge>
const chakra = <Badge colorScheme='green' key='cha'>Chakra</Badge>
const group = <Badge colorScheme={"teal"} key='gcb'>Group Collaboration</Badge>
const javascript = <Badge colorScheme='blue' key='jsc'>Javascript</Badge>
const react = <Badge colorScheme='cyan' key='rct'>React</Badge>
const sideProject = <Badge colorScheme='purple' key='sdp'>Side Project</Badge>
const python = <Badge colorScheme={'pink'} key='pyt'>Python</Badge>

export const projectsInfo = [
    {
        "title": "This Website",
        "badgeArray": [ sideProject, ongoing, react, chakra, javascript ],
        "date": 'September 2021 - present',
        "desc": "The website you're currently visiting. How do you like it? Please leave feedback.",
        "repoLink": 'https://github.com/DuncanKlam/DuncanKlam.github.io',
        "hasRepo": true,
        "hasDescLink": false,
    },
    {
        "title": "Apex Legends Stats Dashboard",
        "badgeArray": [ sideProject, ongoing, react, chakra, javascript],
        "date": 'April 2022',
        "desc": "A dashboard that displays data based on the trackers that are equipped to your current legend.",
        "repoLink": 'https://github.com/DuncanKlam/Apex-Legends-Stats-Dashboard',
        "hasDescLink": false,
        "hasRepo": true,
        'hasInteractive' : true,
        'interactiveLink' : 'https://koif2f.csb.app/'
    },
    {
        "title": "Covid Data Scraper",
        "badgeArray": [ sideProject, ongoing, shell, python ],
        "date": 'April 2022 - present',
        "desc": "A lightweight python script that displays basic covid data for any given state or county.",
        "repoLink": 'https://github.com/DuncanKlam/CovidDataScraper',
        "hasDescLink": false,
        "hasRepo": true,
    },
    {
        "title": "Full Court Analytics - Player Site",
        "badgeArray": [ group, react, javascript] ,
        "date": 'September 2021 - April 2022',
        "desc": "The individual player version of ",
        "hasRepo": false,
        "hasDescLink": true,
        "descLink": {
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
        "hasDescLink": false,
        "hasRepo": true,
    },
    {
        "title": "Quaternary Calculator",
        "badgeArray": [ group, java ],
        "date": 'September 2021',
        "desc": "A basic calculator that operates in base 4 with the ability to switch to base 10.",
        "repoLink": 'https://github.com/DuncanKlam/QuaternaryCalculator',
        "hasDescLink": false,
        "hasRepo": true,
    },
    {
        "title": "Workout Generator",
        "badgeArray": [ sideProject, java ],
        "date": 'April 2020',
        "desc": "Generate a random workout according to user specifications with this small application.",
        "repoLink": 'https://github.com/DuncanKlam/Workout-Generator',
        "hasDescLink": false,
        "hasRepo": true,
    },
    {
        "title": "To-Do List Application",
        "badgeArray": [ group, java ],
        "date": 'April 2020',
        "desc": "A lightweight application that allows you to connect to a remote server to push and pull basic to-do items.",
        "repoLink": 'https://github.com/DuncanKlam/ToDoListApplication',
        "hasDescLink": false,
        "hasRepo": true,
    },
]

export const badgeOptions = [
    {
        label : 'Frameworks/Tools',
        options : [
            {
                value: 'chakra', label: 'Chakra', badge: chakra, colorMain: '#276749',  colorAlt: '#68D391' //green.700 && green.300
            },
            {
                value: 'react', label: 'React', badge: react, colorMain: '#0987A0', colorAlt: '#76E4F7' //cyan.700 && cyan.300
            },
        ]
    },
    {
        label: 'Languages',
        options : [
            {
                value: 'java', label: 'Java', badge: java, colorMain: '#9C4221', colorAlt: '#F6AD55' //orange.700 && orange.300
            },
            {
                value: 'javascript', label: 'Javascript', badge: javascript, colorMain: '#2c5282', colorAlt: '#63b3ed' //blue.700 && blue.300
            },
            {
                value: 'markdown', label: 'Markdown', badge: markdown, colorMain: '#4A5568', colorAlt: '#EDF2F7' //gray.700 && gray.300
            },
            {
                value: 'python', label: 'Python', badge: python, colorMain: '#97266D', colorAlt: '#FBB6CE' //pink.700 && pink.300
            },
            {
                value: 'shell', label: 'Shell', badge: shell, colorMain: 'rgba(51, 51, 51, 0.8)', colorAlt: 'rgba(255, 255, 255, 0.8)' //black.700 && black.300
            },
        ] 
    },
    {
        label: 'Misc Status',
        options : [
            {
                value: 'group', label: 'Group Collaboration', badge: group, colorMain: '#285E61', colorAlt: '#4FD1C5' //teal.700 && teal.300
            },   
            {
                value: 'ongoing', label: 'Ongoing', badge: ongoing, colorMain: '#975A16', colorAlt: '#F6E05E' //yellow.700 && yellow.300
            },
            {
                value: 'side-project', label: 'Side Project', badge: sideProject, colorMain: '#322659', colorAlt: '#E9D8FD' //purple.700 && purple.300
            },
        ]
    },
]
   