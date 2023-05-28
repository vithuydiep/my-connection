import { createUseStyles } from 'react-jss';
import { globalThemeInterface } from '../../jssAppTheme/jssAppTheme';

const useHomePageStyle = createUseStyles((theme: globalThemeInterface) => ({
  wrapper: {
    display: 'flex',
    margin: '5px 10px',
    height: '85vh',
    boxSizing: 'border-box'
  },
  content: {
    flex: 1,
    padding: '20px 40px 5px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  title: {
    textAlign: 'left',
    marginBottom: 20,
  },
  groupWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& p': {
      color: 'rgb(64 94 130)',
      fontSize: 22,
      fontWeight: 600,
    },
    '& div button': {
      backgroundColor: 'rgb(64 94 130)',
      border: 'none',
      color: '#fff',
      padding: '7px 10px',
      borderRadius: 5,
      fontWeight: 550,
      marginLeft: 10,
      width: 150,
    },
  },
  disableBtn: {
    backgroundColor: 'rgba(0,0,0,0.05) !important',
    color: 'rgba(0,0,0,0.2) !important',
    border: 'solid 0.5px rgba(0,0,0,0.2) !important',
  },
  contentWrapper:{
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 10,
    height: '60vh'
  },
  wrapTable:{
    padding: '40px 20px', 
  },
  table:{
    borderStyle: 'hidden',  
    width: '100%',
    boxSizing:'border-box',
    borderSpacing:'10px 20px',
    '& thead':{
      backgroundColor:'rgba(0,0,0,0.05) !important'
      // border: 'solid 0.5px rgba(0,0,0,0.2)',
    },
    '& th':{
      padding: '10px 10px',
      color:'rgb(64 94 130)',
      backgroundColor: 'rgba(0,0,0,0.05) !important',
    }
  },
  pagination:{
    alignSelf: 'flex-end'
  }
}));

export default useHomePageStyle;
