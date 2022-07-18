<script>
import AppHeader from './components/layouts/AppHeader.vue';

export default {
	name: 'App',
	components: { AppHeader },
};
</script>

<template>
	<AppHeader />
	<main></main>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

@font-face {
	font-family: 'streamster';
	src: url('./assets/fonts/Streamster.ttf');
}

* {
	font-family: $font_primary;
}

.container {
	@include max-res-width(1320px);
	@include px(15px);
	margin: 0 auto;
}
</style>
