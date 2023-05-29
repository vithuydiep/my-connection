import { createUseStyles } from 'react-jss';
import { globalThemeInterface } from '../../jssAppTheme/jssAppTheme';

export const useInputFormStyle = createUseStyles(
  (theme: globalThemeInterface) => ({
    formInputWrp: {
      textAlign:'left',
      background: '#fff',
      borderRadius: 6,
      position: 'relative',
      minHeight: 65,
      alignItems: 'center',
      '& label': {
        color: '#405e82',
        fontSize: 14,
        display: 'flex',
        alignItems:'end',
        background: '#fff',
        '& > svg':{
          marginLeft: 5,
          color : '#CCC'
        },
        '& span': {
          color: '#FF0000',
        },
        margin: '5px 0',
      },
      '& > input': {
        padding: '7px 5px',
        borderRadius: 5,
        border: '1px solid #818181',
        width:  'calc(100% - 10px)',
        marginLeft: 10,
        fontSize: 15,

      },
      '& > p':{
        color :'#ccc',
        fontSize: 11,
        margin: '5px 0'
      },
      '& > div':{
        width: 200,
        height: 30
      }
    },
    formErrMsg: {
      marginTop: 5,
      color: '#f00',
      fontSize: 14,
    },
    selectDisabledWrap: {
      background: '#f5f5f5',
      pointerEvents: 'none',
      '& label': {
        color: 'rgba(0, 0, 0, 0.5)',
      },
      '& small': {
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      },
      '& svg': {
        '& path': {
          fill: 'rgba(0, 0, 0, 0.5)'
        }
      }
    },
  })
);

export default useInputFormStyle;
