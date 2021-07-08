import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const dashboard: AppRouteModule = {
  path: '/account',
  name: 'Account',
  component: LAYOUT,
  redirect: '/account/list',
  meta: {
    hideChildrenInMenu: true,
    icon: 'ion:grid-outline',
    title: '账户管理',
    orderNo: 5,
  },
  children: [
    {
      path: 'list',
      name: 'AccountList',
      component: () => import('/@/views/account/index.vue'),
      meta: {
        title: '账户列表',
        hideMenu: true,
      },
    },
    {
      path: 'add',
      name: 'AccountAdd',
      component: () => import('/@/views/account/add.vue'),
      meta: {
        title: '新增账户',
        hideMenu: true,
        currentActiveMenu: '/account/list',
      },
    },
    {
      path: 'edit',
      name: 'AccountEdit',
      component: () => import('/@/views/account/add.vue'),
      meta: {
        title: '编辑账户',
        currentActiveMenu: '/account/list',
        hideBreadcrumb: true,
        hideMenu: true,
        carryParam: true,
      },
    },
  ],
};

export default dashboard;
