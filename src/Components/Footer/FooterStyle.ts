import { createUseStyles } from 'react-jss';
import { globalThemeInterface } from '../../jssAppTheme/jssAppTheme';

export const useFooterStyle = createUseStyles((theme: globalThemeInterface) => ({
  wrapper: {
    height: '6vh',
    backgroundColor: '#fff',
    margin: '0 10px',
    boxSizing: 'border-box'
  },
}));

export default useFooterStyle;
