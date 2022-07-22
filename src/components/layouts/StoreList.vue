<script>
import StoreListItem from './StoreListItem.vue';
export default {
	data() {
		return {
			products: [],
			isLoading: false,
		};
	},
	methods: {
		getProducts() {
			this.isLoading = true;
			fetch('https://sheetdb.io/api/v1/piolx43w5m6nb')
				.then((r) => {
					if (r.ok) return r.json();
				})
				.then((data) => {
					let result = [];
					data.forEach((element) => {
						result.push({ ...element });
					});
					this.products = result;
					console.log(this.products);
					this.isLoading = false;
				});
		},
	},
	mounted() {
		this.getProducts();
	},
	components: { StoreListItem },
};
</script>

<template>
	<section class="store">
		<div class="container store__container">
			<div v-if="isLoading">Loading...</div>
			<ul v-else class="store__list">
				<StoreListItem
					v-for="product in products"
					:key="product.id"
					:product="product"
				></StoreListItem>
			</ul>
		</div>
	</section>
</template>

<style lang="scss"></style>
