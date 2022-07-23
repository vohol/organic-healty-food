<script>
import { mapGetters } from 'vuex';
import StoreListItem from './StoreListItem.vue';

export default {
	computed: {
		...mapGetters(['allProducts', 'allFilters']),
	},
	components: { StoreListItem },
};
</script>

<template>
	<section class="store">
		<div class="container store__container">
			<ul class="filters store__filters">
				<li
					v-for="filter in allFilters"
					:key="allFilters.indexOf(filter)"
					class="filter__item"
				>
					{{ filter }}
				</li>
			</ul>
			<ul class="store__list">
				<StoreListItem
					v-for="product in allProducts"
					:key="product.id"
					:product="product"
				></StoreListItem>
			</ul>
		</div>
	</section>
</template>

<style lang="scss"></style>
