import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  Platform,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import MenuIcon from './MenuIcon';

const DATA = [
  {
    id: 'eeb15ad65ca74dbba84fbe26390f2e40',
    title:
      'เมนูอาหารเช้าสุดฟิน “7 วัน 7 เมนูขนมปัง” อิ่มท้องง่าย ๆ ภายใน 5 นาที!',
    thumbnail:
      'https://img.wongnai.com/p/400x0/2019/05/07/eeb15ad65ca74dbba84fbe26390f2e40.jpg',
    body:
      'ในยุคที่ใคร ๆ ก็เล่น Social แบบนี้ ทำอะไรออกมาหน้าตาดีก็ขออัพกันหน่อย! Wongnai ขอเสนอเมนูอาหารเช้า “7 วัน 7 เมนูขนมปัง” ทำง่าย ฟินได้เพียงแค่ 5 นาที ด้วยวัตถุดิบที่หาได้ในครัว หรือซูเปอร์มาเก็ตทั่วไป เหมาะสำหรับวัยทำงานที่มีเวลาอันน้อยนิด แต่คิดจะทำมื้อเช้ากินแบบเก๋ ๆ ใช้เวลาน้อย แต่ได้อาหารหน้าตาสวยระดับพรีเมียม อวดเพื่อนได้ ตอบโจทย์สุด ๆ สำหรับคนยุคนี้ ถ้าพร้อมแล้วไปดูกันเลยดีกว่า ว่ามีเมนูอะไร หน้าตาเป็นแบบไหนกันบ้าง!',
  },
  {
    id: 'f11a6abd34514be28258f71ba85b3696',
    title: 'รีวิวเครปป้าเฉื่อย 10 เมนูคาวหวาน ไม่พลาดทั้งเมนูลับและเมนูฮิต!',
    thumbnail:
      'https://img.wongnai.com/p/400x0/2019/03/10/f11a6abd34514be28258f71ba85b3696.jpg',
    body:
      'ถือคติว่ากินทั้งทีต้องเอาให้อิ่ม สั่งทั้งทีต้องเอาให้คุ้มซะอย่าง! บอกเลยว่าเรื่องกินไม่ใช่เรื่องเล่น ๆ เพราะฉะนั้น วันนี้! ขอเสนอตอน~ ติวเข้มล้วงลับไส้ทะลัก สั่งกันแบบไม่มีพักกับ “ร้านเครปป้าเฉื่อย” สาขา สยามสแควร์วัน อันเลื่องชื่อ อื่อ อื่อ อื่อ (อย่าลืมเพิ่มเสียงเอคโค่เพื่อความน่าตื่นเต้น!)',
  },
  {
    id: '8e153b6d572e4bfa875d080ef8f2c2a5',
    title: 'แจกสูตร 5 เมนูสุขภาพจากผักตามฤดูกาล ประโยชน์มากมาย อิ่มกายสบายพุง!',
    thumbnail:
      'https://img.wongnai.com/p/400x0/2019/03/27/8e153b6d572e4bfa875d080ef8f2c2a5.jpg',
    body:
      'รู้ไหมว่าในแต่ละฤดูนั้นมีผักที่ขึ้น และเจริญเติบโตแตกต่างกัน หากไม่ใช่ตามฤดูกาลของมัน ต้นอาจจะยังโตได้ไม่เต็มที่ดีนัก เราจึงต้องระวังการกินผักนอกฤดูกาลเพราะอาจจะเสี่ยงกับสารเคมีที่ใช้เร่งการเจริญเติบโต หรือให้ทนช่วงฤดูที่ผักไม่สามารถเติบโตได้ ดังนั้นการเลือกผักที่เติบโตตามฤดูกาลย่อมดีกว่า โดยวันนี้ใจดีแจกให้ถึง 5 สูตร เมนูอาหารเพื่อสุขภาพจากผักตามฤดูกาล ที่สำคัญใช้งบน้อย อิ่มท้อง แถมยังไม่ต้องกังวลเรื่องสุขภาพอีกด้วย',
  },
  {
    id: '93ae0d1678c64ce98d3cf0971c9af8d8',
    title: 'แจกสูตร 5 เมนูสุขภาพสำหรับหนุ่มสาวออฟฟิศ เวลาน้อยนิดก็ทำได้',
    thumbnail:
      'https://img.wongnai.com/p/400x0/2019/08/09/93ae0d1678c64ce98d3cf0971c9af8d8.jpg',
    body:
      '“5 เมนูสุขภาพสำหรับหนุ่มสาวออฟฟิศ” ด้วยเมนูง่าย ๆ ประหยัดเวลา แต่อุดมไปด้วยคุณค่าทางสารอาหารแบบจัดเต็ม เพราะเราเล็งเห็นว่าปัญหาสุขภาพของคนวัยทำงานไม่ใช่เรื่องเล่น ๆ โดยเฉพาะพนักงานออฟฟิศที่ทำแต่งานจนอาจไม่มีเวลามากพอดูแลตัวเองให้ครบถ้วนในแต่ละวัน ไม่ว่าจะเป็นโรคอ้วน เหน็บชา สายตาไม่ดี หรืออาหารไม่ย่อย ไม่ใช่หมอดู รู้ได้อย่างไร? จริง ๆ แล้วเจอกับตัวค่ะ ซึ่งสิ่งเหล่านี้เป็นปัญหาที่เรามองข้าม เอาล่ะ! มาเริ่มต้นดูแลตัวเองกันใหม่แบบจริงจังดีกว่า พร้อมแล้วก็ไปกันเลยจ้า!',
  },
];

export default class HomeScreen extends Component {
  _renderItem({item, index}) {
    return (
      <View
        key={index}
        style={{
          flex: 1,
          margin: 5,
          backgroundColor: '#eee',
          borderRadius: 10,
          width: 250,
          height: 200,
        }}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('View', {item: item})}>
          <Image
            source={{uri: item.thumbnail}}
            style={{
              height: 140,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          />
          <Text numberOfLines={2} style={{padding: 10}}>
            {item.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          marginTop: Platform.OS == 'ios' ? 45 : 0,
        }}>
        <View>
          <Image
            source={require('./images/react-native.jpg')}
            style={{width: '100%', height: 120}}
          />
        </View>

        <View
          style={{
            backgroundColor: '#fff',
            height: 90,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 15,
          }}>
          <MenuIcon
            iconName="ios-cube"
            iconColor="#f006"
            iconMenu="ร้านอาหาร"
            onPress={() =>
              this.props.navigation.navigate('Detail', {page: 'restaurant', title: 'ร้านอาหาร'})
            }
          />
          <MenuIcon
            iconName="ios-cafe"
            iconColor="#00f6"
            iconMenu="ร้านกาแฟ"
            onPress={() => this.props.navigation.navigate('Detail')}
          />
          <MenuIcon
            iconName="ios-camera"
            iconColor="#0006"
            iconMenu="ที่เที่ยว"
            onPress={() => this.props.navigation.navigate('Detail')}
          />
          <MenuIcon
            iconName="ios-happy"
            iconColor="#e79"
            iconMenu="บิวตี้"
            onPress={() => this.props.navigation.navigate('Detail')}
          />
        </View>

        <View style={{flex: 4, marginLeft: 5, marginRight: 5}}>
          <Text style={{fontSize: 22, fontWeight: 'bold', marginLeft: 5}}>
            Recommended Items
          </Text>

          <FlatList
            data={DATA}
            renderItem={object => this._renderItem(object)}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        </View>
      </View>
    );
  }
}
