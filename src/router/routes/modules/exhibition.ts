import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const dashboard: AppRouteModule = {
  path: '/exhibition',
  name: 'Exhibition',
  component: LAYOUT,
  redirect: '/Exhibition/list',
  meta: {
    hideChildrenInMenu: true,
    icon: 'ion:grid-outline',
    title: '会展管理',
    orderNo: 1,
  },
  children: [
    {
      path: 'list',
      name: 'ExhibitionList',
      component: () => import('/@/views/exhibition/index.vue'),
      meta: {
        title: '会展列表',
        hideMenu: true,
      },
    },
    {
      path: 'add',
      name: 'ExhibitionAdd',
      component: () => import('/@/views/exhibition/add.vue'),
      meta: {
        title: '创建会展',
        hideBreadcrumb: true,
        hideMenu: true,
        currentActiveMenu: '/Exhibition/list',
      },
    },
  ],
};

export default dashboard;
