import React from "react";
import {
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Linking,
  Platform
} from "react-native";
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import SwipeablePanel from "rn-swipeable-panel";
import {
  Button,
  Icon,
  ListItem,
  Right,
  Body,
  Content
} from "native-base";
import Carousel from "react-native-anchor-carousel";
import { styles } from "./product-desc-style";
import { Asset } from "expo-asset";

const imageURI = Asset.fromModule(require("../../assets/background.jpg"));
const { width } = Dimensions.get("window");
let data = [
  {
    uri: "https://i.imgur.com/GImvG4q.jpg",
    title: "Base Guitar",
    content: "Best Guitar With 1 Year Old"
  },
  {
    uri: "https://i.imgur.com/Pz2WYAc.jpg",
    title: "Lorem ipsum ",
    content: "Neque porro quisquam est qui dolorem ipsum "
  },
  {
    uri: "https://i.imgur.com/IGRuEAa.jpg",
    title: "Lorem ipsum dolor",
    content:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
  },
  {
    uri: "https://i.imgur.com/fRGHItn.jpg",
    title: "Lorem ipsum dolor",
    content: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet"
  },
  {
    uri: "https://i.imgur.com/WmenvXr.jpg",
    title: "Lorem ipsum ",
    content: "Neque porro quisquam est qui dolorem ipsum quia dolor "
  }
];

const moreInfo = 
  {
    "Product Name" : "Base Guitar",
    "Purchase Date": "22-09-19",
      Name:"Anil Kumar",
      Phone:"+919839284651",
    Area:"Kormangla",
    Security:"5000"
  }


interface props {}
interface state {
  swipeablePanelActive: boolean;
  location: any;
  errorMessage: string;
}
class ProductDescription extends React.Component<props, state> {
  numberCarousel: any;

  constructor(props) {
    super(props);
    this.state = {
      swipeablePanelActive: false,
      location: null,
      errorMessage: null,
    };
  }
  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    let {latitude,longitude} = location.coords;
    console.log(latitude.toString()+longitude.toString());
    this.setState({ location: `${latitude.toString()}+${longitude.toString()}`  });
  };

  componentDidMount = () => {
    // this.openPanel();
  };

  openPanel = () => {
    this.setState({ swipeablePanelActive: true });
  };

  closePanel = () => {
    this.setState({ swipeablePanelActive: false });
  };
  _moreInfo = () => {
    this.setState({
      swipeablePanelActive: true
    });
  };

  renderItem = ({ item, index }) => {
    const { uri, title, content } = item;
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.item}
        onPress={() => {
          this.numberCarousel.scrollToIndex(index);
        }}
      >
        <ImageBackground
          source={{ uri: uri }}
          style={styles.imageBackground}
          loadingIndicatorSource={imageURI}
        >
          <View style={styles.rightTextContainer}>
            <Text style={styles.rightText}>Lorem</Text>
          </View>
        </ImageBackground>
        <View style={styles.lowerContainer}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.contentText}>{content}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ width: Dimensions.get("screen").width / 2 }}>
            <Button onPress={() => this._moreInfo()} block success>
              <Text style={styles.rentButton}>Info</Text>
            </Button>
          </View>
          <View style={{ width: Dimensions.get("screen").width / 2 }}>
            <Button block dark>
              <Text style={styles.rentButton}>Rent</Text>
            </Button>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  render() {

    let iOSNavigation = `maps://app?saddr=${this.state.location} &daddr=12.8440+77.6739`;
    let androidNavigation = `google.navigation:q=12.8440+77.6739`;
    return (
      <>
        <Carousel
          style={styles.carousel}
          data={data}
          renderItem={this.renderItem}
          itemWidth={width}
          inActiveOpacity={0.3}
          containerWidth={width - 0.1}
          ref={c => {
            this.numberCarousel = c;
          }}
        />
        <SwipeablePanel
          fullWidth
          isActive={this.state.swipeablePanelActive}
          onClose={this.closePanel}
          onPressCloseButton={this.closePanel}
        >
          <Content>
            {Object.entries(moreInfo).map(([key,v])=>{
             return <ListItem icon>
              
              <Body>
                <Text>{key}</Text>
              </Body>
              <Right>
                <Text> {v} </Text>
               {key == 'Area' &&  <Icon active name="navigate" onPress={() => Linking.openURL(Platform.OS === "ios" ? iOSNavigation : androidNavigation)} />}
               {key == 'Phone' &&  <Icon active name="navigate" onPress={() => Linking.openURL(`tel:${v}`)} />}
              </Right>
            </ListItem>
            })}
           
            
          </Content>
        </SwipeablePanel>
      </>
    );
  }
}

export default ProductDescription;

{
  /**
<View >

        
               
                 <SwipeablePanel
                    fullWidth
                    isActive={this.state.swipeablePanelActive}
                    onClose={this.closePanel}
                    onPressCloseButton={this.closePanel}
                >
					<Text>Hello</Text> 
				</SwipeablePanel> 
            </View>
        </>

*/
}




// maps://app?saddr=${this.state.location}&daddr=12.8440+77.6739  => for iOS

// google.navigation:q=12.8440+77.6739 ==> For Google