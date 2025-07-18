import { uniqueId } from 'lodash';

interface MenuitemsType {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: string;
  children?: MenuitemsType[];
  chip?: string;
  chipColor?: string;
  variant?: string;
  external?: boolean;
}
import {
  IconPoint,
  IconUserCircle,
  IconBasket,
  IconChartDonut3,
  IconAperture,
  IconLayout,
  IconAppWindow,
  IconFileCheck
} from '@tabler/icons-react';

const MenuitemsAgent: MenuitemsType[] = [
  {
    navlabel: true,
    subheader: 'Home',
  },

  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconAperture,
    href: '/dashboard',
  },
  
  {
    navlabel: true,
    subheader: 'Apps',
  },
  
  {
    id: uniqueId(),
    title: 'Inventory',
    icon: IconChartDonut3,
    href: '/inventory/list',
    children: [
      {
        id: uniqueId(),
        title: 'List Inventory',
        icon: IconPoint,
        href: '/inventory/list',
      }
    ],
  },
  {
    navlabel: true,
    subheader: 'Management',
  },
  {
    id: uniqueId(),
    title: 'Product List',
    icon: IconUserCircle,
    href: '/product/partner',
  },
  {
    id: uniqueId(),
    title: 'Order',
    icon: IconBasket,
    href: '/order/list',
    children: [
        {
            id: uniqueId(),
            title: 'Create Simcard / eSIM',
            icon: IconPoint,
            href: '/order/create',
        },
        {
            id: uniqueId(),
            title: 'Topup List',
            icon: IconPoint,
            href: '/topup/list',
        },
        {
            id: uniqueId(),
            title: 'Order List',
            icon: IconPoint,
            href: '/order/list',
        },
    ],
  },
  {
    id: uniqueId(),
    title: 'Reporting',
    icon: IconFileCheck,
    href: '/inventory/summary',
    children: [
      {
        id: uniqueId(),
        title: 'Inventory Summary',
        icon: IconPoint,
        href: '/inventory/summary',
      },
    ],
  },
];

export default MenuitemsAgent;
