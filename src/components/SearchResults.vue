<template>
	<div class="root">
		<p>Showing {{ filteredTitles }} results for {{ query }}</p>
		<ul>
			<li v-for='accounts in filteredTitles' :key='accounts.name'>
			{{ accounts.name }}
			</li>
		</ul>
	</div>
</template>

<script>
import { accounts } from "./post-data.json";
import { computed } from "vue";
export default {
	props: {
		query: String,
	},
	setup(props, context) {
		console.log(context);
		const filteredTitles = computed(() => {
			return accounts.filter((state) =>
				state.name.toLowerCase().includes(props.query.toLowerCase())
			);
		});
		return {
			filteredTitles,
		};
	},
};
</script>

<style lang="scss" scoped></style>
