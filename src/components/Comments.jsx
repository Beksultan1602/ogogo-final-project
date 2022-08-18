import { useState } from "react"
import { useGetCommentsQuery, useAddCommentsMutation, useDeleteCommentMutation } from "../redux/api/commentsApi"
import { MdOutlineCancel } from 'react-icons/md'
import { useSelector } from "react-redux"
import { useAuth } from "../hooks/use-auth"
import Modal from "../components/ui/Modal"
import Form from "./Form"
import Login from "./Login"
import { Link } from "react-router-dom"
const Comments = () => {
	const [modalActive, setModalActive] = useState(false)
	const { isAuth, email } = useAuth()
	const userName = useSelector(state => state.user.email)
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
			{ isAuth ? (
			<>
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
				<ul className="flex flex-col">
					{data.map(item => (
							<div className="mb-4">
								<h1 className="text-bold text-xl">{userName}</h1>
								<div className="flex justify-between items-center">
									<li className="text-gray-500">{item.name}</li>
									<MdOutlineCancel className="cursor-pointer" onClick={() => handleDeleteComment(item.id)} />
								</div>
							</div>
					))}
				</ul>
			</>
			) : <div className="h-56 flex justify-center items-center">
						<button onClick={() => setModalActive(true)} className="pink py-2 w-1/2 rounded-full">Оставить комментарий</button>
						<Modal 
						active={modalActive}
						setActive={setModalActive}
					>
						<Login />
					</Modal>
					</div>
				} 
		</div>
	)
}

export default Comments