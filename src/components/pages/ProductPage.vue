<script>
import { mapGetters } from 'vuex';
import { ref } from 'vue';
import { Thumbs, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import GreenBtn from '../GreenBtn.vue';

export default {
	data() {
		return {
			quantity: 1,
			product: false,
		};
	},
	computed: {
		...mapGetters(['allProducts', 'isLoaded']),
	},
	methods: {
		getProduct(route) {
			const id = route.params.id.toString().match(/\d{6}$/);

			this.product = this.allProducts.filter((el) => el.id == id)[0];
		},
	},
	mounted() {
		if (this.isLoaded) {
			this.getProduct(this.$route);
		}
	},

	watch: {
		$route(newRoute) {
			if (newRoute.name == 'product') this.getProduct(newRoute);
		},
		isLoaded() {
			this.getProduct(this.$route);
		},
	},
	components: {
		Swiper,
		SwiperSlide,
		GreenBtn,
	},
	setup() {
		const thumbsSwiper = ref(null);
		const setThumbsSwiper = (swiper) => {
			thumbsSwiper.value = swiper;
		};
		return {
			Thumbs,
			thumbsSwiper,
			setThumbsSwiper,
			Pagination,
			Navigation,
		};
	},
};
</script>

<template>
	<section class="product">
		<div v-if="!product">Loading...</div>
		<div v-else class="container product__container">
			<div class="product__header">
				<div class="product__photo-wrapper">
					<div
						class="product__photo"
						v-if="product.images.split(',').length === 1"
					>
						<img
							class="product__photo-main"
							:src="require(`@/assets/img/products/${product.id}-1.png`)"
							:alt="product.name"
						/>
					</div>
					<div v-else>
						<swiper
							class="product__photo"
							:modules="[Thumbs]"
							watch-slides-progress
							@swiper="setThumbsSwiper"
							:loop="true"
						>
							<swiper-slide
								class="product__photo-main"
								v-for="slide in product.images.split(',').length"
								:key="slide"
								><img
									:src="
										require(`@/assets/img/products/${product.id}-${slide}.png`)
									"
									:alt="product.name"
							/></swiper-slide>
						</swiper>
						<div class="wrapper">
							<swiper
								:modules="[Thumbs, Navigation]"
								:navigation="{
									prevEl: '.swiper__prev',
									nextEl: '.swiper__next',
								}"
								:thumbs="{ swiper: thumbsSwiper }"
								:loop="true"
								:space-between="10"
								:slides-per-view="3"
								:watch-slides-progress="true"
								:slide-to-clicked-slide="true"
								:centered-slides="true"
							>
								<swiper-slide
									v-for="slide in product.images.split(',').length"
									:key="slide"
									class="product__photo-minor"
								>
									<img
										:src="
											require(`@/assets/img/products/${product.id}-${slide}.png`)
										"
										:alt="product.name"
								/></swiper-slide>
							</swiper>
							<div
								class="material-symbols-outlined swiper__nav-el swiper__prev"
							>
								arrow_back_ios
							</div>
							<div
								class="material-symbols-outlined swiper__nav-el swiper__next"
							>
								arrow_forward_ios
							</div>
						</div>
					</div>
				</div>
				<div class="product__content">
					<h2 class="product__name">{{ product.name }}</h2>
					<div v-if="!product.promo" class="product__price">
						$ {{ product.price }}
					</div>
					<div v-else class="product__price">
						${{ product.promo }}
						<span class="product__price--reduced">${{ product.price }}</span>
					</div>
					<div class="quantity product__quantity">
						<button
							class="quantity__btn"
							@click="quantity == 0 ? 0 : quantity--"
						>
							-
						</button>
						<input type="number" v-model="quantity" min="1" />
						<button class="quantity__btn" @click="quantity++">+</button>
					</div>
					<GreenBtn class="product__buy">Add to cart</GreenBtn>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
.product {
	&__header {
		display: flex;
		gap: 50px;
	}

	&__photo-wrapper {
		@include max-res-width(600px);
	}

	&__photo-main {
		width: 100%;

		img {
			width: 100%;
			object-fit: cover;
		}
	}

	&__photo-minor {
		img {
			width: 100%;
			object-fit: cover;
		}
	}
}

.wrapper {
	position: relative;
}

.swiper {
	&__nav-el {
		position: absolute;
		top: 50%;
		z-index: 11;
		transform: translateY(-50%);
		cursor: pointer;
		font-size: 40px;
		@include py(10px);
		color: $color-main-green;
	}

	&__next {
		right: -40px;
	}
	&__prev {
		left: -40px;
	}
}
</style>
