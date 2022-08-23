import { useEffect, useState } from 'react'
import { AiOutlineMessage } from 'react-icons/ai'
import { db } from '../firebase'
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
const Chat = () => {
	const username = useSelector(state => state.user.email)
	const uid = useSelector(state => state.user.id)
	const [value, setValue] = useState('')
	const [messages, setMessages] = useState([])
	const [chatVisible, setChatVisible] = useState(false)
	useEffect(() => {
		db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
			setMessages(snapshot.docs.map(doc => doc.data()))
		})
	}, [])
	const sendMessage = async () => {

		await db.collection('messages').add({
			user: username,
			text: value,
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
			uid: uid
		})
		setValue('')
		
	}

	return (
		<div className='fixed bottom-4 right-4 bg-transparent hidden lg:block'>
			<div onClick={() => setChatVisible(!chatVisible)} className='w-12 h-12 bg-purple-700 rounded-full flex justify-center items-center cursor-pointer'>
				<AiOutlineMessage className='bg-transparent w-8 h-8'/>
			</div>
			{chatVisible ? (
				<div className='h-3/4 w-1/4 bg-gray-700 fixed bottom-16 right-16 flex flex-col justify-between '>
				<div className='overflow-scroll overflow-x-hidden'>
					{messages.map((msg, index) => (				
						<div className={uid === msg.uid ? 'bg-gray-900 pl-4 py-2' : 'bg-red-900 pl-4 py-2'} key={index}>
							<h1 className='bg-gray-900 text-lg bg-inherit'>{msg.user}</h1>
							<p className='bg-white rounded-lg text-black w-3/4 py-2 px-2'>{msg.text}</p>		
						</div>		
					))}
				</div>
				<div>
					<input value={value} onChange={e => setValue(e.target.value)} type="text" className='py-4 px-2 w-full' placeholder='Введите сообщение'/>
					<button onClick={sendMessage} className='absolute bg-purple-700 right-0 bottom-0 py-4 px-2'>Отправить</button>
				</div>
			</div>
			) : null}
		</div>
	)
}

export default Chat