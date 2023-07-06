import { createUseStyles } from "react-jss";
import { globalThemeInterface } from "../../jssAppTheme/jssAppTheme";

const useLoginFormStyle = createUseStyles((theme: globalThemeInterface) => ({
  wrapper: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#fff",
    display: "flex",
  },
  content: {
    margin: "auto",
    "& h2": {
      color: "#003566",
      fontWeight: 500,
      fontSize: 22,
      margin: "25px 0",
    },
    "& p": {
      color: "red",
      marginBottom: 10,
      marginTop: 5,
      fontSize: 13
    },
  },
  header: {
    "& p": {
      fontWeight: 400,
      textAlign: "center",
      fontSize: 14,
      color: "rgba(0,0,0,0.45)",
    },
  },
  formWrapper: {
    "& div": {
      "& div": {
        "& input": {
          marginLeft: 0,
          width: "100%",
          height: 40,
        },
        "& label": {
          color: "#4F4F4F",
          marginBottom: 10,
        },
      },
      "& + div": {
        marginTop: 15,
      },
    },
    "& button": {
      width: "100%",
      height: 40,
      color: "#fff",
      backgroundColor: "#003566",
      border: "none",
      borderRadius: 5,
      marginTop: 20,
    },
  },
}));

export default useLoginFormStyle;
