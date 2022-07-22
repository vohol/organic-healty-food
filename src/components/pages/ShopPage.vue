<script>
import InnerHero from '../layouts/InnerHero.vue';
import NewsletterSection from '../layouts/NewsletterSection.vue';
export default { components: { InnerHero, NewsletterSection } };
</script>

<template>
	<InnerHero :title="'store'"> Shop List </InnerHero>
	<NewsletterSection />
</template>

<style lang="scss"></style>
