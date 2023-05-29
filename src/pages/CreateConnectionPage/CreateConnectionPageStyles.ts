import { createUseStyles } from 'react-jss';
import { globalThemeInterface } from '../../jssAppTheme/jssAppTheme';

export const useCreateConnectionStyle = createUseStyles(
  (theme: globalThemeInterface) => ({
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '10px 50px',
      '& > div:last-of-type': {
        width:'100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& > button': {
          display: 'flex',
          alignItems: 'center',
          border: 'none',
          backgroundColor: 'transparent',
          '& > p': {
            paddingLeft: 10,
            fontSize: 16,
            color: '#405e82',
          },
        },
      },
    },
    slash: {
      color: '#ccc',
    },
    title: {
      color: '#405e82',
      fontWeight: 600,
      fontSize: 20,
      margin: '20px 0',
    },
    content: {
      width: '100%',
      backgroundColor: '#fff',
      padding: '20px 40px',
      margin: '10px 0',
      borderRadius: 7,
      textAlign: 'left',
      '& > p': {
        color: '#405e82',
        fontSize: 15,
        fontWeight: 600,
      },
    },
    contentWrapper: {
      margin: '20px 0',
      display: 'flex',
    },
    filterWrapper: {
      display: 'flex',
      flexDirection: 'column',
      '& > button': {
        border: 'none',
        backgroundColor: 'transparent',
        textAlign: 'left',
      },
    },
    container: {
      display: 'flex',
      flex: 1,
      padding: '10px 30px',
    },
    item: {
      margin: '0 10px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '50px 150px',
      border: '1px solid #ccc',
      backgroundColor: 'transparent',
      borderRadius: 10,
      '& > img': {
        width: 50,
        height: 50,
        marginBottom: 10,
        objectFit: 'contain',
      },
    },
    groupButton:{
      margin:'10px 0',
      '& button':{
        border: 'none',
        padding: '10px 20px',
        borderRadius: 5,
        fontWeight: 600
      },
      '& button:first-of-type':{
        backgroundColor: '#ccc',
        color:'#818181',
        width: 150
      },
      '& button:last-of-type':{
        backgroundColor: '#405e82',
        color: '#fff',
        marginLeft: 10
      }
    }
  })
);

export default useCreateConnectionStyle;
