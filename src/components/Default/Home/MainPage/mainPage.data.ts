/* eslint-disable no-plusplus */

interface TotalItem {
  iconPath: string;
  alt: string;
  count: number;
  width: number;
  height: number;
}

export interface MainPageData {
  headLogoPath: string;
  gameName: string;
  cashSVGPath: string;
  totalItems: TotalItem[];
  mainButtonText: string;
}

export const mainPageData: MainPageData = {
  headLogoPath: '/icons/startLogo.svg',
  gameName: 'Roll Craft',
  cashSVGPath: '/icons/cash.svg',
  totalItems: [
    { iconPath: '/icons/cash.svg', alt: 'cash', count: 5, width: 32, height: 32 },
    { iconPath: '/icons/x2.svg', alt: 'multiplier', count: 1, width: 32, height: 32 },
    { iconPath: '/icons/null.svg', alt: 'coin', count: 1, width: 24, height: 24 },
    { iconPath: '/icons/bomb.svg', alt: 'bomb', count: 1, width: 24, height: 24 },
    { iconPath: '/icons/stop.svg', alt: 'stop', count: 1, width: 24, height: 24 },
  ],
  mainButtonText: 'Claim',
};

export const totalItemsData = [
  { type: 'cash', value: 100, iconPath: '/icons/cash.svg', revealed: false },
  { type: 'cash', value: 500, iconPath: '/icons/cash.svg', revealed: false },
  { type: 'cash', value: 1000, iconPath: '/icons/cash.svg', revealed: false },
  { type: 'cash', value: 10000, iconPath: '/icons/cash.svg', revealed: false },
  { type: 'cash', value: 200, iconPath: '/icons/cash.svg', revealed: false },
  { type: 'bomb', value: 0, iconPath: '/icons/bomb.svg', revealed: false },
  { type: 'x2', value: 0, iconPath: '/icons/x2.svg', revealed: false },
  { type: 'null', value: 0, iconPath: '/icons/null.svg', revealed: false },
  { type: 'stop', value: 0, iconPath: '/icons/stop.svg', revealed: false },
];

export function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
}
