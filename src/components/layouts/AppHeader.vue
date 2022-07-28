<script>
import LogoItem from '../LogoItem.vue';
import NavigationItem from '../NavigationItem.vue';
import GreenBtn from '../GreenBtn.vue';
import BasketPreview from './BasketPreview.vue';

export default {
	components: { LogoItem, NavigationItem, GreenBtn, BasketPreview },
	methods: {
		openBasket() {
			document.querySelector('.basket').classList.add('basket--active');
		},
	},
};
</script>

<template>
	<header class="header">
		<div class="container header__container">
			<NavigationItem class="header__nav" />
			<logo-item class="header__logo" />
			<div class="header__icons">
				<div class="header__icons-wrapper">
					<svg class="svg-search-dims">
						<use xlink:href="@/assets/files/sprite.svg#search"></use>
					</svg>
				</div>
				<div class="header__icons-wrapper" @click="openBasket">
					<svg class="svg-busket-dims">
						<use xlink:href="@/assets/files/sprite.svg#busket"></use>
					</svg>
				</div>
				<green-btn class="header__reg-btn">Register Now</green-btn>
			</div>
		</div>
		<BasketPreview />
	</header>
</template>

<style lang="scss" scoped>
.svg-busket-dims,
.svg-search-dims {
	@include wh(21px);
}

.header {
	&__container {
		padding: 20px;
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
		justify-content: space-between;
	}

	&__icons {
		margin-right: 40px;
		position: absolute;
		right: 0;
		z-index: 5;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	&__icons-wrapper {
		cursor: pointer;
		margin-right: 20px;
		@include flex-center;
		@include wh(40px);
		border-radius: 50px;
		background-color: $color-light-green;
		transition: all 0.3;

		&:hover {
			box-shadow: 0 0 20px 1px $color-main-green;
		}
	}

	&__reg-btn {
		position: fixed;
		top: 111px;
		right: -100%;

		&.mobile {
			right: 75px;
			z-index: 5;
		}
	}
}

@media screen and (min-width: $desktop) {
	.header {
		&__container {
			padding-top: 50px;
			padding-bottom: 43px;
		}
	}
}

@media screen and (min-width: $tablet) {
	.header {
		&__container {
			flex-direction: row;
			padding: 50px 20px 43px;
		}

		&__reg-btn {
			margin-left: 12px;
			position: unset;
		}

		&__icons {
			position: unset;
			right: unset;
			z-index: unset;
			margin-right: 0;
		}
	}
}
</style>
