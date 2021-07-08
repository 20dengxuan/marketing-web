import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const dashboard: AppRouteModule = {
  path: '/investment',
  name: 'Investment',
  component: LAYOUT,
  redirect: '/investment/list',
  meta: {
    hideChildrenInMenu: true,
    icon: 'ion:grid-outline',
    title: '招展招商',
    orderNo: 3,
  },
  children: [
    {
      path: 'list',
      name: 'InvestmentList',
      component: () => import('/@/views/investment/index.vue'),
      meta: {
        title: '招商列表',
        hideMenu: true,
      },
    },
  ],
};

export default dashboard;
