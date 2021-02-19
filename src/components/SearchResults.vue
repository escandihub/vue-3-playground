<template>
	<div class="root">
		<p>Showing {{ filteredTitles }} results for {{ query }}</p>
		<ul>
			<li v-for='title in filteredTitles' :key='title.Page'>
			{{ title.Name }}
			</li>
		</ul>
	</div>
</template>

<script>
import titles from "./post-data.json";
import { computed } from "vue";
export default {
	props: {
		query: String,
	},
	setup(props, context) {
		console.log(context);
		const filteredTitles = computed(() => {
			return titles.filter((s) =>
				s.Name.toLowerCase().includes(props.query.toLowerCase())
			);
		});
		return {
			filteredTitles,
		};
	},
};
</script>

<style lang="scss" scoped></style>
