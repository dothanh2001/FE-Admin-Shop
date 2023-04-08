import type { FC } from 'react';

import { ReactComponent as AccountSvg } from '@/assets/menu/account.svg';
import { ReactComponent as CustomerSvg } from '@/assets/menu/customer.svg';
import { ReactComponent as DashboardSvg } from '@/assets/menu/dashboard.svg';
import { ReactComponent as DocumentationSvg } from '@/assets/menu/documentation.svg';
import { ReactComponent as GuideSvg } from '@/assets/menu/guide.svg';
import { ReactComponent as OrderSvg } from '@/assets/menu/order.svg';
import { ReactComponent as PermissionSvg } from '@/assets/menu/permission.svg';
import { ReactComponent as ProductSvg } from '@/assets/menu/product.svg';
import { ReactComponent as StockSvg } from '@/assets/menu/stock.svg';

interface CustomIconProps {
  type: string;
}

export const CustomIcon: FC<CustomIconProps> = props => {
  const { type } = props;
  let com = <GuideSvg />;

  switch (type) {
    case 'guide':
      com = <GuideSvg />;
      break;
    case 'permission':
      com = <PermissionSvg />;
      break;
    case 'dashboard':
      com = <DashboardSvg />;
      break;
    case 'account':
      com = <AccountSvg />;
      break;
    case 'documentation':
      com = <DocumentationSvg />;
      break;
    case 'order':
      com = <OrderSvg />;
      break;
    case 'product':
      com = <ProductSvg />;
      break;
    case 'stock':
      com = <StockSvg />;
      break;
    case 'customer':
      com = <CustomerSvg />;
      break;
    default:
      com = <GuideSvg />;
      break;
  }

  return <span className="anticon">{com}</span>;
};
