import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: height / 6,
    margin: 10,
    padding: 20,
    borderRadius: 5,
    backgroundColor: 'rgb(222, 233, 233)',
  },
  containerTouchable: {
    // justifyContent: "center",
    // padding: 5
  },
  boxContent: {
    // backgroundColor: 'red',
  },
  boxDelete: {
    // backgroundColor: 'red',
    // width: 20,
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 19,
  }
});


export default styles;