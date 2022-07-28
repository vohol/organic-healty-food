<script>
import InnerHero from '../layouts/InnerHero.vue';
import NewsletterSection from '../layouts/NewsletterSection.vue';
export default {
	components: { InnerHero, NewsletterSection },
	mounted() {
		window.scrollTo(0, 0);
	},
};
</script>

<template>
	<InnerHero :title="'about us'"> About us </InnerHero>
	<NewsletterSection />
</template>

<style lang="scss"></style>
