import { useState } from "react"
import { useGetCommentsQuery, useAddCommentsMutation, useDeleteCommentMutation } from "../redux/api/commentsApi"
import { MdOutlineCancel } from 'react-icons/md'
const Comments = () => {
	const [count, setCount] = useState('')
	const [newComment, setNewComment] = useState('')
	const {data = []} = useGetCommentsQuery(count)
	const [addComment, {isError}] = useAddCommentsMutation()
	const [deleteComment] = useDeleteCommentMutation()
	const handleAddComment = async () => {
		if(newComment) {
			await addComment({name: newComment}).unwrap()
			setNewComment('')
		}
	}
	const handleDeleteComment = async (id) => {
		await deleteComment(id).unwrap()
	}
	return (
		<div className="mt-8">
			<h1 className="text-2xl font-bold mb-2">Комментарии:</h1>
			<div className="relative">
				<input value={newComment} onChange={(e) => setNewComment(e.target.value)} className='border w-full px-2 py-4 rounded-lg mb-2' type="text" placeholder='Добавить комментарий...'/>
				<button onClick={() => handleAddComment()} className="absolute right-2 px-4 py-2 pink rounded-lg top-2">Добавить комментарий</button>
			</div>
			<select className="border rounded-lg px-4 py-2 mb-8" value={count} onChange={(e) => setCount(e.target.value)}>
				<option value="">Все комменатрии</option>
				<option value="10">10</option>
				<option value="20">20</option>
				<option value="30">30</option>
			</select>
			<ul className="flex flex-col gap-8">
				{data.map(item => (
						<div className="flex justify-between items-center">
							<li>{item.name}</li>
							<MdOutlineCancel className="cursor-pointer" onClick={() => handleDeleteComment(item.id)} />
						</div>
				))}
			</ul>
		</div>
	)
}

export default Comments