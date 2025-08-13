interface FooterlItem {
  id?: string;
  iconPath: string;
  alt: string;
  lable: string;
  path: string;
}

export interface FooterData {
  items: FooterlItem[];
}

export const footerData: FooterData = {
  items: [
    { id: '1', iconPath: '/icons/office.svg', alt: 'office link', lable: 'Office', path: '/' },
    { id: '2', iconPath: '/icons/resources.svg', alt: 'resources link', lable: 'Resources', path: '/resources' },
    { id: '3', iconPath: '/icons/materials.svg', alt: 'materials link', lable: 'Materials', path: '/materials' },
    { id: '4', iconPath: '/icons/goods.svg', alt: 'goods link', lable: 'Goods', path: '/goods' },
    { id: '5', iconPath: '/icons/stock.svg', alt: 'stock link', lable: 'Stock', path: '/stock' },
  ],
};
