<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

import { mapActions } from 'vuex';
import AppHeader from './components/layouts/AppHeader.vue';
import AppFooter from './components/layouts/AppFooter.vue';

export default {
	name: 'App',
	components: { AppHeader, AppFooter },
	methods: mapActions(['fetchProducts', 'getBasketData']),

	async mounted() {
		AOS.init();
		this.fetchProducts();
		this.getBasketData();
	},
};
</script>

<template>
	<AppHeader />
	<main class="main">
		<router-view />
	</main>
	<AppFooter />
</template>

<style lang="scss">
.main {
	padding-top: 96px;
}

body.nonscroll {
	overflow: hidden;
}

* {
	color: $color-black;
	font-family: 'DM Sans', sans-serif;
}

.container {
	@include max-res-width(1260px);
	@include px(10px);
	margin: 0 auto;
}
</style>
