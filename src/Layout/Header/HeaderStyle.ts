import { createUseStyles } from 'react-jss';
import { globalThemeInterface } from '../../jssAppTheme/jssAppTheme';

const useHeaderStyle = createUseStyles((theme: globalThemeInterface) => ({
  header: {
    background: '#fff',
    margin: '5px 10px',
    padding: '5px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '7vh',
    boxSizing: 'border-box'
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: '50%',
    objectFit: 'cover',
    margin: '0 20px',
  },
  rightContent: {
    display: 'flex',
    alignItems: 'center',
  },
  username: {},
  settingButton: {
    backgroundColor: '#fff',
    border: 'none',   
    width: 30,
    height: 20
  },
  logo:{
    width: 60,
    height: '100%',
    objectFit:'contain'
  }
}));

export default useHeaderStyle;
