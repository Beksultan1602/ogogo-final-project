import React from 'react'
import ReactPaginate from "react-paginate"
import styles from './Pagination.module.css'
const Pagination = ({onChangePage}) => {
	return (
		<div className={styles.paginationWrapper}>
			 <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={event => onChangePage(event.selected + 1)}
        pageRangeDisplayed={1}
        pageCount={100}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
		</div>
	)
}

export default Pagination