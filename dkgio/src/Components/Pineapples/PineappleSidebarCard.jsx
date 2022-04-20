import { useState, useEffect} from 'react'
import './PineappleSidebar.css'

const PineappleSidebarCard = ({ index, item}) => {

    const [cssClass, setCssClass] = useState('scs-')

    useEffect(() => {
        const arr = ['one','two','three','four','five','six'];
        setCssClass("pineapple-sidebar-card scs-" + arr[index % 6])
    }, [index])
    
  return (
    <div className={cssClass}>
        <div className='sidebar-card-text-container'>
            <p id={index}>{item.title}</p>
        </div>
    </div>
  )
}

export default PineappleSidebarCard