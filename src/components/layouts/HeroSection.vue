<script>
import Parallax from 'parallax-js';

export default {
	mounted() {
		const scene = document.getElementById('scene');
		// eslint-disable-next-line no-unused-vars
		const parallaxInstance = new Parallax(scene);
	},
};
</script>

<template>
	<div class="container hero__container">
		<div id="scene">
			<div data-depth="0.12" class="layer">
				<img
					class="hero__paralax-img"
					src="../../assets/img/fresh-melientha-suavis-pierre-leaves-white-surface_removebg-preview.png"
					alt="image with leaves"
				/>
			</div>
		</div>
		<div class="hero__title-wrapper">
			<h1 class="hero__title section-title">Organic Fruit & Vegetables</h1>
			<p class="hero__description section-description">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s, when an unknown printer took a galley...
			</p>
		</div>
	</div>
</template>

<style lang="scss"></style>
