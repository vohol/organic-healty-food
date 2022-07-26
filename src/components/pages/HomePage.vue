<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

import HeroSection from '../layouts/HeroSection.vue';
import ServiceSection from '../layouts/ServiceSection.vue';
import SpecialItems from '../layouts/SpecialItems.vue';
import ProcessSection from '../layouts/ProcessSection.vue';
import TestimonialsSection from '../layouts/TestimonialsSection.vue';
import WeAre from '../layouts/WeAre.vue';
import NewsletterSection from '../layouts/NewsletterSection.vue';
import FeatureProducts from '../layouts/FeatureProducts.vue';

export default {
	components: {
		HeroSection,
		ServiceSection,
		SpecialItems,
		ProcessSection,
		TestimonialsSection,
		WeAre,
		NewsletterSection,
		FeatureProducts,
	},
	mounted() {
		AOS.init();
	},
};
</script>

<template>
	<HeroSection />
	<ServiceSection />
	<ProcessSection />
	<SpecialItems />
	<FeatureProducts />
	<TestimonialsSection />
	<WeAre />
	<NewsletterSection />
</template>

<style lang="scss"></style>
