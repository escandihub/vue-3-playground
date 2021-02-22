import { ACTION_TYPES } from "../constants/action-types"
import Vuex from "vuex"
import Axios from "axios"

export default Vuex.createStore({
	state: {
		todos: []
	},
	mutations: {
		[ACTION_TYPES.fetchTodos]: (state, todos) => (state.todos = todos),
		[ACTION_TYPES.updateTodo]: (state, todo) => (state.todos.push(todo))
	},
	actions: {
		onFetchTodos: async ({ commit }) => {
			const reponse = await Axios.get('https://jsonplaceholder.typicode.com/todos')
			commit(ACTION_TYPES.fetchTodos, reponse.data)
		},
		onAddTodo: async ({ commit }, title) => {
			const reponse = await Axios.post("https://jsonplaceholder.typicode.com/todos",
				{ title, completed: false });
			commit(ACTION_TYPES.updateTodo, title)
			console.log(title);
			commit(ACTION_TYPES.addTodo, reponse.data)
		}
	},
	modules: {}
});