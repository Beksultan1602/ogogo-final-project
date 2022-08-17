import React from 'react'
import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.scss'
const Pagination = ({ onChangePage }) => {
	return (
		<div className={styles.paginationWrapper}>
			<ReactPaginate
				// breakLabel='...'
				// nextLabel='>'
				// onPageChange={event => onChangePage(event.selected + 1)}
				// pageRangeDisplayed={3}
				// pageCount={50}
				// previousLabel='<'
				// renderOnZeroPageCount={null} 
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={5}
        marginPagesDisplayed={0}
        pageRangeDisplayed={3}
        onPageChange={event => onChangePage(event.selected + 1)}//handle page change event
        
			/>
		</div>
	)
}

export default Pagination
