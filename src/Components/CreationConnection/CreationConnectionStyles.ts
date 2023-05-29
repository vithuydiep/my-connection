import { createUseStyles } from 'react-jss';
import { globalThemeInterface } from '../../jssAppTheme/jssAppTheme';

export const useCreationConnectionStyle = createUseStyles(
  (theme: globalThemeInterface) => ({
    wrp: {
      width: '100%',
    },
    infoWrapper: {
      padding: '20px 40px 40px',
      backgroundColor: '#fff',
      width: '100%',
      textAlign: 'left',
      borderRadius: 5,
      '& > p': {
        padding: '20px 0',
        fontSize: 18,
        fontWeight: 600,
        color: '#405e82',
      },
    },
    typeChosenWrapper: {
      '& > p': {
        color: '#405e82',
        margin: '5px 0',
        fontSize: 14,
      },
      '& > div': {
        padding: '7px 5px',
        borderRadius: 5,
        border: '1px solid #818181',
        marginLeft: 10,
        fontSize: 15,
        display: 'flex',
        alignItems: 'center',
        width: 'calc(100% - 10px)',
        backgroundColor: '#CCC',
        '& > img': {
          width: 20,
          height: 20,
          objectFit: 'contain',
          marginRight: 5,
        },
      },
    },
    serverInformationWrp: {
      margin: '10px 0',
      padding: '20px 40px 40px',
      backgroundColor: '#fff',
      width: '100%',
      textAlign: 'left',
      borderRadius: 5,
      '& > p': {
        padding: '20px 0',
        fontSize: 18,
        fontWeight: 600,
        color: '#405e82',
      },
      '& > div': {
        width: '100%',
        textAlign: 'right',
        '& > button': {
          backgroundColor: 'rgb(221 204 144)',
          border: 'none',
          color: '#fff',
          padding: '10px 20px',
          borderRadius: 5,
        },
      },
    },
    tooltip: {
      backgroundColor: '#405e82',
      opacity: 1,
    },
    connectByWrp: {
      position: 'relative',
      border: '1px solid #818181',
      padding: '7px 5px',
      borderRadius: 5,
      margin: '30px 0',
      '& > label': {
        color: '#405e82',
        fontSize: 14,
        display: 'flex',
        alignItems: 'end',
        background: '#fff',
        position: 'absolute',
        top: -15,
        left: -2,
        zIndex: 1,
        '& > svg': {
          marginLeft: 5,
          color: '#CCC',
        },
        '& span': {
          color: '#FF0000',
        },
        margin: '5px 0',
      },
      '& > div:first-of-type': {
        backgroundColor: '#fff',
        height: 30,
        fontSize: 14,
        position: 'absolute',
        right: 50,
        top: -15,
      },
      '& > div:last-of-type': {
        padding: '20px 10px',
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
    },
    wrapBtn:{
      display: 'flex',
      justifyContent: 'space-between'
    }
  })
);

export default useCreationConnectionStyle;
