<template>
	<div>
		<div class="todos">
			<div v-for="todo in todos" :key="todo.id" class="todo">
				<p> {{ todo.title }} </p>
			</div>
		</div>
	</div>
</template>

<script>
import { useStore } from "vuex"
import { computed, onMounted }  from "vue"

export default {
	name: "Todos",
	setup(){
		const store = useStore()
		const todos = computed(() => store.state.todos)
		onMounted(() => {
			store.dispatch("onFetchTodos")
		});
		return {
			todos
		}
	}
}

</script>

<style>

</style>