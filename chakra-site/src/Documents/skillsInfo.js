import { FiMail, FiCoffee, FiPaperclip, FiBluetooth, FiEye, FiCopy, FiBatteryCharging, FiGrid, FiGift, FiZap} from 'react-icons/fi'
import { FaReact, FaJava, FaPython } from 'react-icons/fa'
import { DiJavascript1 } from 'react-icons/di'
import { GiSpiderWeb, GiBigGear } from 'react-icons/gi'
import { useColorMode } from '@chakra-ui/react'

const size = 30
const technicalSize = 40


export const GeneralSkills = [
    {
        skill: 'Drinking coffee',
        icon: <FiCoffee size={size}/>,
        proficiency: 5,
        explanation: ["I love to drink coffee.", "Biiiiig coffee guy.", "I constantly have a Yeti full of java by my side, it's my emotional support animal."]
    },
    {
        skill: 'Responding to emails',
        icon: <FiMail size={size}/>,
        proficiency: 4,
        explanation: ["Emails are a good portion of business.", "Good business is a good portion of making money.", "Send me an email, see what kind of response you get!"]
    },
    {
        skill: 'Paper-clipping',
        icon: <FiPaperclip size={size}/>,
        proficiency: 3,
        explanation: ["Paper-clipping is important for digital and non-digital communications.", "I will always make sure you have the attachments you need. (See email section)"]
    },
    {
        skill: 'Connecting to bluetooth',
        icon: <FiBluetooth size={size}/>,
        proficiency: 4,
        explanation: ['Bluetooth is one of the greatest technologies of this generation', 'Though I am an unlicensed Bluetooth Bender, your devices will always end up connected.']
    },
    {
        skill: 'Looking/Seeing',
        icon: <FiEye size={size}/>,
        proficiency: 5,
        explanation: ["I have 20/20 vision.", "That's about it.", "Oh, also 20/20 hindsight."]
    },
    {
        skill: 'Ctrl+C',
        icon: <FiCopy size={size}/>,
        proficiency: 4,
        explanation: ['Possibly the most helpful for any programmer to master.','I promise all code I produce is *partially* mine.']
    },
    {
        skill: 'Battery Charging',
        icon: <FiBatteryCharging size={size}/>,
        proficiency: 4,
        explanation: ['Batteries are useful.', "To have charged ones is even more useful.","Hire me and your batteries will never go uncharged!"]
    },
    {
        skill: 'Gift Giving',
        icon: <FiGift size={size}/>,
        proficiency: 3,
        explanation: ["I am not that great at gift giving.","Unless you like fun socks, or dorky things."]
    }
]

export const TechnicalSkills = () => { 
    

    const { colorMode } = useColorMode()

    const colorSwitch = (light, dark) => {
        return colorMode === 'light' ? light : dark
    }

    return [
        {
            skill: 'React.js',
            icon: <FaReact size={technicalSize} color={colorSwitch('#3182ce','#bee3f8')}/>,
            proficiency: 5,
            bgColor: colorSwitch('blue.100','blue.500'),
            explanation: ['React is an up-and-coming library for web development.', 'I used it to develop this sie!', "Super cool stuff."]
        },
        {
            skill: 'Javascript',
            icon: <DiJavascript1 size={technicalSize} color={colorSwitch("#D69E2E",'#FEFCBF')}/>,
            proficiency: 4,
            bgColor: colorSwitch('yellow.100','yellow.500'),
            explanation: ['Javascript is what makes webpages run!', 'It is what powers this website!', "Javascripts closures? Unmatched."]
        },
        {
            skill: 'Java',
            icon: <FaJava size={technicalSize} color={colorSwitch('#DD6B20','#FEEBC8')}/>,
            proficiency: 4,
            bgColor: colorSwitch('orange.100', 'orange.500'),
            explanation: ['Java is an excellent application programming language.', "OOP for the win.","Fight me, tech bros."]
        },
        {
            skill: 'Python',
            icon: <FaPython size={technicalSize} color={colorSwitch('#38A169','#C6F6D5')} />,
            proficiency: 4,
            bgColor: colorSwitch('green.100','green.500'),
            explanation: ['Python is the ultimate scripting language.', "It is so nice.","Check out my Python projects below!"]
        },
        {
            skill: 'Web Development',
            icon: <GiSpiderWeb size={technicalSize} color={colorSwitch('#718096','#EDF2F7')} />,
            proficiency: 4,
            bgColor: colorSwitch('gray.100','gray.500'),
            explanation: ["Web development is my passion.","Can you tell?","If you tell me my website looks nice I'll build you one for free."]
        },
        {
            skill: 'Software Engineering',
            icon: <GiBigGear size={technicalSize} color={colorSwitch('#718096','#EDF2F7')} />,
            proficiency: 4,
            bgColor: colorSwitch('gray.100','gray.500'),
            explanation: ['Software engineering is what I hope to make my career out of.',"It is a very fun time, reminds me of robotics."]
        },
        {
            skill: 'Project Managment',
            icon: <FiGrid size={technicalSize} color={colorSwitch('#718096','#EDF2F7')} />,
            proficiency: 3,
            bgColor: colorSwitch('gray.100','gray.500'),
            explanation: ['I can manage projects.', "I have *managed* to create all the ones below."]   
        },
        {
            skill: 'Agile Methodologies',
            icon: <FiZap size={technicalSize} color={colorSwitch('#718096','#EDF2F7')} />,
            proficiency: 4,
            bgColor: colorSwitch('gray.100','gray.500'),
            explanation: ['I try to practice the idea of Agile Sprints when I work on any project.',"Don't check my commit history though."]
        }
    ]  
}