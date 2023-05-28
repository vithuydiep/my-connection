export interface globalThemeInterface {
  headerBgColor: string;
  fontLight: string;
  textColor: string;
  borderColor: string;
  backgroundLightColor: string;
  activeColor:string
}

export function globalAppTheme(): globalThemeInterface {
  const root: Element = document.querySelector(':root') as HTMLElement;
  const rootStyle = getComputedStyle(root);

  return {
    headerBgColor: rootStyle.getPropertyValue('--headerBgColor'),
    textColor: rootStyle.getPropertyValue('--textColor'),
    fontLight: rootStyle.getPropertyValue('--fontLight'),
    borderColor: rootStyle.getPropertyValue('--borderColor'),
    backgroundLightColor: rootStyle.getPropertyValue('--backgroundLightColor'),
    activeColor: rootStyle.getPropertyPriority('--activeColor')
  };
}
