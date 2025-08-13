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
