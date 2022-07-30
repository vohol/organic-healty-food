<script>
import InnerHero from '../layouts/InnerHero.vue';
import NewsletterSection from '../layouts/NewsletterSection.vue';
import ContactForm from '../layouts/ContactForm.vue';
export default {
	components: { InnerHero, NewsletterSection, ContactForm },
	mounted() {
		window.scrollTo(0, 0);
	},
};
</script>

<template>
	<InnerHero :title="'Contact us'"> Contact us</InnerHero>
	<ContactForm />
	<NewsletterSection />
</template>

<style lang="scss"></style>
