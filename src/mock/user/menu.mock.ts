import type { MenuList } from '@/interface/layout/menu.interface';

import { intercepter, mock } from '../config';

const mockMenuList: MenuList = [
  {
    code: 'dashboard',
    label: {
      zh_CN: '首页',
      en_US: 'Tổng quan',
    },
    icon: 'dashboard',
    path: '/dashboard',
  },
  {
    code: 'order',
    label: {
      zh_CN: '首页',
      en_US: 'Đơn hàng',
    },
    icon: 'order',
    path: '/orders',
  },
  {
    code: 'product',
    label: {
      zh_CN: '首页',
      en_US: 'Sản phẩm',
    },
    icon: 'product',
    path: '/products',
    children: [
      {
        code: 'management',
        label: {
          zh_CN: '路由权限',
          en_US: 'Quản lý sản phẩm',
        },
        path: '/products/management',
      },
      {
        code: 'category',
        label: {
          zh_CN: '404',
          en_US: 'Danh mục sản phẩm',
        },
        path: '/products/categories',
      },
      {
        code: 'trademarked',
        label: {
          zh_CN: '404',
          en_US: 'Thương hiệu',
        },
        path: '/products/trademarked',
      },
      {
        code: 'natives',
        label: {
          zh_CN: '404',
          en_US: 'Nguồn gốc',
        },
        path: '/products/natives',
      },
    ],
  },
  {
    code: 'customer',
    label: {
      zh_CN: '文档',
      en_US: 'Khách hàng',
    },
    icon: 'customer',
    path: '/customers',
  },
];

mock.mock('/user/menu', 'get', intercepter(mockMenuList));
