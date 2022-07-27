<script>
import { mapGetters } from 'vuex';
import StoreListItem from './StoreListItem.vue';

export default {
	data() {
		return {
			activeFilter: 'all',
			perPage: 8,
			currentPage: 1,
		};
	},
	props: {
		isFeatureProducts: Boolean,
	},
	computed: {
		...mapGetters(['allProducts', 'allFilters', 'featureProducts']),
		products() {
			return this.isFeatureProducts ? this.featureProducts : this.allProducts;
		},
		filteredItems() {
			if (this.activeFilter == 'all') {
				return this.products;
			} else {
				return this.products.filter(
					(el) => el.category.toLowerCase() == this.activeFilter
				);
			}
		},

		totalPages() {
			return Math.ceil(this.filteredItems.length / this.perPage);
		},

		cuttedProducts() {
			const last = this.currentPage * this.perPage;
			const first = last - this.perPage;

			return this.filteredItems.slice(first, last);
		},
	},
	methods: {
		filterHandler(event) {
			const activeClass = 'filters__item--active';
			const nonActiveClass = 'filters__item';

			let target = event.target.textContent.trim().toLowerCase();
			let targetObject = event.target;
			const filters = document.querySelectorAll('.' + nonActiveClass);

			filters.forEach((el) => el.classList.remove(activeClass));
			targetObject.classList.add(activeClass);
			this.activeFilter = target;
		},
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
					class="filters__item"
					:class="filter == 'all' && 'filters__item--active'"
					@click="filterHandler"
				>
					{{ filter }}
				</li>
			</ul>
			<ul class="store__list">
				<StoreListItem
					v-for="product in cuttedProducts"
					:key="product.id"
					:product="product"
				></StoreListItem>
			</ul>
			<div class="pagination" v-if="totalPages > 1">
				<button
					class="material-symbols-outlined pagination__item"
					@click="currentPage > 1 ? currentPage-- : (currentPage = 1)"
				>
					chevron_left
				</button>
				<div class="pagination__pages">
					<button
						class="pagination__item"
						v-for="page in totalPages"
						:key="page"
						@click="currentPage = page"
						:class="{ 'pagination__item--active': page === currentPage }"
					>
						{{ page }}
					</button>
				</div>
				<button
					class="material-symbols-outlined pagination__item"
					@click="
						currentPage < totalPages
							? currentPage++
							: (currentPage = totalPages)
					"
				>
					chevron_right
				</button>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
.store {
	&__container {
		@include py(45px);
	}

	&__list {
		display: flex;
		flex-direction: column;
		align-items: center;

		gap: 30px;
		margin-bottom: 40px;
	}
}

@media screen and (min-width: 630px) {
	.store {
		&__list {
			display: grid;
			grid-template-columns: repeat(2, 300px);
			justify-content: center;
		}
	}
}

@media screen and (min-width: 1290px) {
	.store {
		&__list {
			grid-template-columns: repeat(4, 300px);
		}
	}
}

.filters {
	display: flex;
	justify-content: center;
	gap: 10px;
	margin-bottom: 50px;
	flex-wrap: wrap;

	&__item {
		@include flex-center;
		@include px(20px);
		height: 30px;
		font-size: 13px;
		font-weight: 600;
		border-radius: 30px;
		text-transform: uppercase;
		cursor: pointer;
		margin: 5px;
		@include button-style;
	}
}

.pagination {
	display: flex;
	justify-content: center;
	gap: 24px;

	&__pages {
		display: flex;
		justify-content: center;
		gap: 12px;
	}

	&__item {
		@include flex-center;
		padding: 0px 9px;
		font-size: 18px;
		min-width: 40px;
		min-height: 40px;
		line-height: 21px;
		border-radius: 10px;
		@include button-style;
	}
}
</style>
