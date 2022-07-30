<script>
import InnerHero from '../layouts/InnerHero.vue';
import NewsletterSection from '../layouts/NewsletterSection.vue';
import StoreList from '../layouts/StoreList.vue';
export default {
	components: { InnerHero, NewsletterSection, StoreList },
	mounted() {
		window.scrollTo(0, 0);
	},
};
</script>

<template>
	<router-view></router-view>
	<InnerHero :title="'store'"> Store </InnerHero>
	<StoreList />
	<NewsletterSection />
</template>

<style lang="scss"></style>
