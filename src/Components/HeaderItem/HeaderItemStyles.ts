import { createUseStyles } from 'react-jss';
import { globalThemeInterface } from '../../jssAppTheme/jssAppTheme';

export const useHeaderItem = createUseStyles((theme: globalThemeInterface) => ({
  wrapper: {
    color: 'rgb(64 94 130)',
    fontSize: 14,
    fontWeight: 600,
    border: 'none',
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    '& > p': {
      marginRight: 5,
    },
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

export default useHeaderItem;
