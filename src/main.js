import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from '@/components/pages/HomePage.vue';
import Store from '@/components/pages/ShopPage.vue';
import AboutUs from '@/components/pages/AboutUs.vue';
import Contact from '@/components/pages/ContactPage.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/store',
			name: 'store',
			component: Store,
		},
		{
			path: '/about-us',
			name: 'about-us',
			component: AboutUs,
		},
		{
			path: '/contact',
			name: 'contact',
			component: Contact,
		},
	],
});

const app = createApp(App);

app.use(router);

app.mount('#app');
