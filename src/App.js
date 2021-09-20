import React from 'react'
import Header from './components/Header'
import Counter from './components/Counter'
import Search from './components/Search'
import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'
import CreateTodoButton from './components/CreateTodoButton'
import Modal from './components/Modal'
import TodoForm from './components/TodoForm'
import UserForm from './components/UserForm'
import useTodos from './hooks/useTodos'

function App() {
	const {
		totalTodos,
		completedTodos,
		searchValue,
		setSearchValue,
		searchedTodos,
		completeTodo,
		deleteTodo,
		openModal,
		setOpenModal,
		user,
		addUser,
		addTodo,
	} = useTodos()

	return (
		<>
			<Header />
			<Counter totalTodos={totalTodos} completedTodos={completedTodos} user={user} />
			<Search searchValue={searchValue} setSearchValue={setSearchValue} />

			<TodoList>
				{searchedTodos.map((todo) => (
					<TodoItem
						key={todo.id}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => completeTodo(todo.id)}
						onDelete={() => deleteTodo(todo.id)}
					/>
				))}
			</TodoList>

			<CreateTodoButton setOpenModal={setOpenModal} />

			{!user && openModal && (
				<Modal>
					<UserForm setOpenModal={setOpenModal} addUser={addUser} />
				</Modal>
			)}

			{user && openModal && (
				<Modal>
					<TodoForm setOpenModal={setOpenModal} addTodo={addTodo} />
				</Modal>
			)}
		</>
	)
}

export default App