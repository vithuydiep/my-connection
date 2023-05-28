import { createUseStyles } from 'react-jss';
import { globalThemeInterface } from '../../jssAppTheme/jssAppTheme';

export const useSidebarStyles = createUseStyles(
  (theme: globalThemeInterface) => ({
    wrapper: {
      width: '20%',
      backgroundColor: '#fff',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px 20px',
      boxSizing: 'border-box',
    },
    menuLink: {
      textDecoration: 'none',
      padding: '20px 30px',
      display: 'flex',
      alignItems: 'center',
      color: 'rgba(0,0,0,0.5)',
    },
    menuLinkActive:{
      textDecoration: 'none',
      padding: '20px 30px',
      display: 'flex',
      alignItems: 'center',
      color: 'rgb(64, 94, 130)',
      fontWeight: 700
   },
    menuHomeActive: {
      borderRadius: 5,
      padding: '15px 30px',
      backgroundColor: '#fdf0db',
      textDecoration: 'none',
      color: '#f5c277',
      display: 'flex',
      alignItems: 'center',
    },
    icon: {},
    namePath: {
      paddingLeft: 15,
    },
  })
);

export default useSidebarStyles;
