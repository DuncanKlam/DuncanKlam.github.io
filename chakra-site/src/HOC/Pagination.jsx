import '../Styles/pagination.css'
import { useState, useEffect } from 'react'
import { Button, useColorModeValue} from '@chakra-ui/react';


const Pagination = ({ data, RenderComponent, pageLimit, dataLimit }) => {

    const [pages, setPages] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)
    const textColor = useColorModeValue('blue','blue.200')

    useEffect(() => {
      setPages(Math.ceil(data.length/dataLimit))
    }, [data, dataLimit])
    

    function goToNextPage() {
        setCurrentPage((page) => page + 1);

    }

    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);

    }

    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };


    return (
        <div>
            <div className="dataContainer">
                {getPaginatedData().map((d, idx) => (
                    <RenderComponent key={idx} {...d} />
                ))}
            </div>
            <div className="pagination">
                <Button
                    onClick={goToPreviousPage}
                    className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
                    color={textColor}
                >
                    prev
                </Button>
                {getPaginationGroup().map((item, index) => (
                    <Button
                        key={index}
                        onClick={changePage}
                        className={`paginationItem ${currentPage === item ? 'active' : null}`}
                    >
                        <span>{item}</span>
                    </Button>
                ))}
                <Button
                    onClick={goToNextPage}
                    className={`next ${currentPage === pages ? 'disabled' : ''}`}
                    color={textColor}
                >
                    next
                </Button>
            </div>
        </div>
    )
}

export default Pagination