<script>
import HeroSection from '../layouts/HeroSection.vue';
import ServiceSection from '../layouts/ServiceSection.vue';
import SpecialItems from '../layouts/SpecialItems.vue';
import ProcessSection from '../layouts/ProcessSection.vue';
export default {
	components: { HeroSection, ServiceSection, SpecialItems, ProcessSection },
};
</script>

<template>
	<HeroSection />
	<ServiceSection />
	<ProcessSection />
	<SpecialItems />
</template>

<style lang="scss"></style>
