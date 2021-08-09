import {StyleSheet} from "react-native";


export default StyleSheet.create({
  Card: {
    height: 250,
    width: "100%",
    backgroundColor: "#D5D0D0",
    borderRadius: 10,
    marginBottom: 10
  },
  Header: {
    paddingHorizontal: 8,
    //backgroundColor: "green",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "gray",
    borderBottomWidth: 1
  },
  AvatarContainer: {
    width: 40,
    height: 40,
    backgroundColor: "red",
    padding: 2,
    borderRadius: 40
  },
  Body: {
    //backgroundColor:"yellow",
    flex: 3
  },
  DescriptionContainer: {
    padding: 8,
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 24,
    //letterSpacing: 32
  },
  Footer: {
    //backgroundColor:"blue",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    borderColor: "gray",
    borderTopWidth: 1
  }
});
