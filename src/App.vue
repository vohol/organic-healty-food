<script>
import AppHeader from './components/layouts/AppHeader.vue';
import HomePage from './components/pages/HomePage.vue';
import AppFooter from './components/layouts/AppFooter.vue';

export default {
	name: 'App',
	components: { AppHeader, HomePage, AppFooter },
};
</script>

<template>
	<AppHeader />
	<main>
		<HomePage></HomePage>
	</main>
	<AppFooter />
</template>

<style lang="scss">
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
