<template>
	<div>
		<form>
			<input type="text" v-model="title" placeholder="Add to do..." />
			<button :click="addNewTodo"> add </button>
		</form>
		<br />
	</div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
	name: "AddTodo",
	setup() {
		const store = useStore();
		const title = ref("");
		const addNewTodo = () => {
			// e.preventDefault();
			store.dispatch("onAddTodo", {
				title: title.value,
			});
			title.value = "";
		};
		return {
			title,
			addNewTodo,
		};
	},
};
</script>

<style></style>
