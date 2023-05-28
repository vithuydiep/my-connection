import { createUseStyles } from 'react-jss';
import { globalThemeInterface } from '../../jssAppTheme/jssAppTheme';

export const useFilterItemStyle = createUseStyles((theme: globalThemeInterface) => ({
    filterItemActive: {
        padding: '20px 20px',
        width: '250px',
        color: 'rgb(100, 169, 248)',
        backgroundColor: 'rgb(233, 247,254)',
        borderRight: '5px solid rgb(100, 169, 248)'
      },
      filterItem: {
        padding: '20px 20px',
        width: '250px',
      }

}));

export default useFilterItemStyle;
