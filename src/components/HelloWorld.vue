<template>
	<div class="hello">
		<h1>Filter LearnVue Aricle</h1>
		<input type="text" placeholder="Filter Search" v-model="query" />
		{{ query }}
<br/>
		<button @click="reset">Reset</button>
		<br/>
		<search-results :query="query"/>
	</div>
</template>

<script>
import { ref } from "vue";
import SearchResults from "./SearchResults.vue"
export default {
	name: "HelloWorld",
	components: {
		SearchResults,
	},
	props: {
		msg: String,
	},
	setup() {
		const query = ref("");
		const reset = () => {
			query.value = ""; //clears the query
		};
		return {
			query,
			reset,
		};
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
