import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
const HomeScreen = () => {
  const data = [
    {
      id: 1,
      text: "Long Sleeve Shirts",
      price: "165$",
      image: require("../assets/LongSleeveShirts.jpg"),
    },
    {
      id: 2,
      text: "Casual Henley Shirts",
      price: "275$",
      image: require("../assets/CasualHenleyShirts.jpg"),
    },
    {
      id: 3,
      text: "Casual Henley Shirts",
      price: "275$",
      image: require("../assets/CasualHenleyShirts.jpg"),
    },
    {
      id: 4,
      text: "Casual Henley Shirts",
      price: "275$",
      image: require("../assets/CasualHenleyShirts.jpg"),
    },
  ];
  const [selectedButton, setSelectedButton] = useState(0);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.itemImage} />
      </View>
      <View style={styles.PicWord}>
        <View style={styles.PicText}>
          <Text style={styles.Texas}>{item.text}</Text>
        </View>
        <View style={styles.PicPrice}>
          <Text style={styles.Bold}>{item.price}</Text>
        </View>
      </View>
    </View>
  );
  const renderBottomBarButton = (iconName, index) => (
    <TouchableOpacity
      key={index}
      style={[
        styles.bottomBarButton,
        selectedButton === index && styles.selectedButton,
      ]}
      onPress={() => setSelectedButton(index)}
    >
      <Icon
        name={iconName}
        size={30}
        color={selectedButton === index ? "#F67952" : "grey"}
      />
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <View style={styles.Header1}>
          <View style={styles.Location}>
            <Image source={require("../assets/Drawer.jpg")} />
          </View>
          <View style={styles.Location}>
            <Icon name="map-marker" size={20} />
            <Text style={styles.Texas}>15/2 New Texas</Text>
          </View>
          <View style={styles.Location}>
            <Image source={require("../assets/Notifications.jpg")} />
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.Heading}>
          <Text style={styles.Explore}>Explore</Text>
          <Text style={styles.HeadText}>best Outfits for you</Text>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.inputWrapper}>
          <Icon name="search" size={20} color="lightgrey" style={styles.icon} />

          <TextInput
            style={styles.input}
            placeholder="Search items..."
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <View style={styles.iconBox}>
            <TouchableOpacity>
              <Icon
                name="exchange"
                size={20}
                color="#Fff"
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.ItemContainer}>
          <TouchableOpacity>
            <View style={styles.ItemBox}>
              <Image source={require("../assets/Dress.jpg")} />
              <Text style={styles.ItemText}>Dress</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.ItemBox}>
              <Image source={require("../assets/Shirt.jpg")} />
              <Text style={styles.ItemText}>Shirt</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.ItemBox}>
              <Image source={require("../assets/Pants.jpg")} />
              <Text style={styles.ItemText}>Pants</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.ItemBox}>
              <Image source={require("../assets/Tshirt.jpg")} />
              <Text style={styles.ItemText}>Tshirt</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.lineContainer}>
          <Text style={styles.NewArrival}>New Arrival</Text>
          <TouchableOpacity>
            <Text style={styles.SeeAll}> See All</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.section}>
        <FlatList
          horizontal
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
        />
      </View>
      <View style={styles.bottomBar}>
        {renderBottomBarButton("home", 0)}
        {renderBottomBarButton("shopping-cart", 1)}
        {renderBottomBarButton("heart", 2)}
        {renderBottomBarButton("user", 3)}
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    backgroundColor: "#FBFBFD",
    flex: 1,
  },
  section: {
    marginBottom: 20,
    padding: 10,
  },
  Bold: {
    fontFamily: "gordita-bold",
  },
  Header1: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignContent: "flex-start",
    justifyContent: "space-between",
    marginTop: 20,
  },
  Location: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  Heading: {
    width: "100%",
    alignItems: "flex-start",
    gap: 20,
  },
  Explore: {
    fontSize: 36,
    fontFamily: "gordita-bold",
  },
  HeadText: {
    fontSize: 20,
    color: "lightgrey",
    fontFamily: "gordita",
  },
  Texas: {
    fontFamily: "gordita",
  },
  inputWrapper: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "white",
  },
  input: {
    flex: 1,
    padding: 10,
    fontFamily: "gordita",
    height: 60,
  },

  icon: {
    alignSelf: "center",
    padding: 10,
  },
  iconBox: {
    backgroundColor: "#F67952",
    width: 48,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  ItemContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  ItemBox: {
    borderWidth: 1,
    borderColor: "lightgrey",
    width: 71,
    height: 75,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    gap: 4,
  },
  ItemText: {
    color: "lightgrey",
    fontFamily: "gordita",
  },
  lineContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  NewArrival: {
    fontFamily: "gordita-bold",
    fontSize: 36,
  },
  SeeAll: {
    fontSize: 20,
    color: "lightgrey",
    fontFamily: "gordita",
  },
  scrollViewContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemContainer: {
    width: 142,
    height: 190,
    borderRadius: 15,
    margin: 5,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#FFFFFF",
  },
  imageContainer: {
    width: 132,
    height: 130,
    borderRadius: 15,
    overflow: "hidden",
    alignItems: "center",
    backgroundColor: "#EFEFF2",
  },
  PicWord: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    gap: 30,
    padding: 4,
  },
  PicText: {
    width: "60%",
  },
  PicPrice: {
    width: "60%",
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",
    width: 365,
    height: 75,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    position: "absolute",
    bottom: 0,
    left: 10,
  },
  bottomBarButton: {
    flex: 1,
    alignItems: "center",
  },
  bottomButtonText: {
    fontFamily: "gordita",
    fontSize: 14,
    color: "grey",
  },

  selectedButtonText: {
    color: "#F67952",
  },
});
