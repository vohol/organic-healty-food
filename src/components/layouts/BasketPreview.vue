<script>
import { mapGetters } from 'vuex';

export default {
	computed: {
		...mapGetters(['getBasketProducts']),
	},
	methods: {
		closeBasket() {
			document.querySelector('.basket').classList.remove('basket--active');
			document.body.classList.remove('nonscroll');
		},
	},
};
</script>

<template>
	<div class="basket">
		<div class="basket__content" v-if="getBasketProducts">
			<div
				class="basket__item"
				v-for="product in getBasketProducts"
				:key="product.id"
			>
				{{ product }}
			</div>
		</div>
	</div>
	<div class="basket-overlay" @click="closeBasket"></div>
</template>

<style lang="scss">
.basket-overlay {
	content: '';
	position: fixed;
	width: 100vw;
	height: 100vh;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 4;
	transition: all 0.2s ease-in-out;
	background-color: rgba(144, 208, 88, 0.3);
	opacity: 0;
	visibility: hidden;
}

.basket {
	@include max-res-width(100%);
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	background: white;
	transform: translateX(100%);
	transition: transform 0.3s;
	z-index: 5;

	&--active {
		transform: translateX(0%);
		& + .basket-overlay {
			opacity: 1;
			visibility: visible;
		}
	}
}

@media screen and (min-width: 550px) {
	.basket {
		max-width: 340px;
	}
}
</style>
