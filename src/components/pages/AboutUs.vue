<script>
import InnerHero from '../layouts/InnerHero.vue';
import NewsletterSection from '../layouts/NewsletterSection.vue';
import OurTeam from '../layouts/OurTeam.vue';
import ServiceSection from '../layouts/ServiceSection.vue';
import ProcessSection from '../layouts/ProcessSection.vue';

export default {
	components: {
		InnerHero,
		NewsletterSection,
		OurTeam,
		ServiceSection,
		ProcessSection,
	},
	mounted() {
		window.scrollTo(0, 0);
	},
};
</script>

<template>
	<InnerHero :title="'about us'"> About us </InnerHero>
	<OurTeam />
	<ServiceSection />
	<ProcessSection />
	<NewsletterSection />
</template>

<style lang="scss"></style>
