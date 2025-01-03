import { RoutesTypes } from '@/types/routes.type';
import Details from '@/pages/Details';
import Home from '@/pages/Home';
import Pricing from '@/pages/Pricing';
import Collections from '@/pages/Collections';

const publicRoutes: RoutesTypes[] = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/collections',
		component: Collections,
	},
	{
		path: '/collections/:id',
		component: Details,
	},
	{
		path: '/pricing',
		component: Pricing,
	},
	// {
	// 	path: '/*',
	// 	component: NotFound,
	// },
];

export { publicRoutes };
