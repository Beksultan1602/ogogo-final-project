import React from 'react'
import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.scss'
const Pagination = ({ onChangePage }) => {
	return (
		<div className={styles.paginationWrapper}>
			<ReactPaginate
				breakLabel='...'
				nextLabel='>'
				onPageChange={event => onChangePage(event.selected + 1)}
				pageRangeDisplayed={10}
				pageCount={100}
				previousLabel='<'
				renderOnZeroPageCount={null}
			/>
		</div>
	)
}

export default Pagination
