<script>
import InnerHero from '../layouts/InnerHero.vue';
import NewsletterSection from '../layouts/NewsletterSection.vue';
import StoreList from '../layouts/StoreList.vue';
export default { components: { InnerHero, NewsletterSection, StoreList } };
</script>

<template>
	<InnerHero :title="'store'"> Shop List </InnerHero>
	<NewsletterSection />
	<StoreList />
</template>

<style lang="scss"></style>
