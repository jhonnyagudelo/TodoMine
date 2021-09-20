import { useState, useEffect } from 'react'
import useLocalStorage from './useLocalStorage'

function useTodos() {
	const [todos, setTodos] = useLocalStorage('TODOS_V1', [])
	const [user, setUser] = useLocalStorage('USER_V1', '')
	const [searchValue, setSearchValue] = useState('')
	const [openModal, setOpenModal] = useState(false)

	const totalTodos = todos.length
	const completedTodos = todos.filter((todo) => todo.completed).length

	const searchedTodos = todos.filter((todo) =>
		todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase())
	)

	const addTodo = (text) => {
		const newTodos = [...todos]
		newTodos.push({
			completed: false,
			text,
			id: Math.random().toString(35).substr(2, 13),
		})
		setTodos(newTodos)
	}

	const completeTodo = (id) => {
		const todoIndex = todos.findIndex((todo) => todo.id === id)

		const newTodos = [...todos]
		newTodos[todoIndex].completed = !newTodos[todoIndex].completed
		setTodos(newTodos)
	}

	const deleteTodo = (id) => {
		const todoIndex = todos.findIndex((todo) => todo.id === id)

		const newTodos = [...todos]
		newTodos.splice(todoIndex, 1)
		setTodos(newTodos)
	}

	// eslint-disable-next-line
	useEffect(() => !user && setOpenModal(true), [])

	const addUser = (user) => {
		setUser(user)
	}

	return {
		totalTodos,
		completedTodos,
		searchValue,
		setSearchValue,
		searchedTodos,
		openModal,
		setOpenModal,
		addTodo,
		completeTodo,
		deleteTodo,
		user,
		addUser,
	}
}

export default useTodos