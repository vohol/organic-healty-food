<script>
import HeroSection from '../layouts/HeroSection.vue';
import ServiceSection from '../layouts/ServiceSection.vue';
import SpecialItems from '../layouts/SpecialItems.vue';
import ProcessSection from '../layouts/ProcessSection.vue';
import TestimonialsSection from '../layouts/TestimonialsSection.vue';

export default {
	components: {
		HeroSection,
		ServiceSection,
		SpecialItems,
		ProcessSection,
		TestimonialsSection,
	},
};
</script>

<template>
	<HeroSection />
	<ServiceSection />
	<ProcessSection />
	<SpecialItems />
	<TestimonialsSection />
</template>

<style lang="scss"></style>
