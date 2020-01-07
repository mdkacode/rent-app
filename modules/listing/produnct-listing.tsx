import React from 'react';
import {View,Image,ScrollView,BackHandler, ToastAndroid, TouchableHighlight,Text} from 'react-native';
import { Container, Header, Content, List, ListItem,Card,Item, CardItem, Button,Icon } from 'native-base';
import  Carousel from "react-native-carousel";
import {style} from './product-style';
const dummyData = [
    {
        id:1,
        bigImageUrl :'https://i.ytimg.com/vi/Zn6C14pE4mg/maxresdefault.jpg',
        title:'Base Guitar',
        desc:'Kormangla',
        price:'100',
        distance:'2 KM',
        phoneNum:'+91 9936142128',
        imageStack:['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwGPOapc7XOPKOdbKcyt5m0ENMTdlO8XwgONaxRLLHcIXNZNan&s',
        'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjyw5r9mM7mAhWLfH0KHZSPCkIQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.snapdeal.com%2Fproduct%2Ftoys-factory-rock-band-music%2F631295860857&psig=AOvVaw1gkvuxxnvxJ2t1idYlFCWT&ust=1577273772941349',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1rO35dO5bK3rxMriig_YfeLw70xLuRoD5YNpEjuaSMtK_N7aaJQ&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV5PFnSlHSKyI6xZ47-eGIY_oypKyFTjwn01St4mgM8QBo12ai_w&s','https://www.musicstores.in/2636-large_default/kepma-a1c-acoustic-guitar.jpg']
    },
    {
        id:2,
        bigImageUrl :'https://i.ytimg.com/vi/Zn6C14pE4mg/maxresdefault.jpg',
        title:'Base Guitar',
        desc:'HSR layout',
        price:'300',
        distance:'2 KM',
        phoneNum:'+91 9936142128',
        imageStack:['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwGPOapc7XOPKOdbKcyt5m0ENMTdlO8XwgONaxRLLHcIXNZNan&s',
        'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjyw5r9mM7mAhWLfH0KHZSPCkIQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.snapdeal.com%2Fproduct%2Ftoys-factory-rock-band-music%2F631295860857&psig=AOvVaw1gkvuxxnvxJ2t1idYlFCWT&ust=1577273772941349',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1rO35dO5bK3rxMriig_YfeLw70xLuRoD5YNpEjuaSMtK_N7aaJQ&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV5PFnSlHSKyI6xZ47-eGIY_oypKyFTjwn01St4mgM8QBo12ai_w&s','https://www.musicstores.in/2636-large_default/kepma-a1c-acoustic-guitar.jpg']
    },
    {
        id:3,
        bigImageUrl :'https://i.ytimg.com/vi/Zn6C14pE4mg/maxresdefault.jpg',
        title:'Base Guitar',
        desc:'Electronic City',
        price:'400',
        distance:'2 KM',
        phoneNum:'+91 9936142128',
        imageStack:['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwGPOapc7XOPKOdbKcyt5m0ENMTdlO8XwgONaxRLLHcIXNZNan&s',
        'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjyw5r9mM7mAhWLfH0KHZSPCkIQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.snapdeal.com%2Fproduct%2Ftoys-factory-rock-band-music%2F631295860857&psig=AOvVaw1gkvuxxnvxJ2t1idYlFCWT&ust=1577273772941349',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1rO35dO5bK3rxMriig_YfeLw70xLuRoD5YNpEjuaSMtK_N7aaJQ&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV5PFnSlHSKyI6xZ47-eGIY_oypKyFTjwn01St4mgM8QBo12ai_w&s','https://www.musicstores.in/2636-large_default/kepma-a1c-acoustic-guitar.jpg']
    },{
        id:3,
        bigImageUrl :'https://i.ytimg.com/vi/Zn6C14pE4mg/maxresdefault.jpg',
        title:'Vocal Guitar',
        desc:'BTM Layout',
        price:'500',
        distance:'2 KM',
        phoneNum:'+91 9936142128',
        imageStack:['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwGPOapc7XOPKOdbKcyt5m0ENMTdlO8XwgONaxRLLHcIXNZNan&s',
        'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjyw5r9mM7mAhWLfH0KHZSPCkIQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.snapdeal.com%2Fproduct%2Ftoys-factory-rock-band-music%2F631295860857&psig=AOvVaw1gkvuxxnvxJ2t1idYlFCWT&ust=1577273772941349',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1rO35dO5bK3rxMriig_YfeLw70xLuRoD5YNpEjuaSMtK_N7aaJQ&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV5PFnSlHSKyI6xZ47-eGIY_oypKyFTjwn01St4mgM8QBo12ai_w&s','https://www.musicstores.in/2636-large_default/kepma-a1c-acoustic-guitar.jpg']
    },{
        id:3,
        bigImageUrl :'https://i.ytimg.com/vi/Zn6C14pE4mg/maxresdefault.jpg',
        title:'Fine Guitar',
        desc:'MG Road',
        price:'600',
        distance:'2 KM',
        phoneNum:'+91 9936142128',
        imageStack:['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwGPOapc7XOPKOdbKcyt5m0ENMTdlO8XwgONaxRLLHcIXNZNan&s',
        'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjyw5r9mM7mAhWLfH0KHZSPCkIQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.snapdeal.com%2Fproduct%2Ftoys-factory-rock-band-music%2F631295860857&psig=AOvVaw1gkvuxxnvxJ2t1idYlFCWT&ust=1577273772941349',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1rO35dO5bK3rxMriig_YfeLw70xLuRoD5YNpEjuaSMtK_N7aaJQ&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV5PFnSlHSKyI6xZ47-eGIY_oypKyFTjwn01St4mgM8QBo12ai_w&s','https://www.musicstores.in/2636-large_default/kepma-a1c-acoustic-guitar.jpg']
    }
]

interface props{
    navigation:any,
    history:any
}
interface state{
   login:false
}
class ProductListing extends React.Component<props,state> {


    constructor(props:any){
        super(props);
    }

componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
}

handleBackButton() {
    ToastAndroid.show('Back button is pressed', ToastAndroid.SHORT);
    return true;
}

_onPressButton(props){
    console.log('GET PUSHED');
console.log(props)
    props.navigation.navigate('ProductDescription');
    const {setParams} = this.props.navigation;
    setParams({ title: 'Anrag' })
}

    render(){

        let _this = this;
        return(
            <ScrollView>
            <View>
            <List>
                {dummyData.map((e,id)=>{
                    return <ListItem >
                        <TouchableHighlight style={{width:'100%'}} onPress={() => this._onPressButton(_this.props)} underlayColor="white">
                    <Card  style={{width:'100%'}}>
                        <CardItem>
                        <View style={{ flexDirection: 'row'}}>
                        <View style={{width: 90, height: 90,paddingLeft:0,marginRight:10}} >
                        <Image style={{width: 90, height: 90}} borderRadius={50} source={{uri: e.bigImageUrl}}/>
                        </View>
                        <View>
                        <Text key={id} style={style.productName}> {e.title}</Text>
                        <Button key={id} onPress={() => this._onPressButton(_this.props)}  small style={{width:210,height:50,backgroundColor:"#000"}}><Text style={{color:"#fff",paddingLeft:15}}>Rent @ ₹{e.price} / M</Text></Button>
                        <Item  key={id} style={{borderColor:"#ffffff00"}}>
                        <Icon key={id} name="paw"  style={style.icon}/>
                        <Text key={id} >{e.distance } away </Text>
                        </Item>
                        <Item  key={id} style={{borderColor:"#ffffff00"}}>
                        
                        <Icon key={id} name="navigate"  color="#000"  style={style.icon}/>
                        <Text key={id} style={style.location}>{e.desc } </Text>
                        </Item>
                        
                        
                        </View>
                        </View> 
                        </CardItem>
                        
                    </Card>
                    </TouchableHighlight>
                  </ListItem>
                })}
            
            
            
          </List>
            </View>
            </ScrollView>
        )
    }
}



export default ProductListing;