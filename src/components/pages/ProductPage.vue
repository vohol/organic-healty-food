<script>
import { mapGetters } from 'vuex';

export default {
	data() {
		return {
			product: {},
		};
	},
	computed: {
		...mapGetters(['allProducts']),
	},
	methods: {
		getProduct(route) {
			const id = route.params.id.toString().match(/\d{6}$/);

			this.product = this.allProducts.filter((el) => el.id == id)[0];
		},
	},
	mounted() {
		this.getProduct(this.$route);
	},
	watch: {
		$route(newRoute) {
			if (newRoute.name == 'product') this.getProduct(newRoute);
		},
	},
};
</script>

<template>
	<div>{{ product }}</div>
</template>

<style lang="scss"></style>
