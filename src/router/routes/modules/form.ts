import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const dashboard: AppRouteModule = {
  path: '/form-temp',
  name: 'FormTemp',
  component: LAYOUT,
  redirect: '/form-temp/list',
  meta: {
    hideChildrenInMenu: true,
    icon: 'ion:grid-outline',
    title: '表单模版',
    orderNo: 2,
  },
  children: [
    {
      path: 'list',
      name: 'FormTempList',
      component: () => import('/@/views/form-temp/index.vue'),
      meta: {
        title: '模版列表',
        hideMenu: true,
      },
    },
    {
      path: 'add',
      name: 'FormTempAdd',
      component: () => import('/@/views/form-temp/add.vue'),
      meta: {
        title: '新建模版表单',
        hideBreadcrumb: true,
        currentActiveMenu: '/form-temp/list',
      },
    },
  ],
};

export default dashboard;
