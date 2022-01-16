import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Label, { Orientation } from 'react-native-label';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Fa from 'react-native-vector-icons/FontAwesome';
import Contents from './src/Components/Screens/ContentsScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Pressable,
} from 'react-native';
import Modal from 'react-native-modal';

const ContentStack = createNativeStackNavigator();
const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableHighlight
        activeOpacity={0.8}
        underlayColor="rgb(250, 250, 250)"
        style={{ borderRadius: 15 }}
        onPress={() => alert('Pressed!')}>
        <View>
          <Icon style={styles.user} name="user" />
        </View>
      </TouchableHighlight>
    </View>
  );
};

function fH5() {
  return require('./src/Assets/Images/Games/forza_horizon_5.png');
}
function sekiroSdT() {
  return require('./src/Assets/Images/Games/sekiro.jpg');
}
function dMc5() {
  return require('./src/Assets/Images/Games/dmc5.jpg');
}
function farC5() {
  return require('./src/Assets/Images/Games/farcry5.jpg');
}
function nierAutomata() {
  return require('./src/Assets/Images/Games/nier_automata.jpg');
}
function venomLetTBC() {
  return require('./src/Assets/Images/Movies/venom.png');
}
function blackWidow() {
  return require('./src/Assets/Images/Movies/black_widow.jpg');
}
function dunE() {
  return require('./src/Assets/Images/Movies/dune.jpg');
}
function jokeR() {
  return require('./src/Assets/Images/Movies/joker.jpg');
}
function godZilla() {
  return require('./src/Assets/Images/Movies/godzilla.jpg');
}
function johnWick() {
  return require('./src/Assets/Images/Movies/john_wick.jpg');
}
function jurassicP() {
  return require('./src/Assets/Images/Movies/jurassic_park.jpg');
}
function LordOfTR() {
  return require('./src/Assets/Images/Movies/lord_of_the_rings.jpg');
}
function pikachuTM() {
  return require('./src/Assets/Images/Movies/pikachu_the_movie.jpg');
}
function starWars() {
  return require('./src/Assets/Images/Movies/starwars.jpg');
}
function theLionK() {
  return require('./src/Assets/Images/Movies/the_lion_king.jpg');
}
function theWolverine() {
  return require('./src/Assets/Images/Movies/the_wolverine.jpg');
}

function Home({ navigation }) {
  const langLogo = whatLogo => {
    if (whatLogo == 'indonesia') {
      return require('./src/Assets/Images/flags/indonesia_100.png');
    }
    if (whatLogo == 'russia') {
      return require('./src/Assets/Images/flags/russia_100.png');
    }
  };
  const langList = [
    {
      Heading: 'список языков программирования',
      popUpHeading: 'Выберите ваш язык',
      currentLang: 'Текущий язык: Язык Russia',
      gameLabel: 'Игры',
      moviesLabel: 'фильм',
      recomLabel: 'Рекомендация',
      allContsLabel: 'Весь контент',
      age: 'лет',
      address: 'Адрес: Восточный Геренен, Восточная Сакра',
      langName: 'Язык',
      screensDatas: {
        gamesList: [
          { Title: 'Форза Горизонт 5', Reviews: 5.6, Rating: '8+', Img: fH5() },
          {
            Title: 'Sekiro Shadows Die Twice',
            Reviews: 7.4,
            Rating: '15+',
            Img: sekiroSdT(),
          },
          {
            Title: 'Дьявол может плакать 5',
            Reviews: 8.4,
            Rating: '18+',
            Img: dMc5(),
          },
          {
            Title: 'Нир Автоматы',
            Reviews: 7.3,
            Rating: '18+',
            Img: nierAutomata(),
          },
          {
            Title: 'Фар Край 5',
            Reviews: 7.7,
            Rating: '14+',
            Img: farC5(),
          },
        ],
        moviesList: [
          {
            Title: 'Веном да будет бойня',
            Reviews: 7.8,
            Rating: '17+',
            Released: '2018',
            Img: venomLetTBC(),
          },
          {
            Title: 'Черная вдова',
            Reviews: 7.7,
            Rating: '14+',
            Released: '2021',
            Img: blackWidow(),
          },
          {
            Title: 'Дюна',
            Reviews: 6.8,
            Rating: '15+',
            Released: '2021',
            Img: dunE(),
          },
          {
            Title: 'Джокер',
            Reviews: 8.8,
            Rating: '15+',
            Released: '2020',
            Img: jokeR(),
          },
          {
            Title: 'Годзилла',
            Reviews: 7.8,
            Rating: '12+',
            Released: '2020',
            Img: godZilla(),
          },
          {
            Title: 'Джон Уик',
            Reviews: 9.8,
            Rating: '17+',
            Released: '2017',
            Img: johnWick(),
          },
          {
            Title: 'парк Юрского периода',
            Reviews: 6.8,
            Rating: '13+',
            Released: '2016',
            Img: jurassicP(),
          },
          {
            Title: 'Властелин колец',
            Reviews: 7.9,
            Rating: '13+',
            Released: '2007',
            Img: LordOfTR(),
          },
          {
            Title: 'Пикачу Фильм',
            Reviews: 5.8,
            Rating: '12+',
            Released: '2019',
            Img: pikachuTM(),
          },
          {
            Title: 'Звездные войны',
            Reviews: 6.8,
            Rating: '13+',
            Released: '2019',
            Img: starWars(),
          },
          {
            Title: 'Король Лев',
            Reviews: 8.9,
            Rating: '12+',
            Released: '2019',
            Img: theLionK(),
          },
          {
            Title: 'Росомаха',
            Reviews: 7.6,
            Rating: '17+',
            Released: '2006',
            Img: theWolverine(),
          },
        ],
      },
      moviesHeadings: ['Отзывы', 'Рейтинг'],
      recHeadingsGorM: ['ИГРАТЬ В', 'СМОТРЕТЬ'],
      sectionHeadings: ['Список фильмов', 'Список игр'],
      langLogo: langLogo('russia'),
    },
    {
      popUpHeading: 'Pilih Bahasa Anda',
      currentLang: 'Bahasa saat ini: Bahasa Indonesia',
      gameLabel: 'Permainan',
      moviesLabel: 'Film',
      recomLabel: 'Rekomendasi',
      allContsLabel: 'Semua Konten',
      age: 'Tahun',
      address: 'Alamat: Gereneng Timur,Sakra Timur',
      langName: 'Bahasa',
      screensDatas: {
        gamesList: [
          { Title: 'Forza Horizon 5', Reviews: 5.6, Rating: '8+', Img: fH5() },
          {
            Title: 'Sekiro Shadows Die Twice',
            Reviews: 7.4,
            Rating: '15+',
            Img: sekiroSdT(),
          },
          {
            Title: 'Devil May Cry 5',
            Reviews: 8.4,
            Rating: '18+',
            Img: dMc5(),
          },
          {
            Title: 'Nier Automata',
            Reviews: 7.3,
            Rating: '18+',
            Img: nierAutomata(),
          },
          {
            Title: 'Far Cry 5',
            Reviews: 7.7,
            Rating: '14+',
            Img: farC5(),
          },
        ],
        moviesList: [
          {
            Title: 'Venom let There be Carnage',
            Reviews: 7.8,
            Rating: '17+',
            Released: '2018',
            Img: venomLetTBC(),
          },
          {
            Title: 'Black Widow',
            Reviews: 7.7,
            Rating: '14+',
            Released: '2021',
            Img: blackWidow(),
          },
          {
            Title: 'Dune',
            Reviews: 6.8,
            Rating: '15+',
            Released: '2021',
            Img: dunE(),
          },
          {
            Title: 'Joker',
            Reviews: 8.8,
            Rating: '15+',
            Released: '2020',
            Img: jokeR(),
          },
          {
            Title: 'Godzilla',
            Reviews: 7.8,
            Rating: '12+',
            Released: '2020',
            Img: godZilla(),
          },
          {
            Title: 'John Wick',
            Reviews: 9.8,
            Rating: '17+',
            Released: '2017',
            Img: johnWick(),
          },
          {
            Title: 'Jurassic Park',
            Reviews: 6.8,
            Rating: '13+',
            Released: '2016',
            Img: jurassicP(),
          },
          {
            Title: 'Lord Of The Rings',
            Reviews: 7.9,
            Rating: '13+',
            Released: '2007',
            Img: LordOfTR(),
          },
          {
            Title: 'Pikachu The Movie',
            Reviews: 5.8,
            Rating: '12+',
            Released: '2019',
            Img: pikachuTM(),
          },
          {
            Title: 'Star Wars',
            Reviews: 6.8,
            Rating: '13+',
            Released: '2019',
            Img: starWars(),
          },
          {
            Title: 'The Lion King',
            Reviews: 8.9,
            Rating: '12+',
            Released: '2019',
            Img: theLionK(),
          },
          {
            Title: 'The Wolverine',
            Reviews: 7.6,
            Rating: '17+',
            Released: '2006',
            Img: theWolverine(),
          },
        ],
      },
      moviesHeadings: ['Reviews', 'Rating'],
      recHeadingsGorM: ['MAINKAN', 'TONTON'],
      sectionHeadings: ['Daftar Film', 'Daftar Permainan'],
      langLogo: langLogo('indonesia'),
    },
  ];
  const [changLang, setChangLang] = useState(langList[1]);
  const [modalVisible, setModalVisible] = useState(false);
  const closePopup = () => setModalVisible(false);
  const GetPopUp = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        backdropColor="transparent"
        swipeDirection="down"
        swipeThreshold={300}
        onSwipeComplete={closePopup}
        visible={modalVisible}
        onRequestClose={() => {
          closePopup();
        }}>
        <View style={styles.popUp}>
          <View style={styles.popUpHeadingCont}>
            <Text style={styles.popUpHeading}>{changLang.popUpHeading}</Text>
            <Text style={{}}>{changLang.currentLang}</Text>
          </View>
          <View style={styles.LanguagesList}>
            <Pressable
              onPress={() => [setChangLang(langList[0]), closePopup()]}>
              <View style={styles.langNameCont}>
                <View style={styles.sLangContainer2}>
                  <Image
                    style={{ width: 50, resizeMode: 'center' }}
                    source={require('./src/Assets/Images/flags/russia_100.png')}
                  />
                </View>
                <Text style={styles.langName}>{changLang.langName} Russia</Text>
              </View>
            </Pressable>
            <Pressable
              onPress={() => [setChangLang(langList[1]), closePopup()]}>
              <View style={styles.langNameCont}>
                <View style={styles.sLangContainer2}>
                  <Image
                    style={{ width: 50, resizeMode: 'center' }}
                    source={require('./src/Assets/Images/flags/indonesia_100.png')}
                  />
                </View>
                <Text style={styles.langName}>
                  {changLang.langName} Indonesia
                </Text>
              </View>
            </Pressable>
          </View>
          <Pressable style={styles.closePopup} onPress={closePopup}>
            <Image
              style={{ width: '100%', resizeMode: 'center' }}
              source={require('./src/Assets/Images/Icons/x-circle-solid-48.png')}
            />
          </Pressable>
        </View>
      </Modal>
    );
  };
  // console.log(['chang lang: ', changLang]);
  return (
    <View style={styles.rootContainer}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
        }}>
        <View style={styles.main}>
          <TouchableHighlight
            activeOpacity={0.8}
            underlayColor="rgb(250, 250, 250)"
            style={{ borderRadius: 15 }}
            onPress={() =>
              navigation.navigate(
                'Contents',
                {
                  GamesList: changLang.screensDatas.gamesList,
                  DataType: 'GamesList',
                },
                () => getData(),
              )
            }>
            <View style={styles.fitContents}>
              <Label
                orientation={Orientation.BOTTOM_RIGHT}
                containerStyle={{}}
                style={{ fontSize: 20 }}
                title={changLang.gameLabel}
                color="#f77"
                extent={0}
                distance={150}>
                <View style={styles.contentContainer}>
                  <Icon
                    style={styles.gamesIcon}
                    name="sports-esports"
                    size={30}
                  />
                </View>
              </Label>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.8}
            underlayColor="rgb(250, 250, 250)"
            style={{ borderRadius: 15 }}
            onPress={() =>
              navigation.navigate('Contents', {
                MoviesList: changLang.screensDatas.moviesList,
                DataType: 'MoviesList',
                moviesHeadings: changLang.moviesHeadings,
              })
            }>
            <View style={styles.fitContents}>
              <Label
                orientation={Orientation.BOTTOM_RIGHT}
                containerStyle={{}}
                style={{ fontSize: 20 }}
                title={changLang.moviesLabel}
                color="#f77"
                extent={0}
                distance={150}>
                <View style={styles.contentContainer}>
                  <Icon
                    style={styles.gamesIcon}
                    name="local-movies"
                    size={30}
                  />
                </View>
              </Label>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.8}
            underlayColor="rgb(250, 250, 250)"
            style={{ borderRadius: 15 }}
            onPress={() =>
              navigation.navigate('Contents', {
                Recommendation: {
                  recData: changLang.screensDatas,
                  recHeadings: [
                    changLang.moviesHeadings,
                    changLang.recHeadingsGorM,
                  ],
                  randNumb: Math.floor(Math.random() * (11 - 0 + 1) + 0),
                },
                DataType: 'Recommendation',
              })
            }>
            <View style={styles.fitContents}>
              <Label
                orientation={Orientation.BOTTOM_RIGHT}
                containerStyle={{}}
                style={{ fontSize: 20 }}
                title={changLang.recomLabel}
                color="#f77"
                extent={0}
                distance={150}>
                <View style={styles.contentContainer}>
                  <Icon
                    style={styles.gamesIcon}
                    name="local-fire-department"
                    size={30}
                  />
                </View>
              </Label>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.8}
            underlayColor="rgb(250, 250, 250)"
            style={{ borderRadius: 15 }}
            onPress={() =>
              navigation.navigate('Contents', {
                AllContents: changLang,
                DataType: 'AllContents',
              })
            }>
            <View style={styles.fitContents}>
              <Label
                orientation={Orientation.BOTTOM_RIGHT}
                containerStyle={{}}
                style={{ fontSize: 20 }}
                title={changLang.allContsLabel}
                color="#f77"
                extent={0}
                distance={150}>
                <View style={styles.contentContainer}>
                  <Icon style={styles.gamesIcon} name="view-list" size={30} />
                </View>
              </Label>
            </View>
          </TouchableHighlight>
        </View>
      </ScrollView>
      <View style={styles.header}>
        <TouchableHighlight
          activeOpacity={0.8}
          underlayColor="rgb(250, 250, 250)"
          style={{ borderRadius: 15 }}
          onPress={() =>
            navigation.navigate('Contents', {
              DataDiri: changLang,
              DataType: 'DataDiri',
            })
          }>
          <View>
            <Fa style={styles.user} name="user" />
          </View>
        </TouchableHighlight>
      </View>
      <GetPopUp />
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#ffffff"
        style={styles.switchLanguages}
        onPress={() => setModalVisible(true)}>
        <View style={styles.sLangContainer}>
          <Image
            style={{ width: 50, resizeMode: 'center' }}
            source={changLang.langLogo}
          />
        </View>
      </TouchableHighlight>
    </View>
  );
}

const dataDiriSaya = {
  name: '',
};
const storeData = async value => {
  try {
    await AsyncStorage.setItem('name', 'Satria Alipatullah');
    alert('data has been saved');
  } catch (e) {
    // saving error
    alert('data failed to be saved');
  }
};

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('name');
    if (value !== null) {
    }
    console.log(value);
  } catch (e) {
    console.log(e);
    // error reading value
  }
};

const App = () => {
  const [name, setName] = useState('');

  return (
    <NavigationContainer>
      <ContentStack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}>
        <ContentStack.Screen name="Home" component={Home} />
        <ContentStack.Screen name="Contents" component={Contents} />
      </ContentStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
  },
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  rootContainer: {
    height: '100%',
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf: 'center',
    // padding: 20,
  },
  gamesIcon: {
    display: 'flex',
    color: '#FBFFE2',
    fontSize: 150,
    // flexGrow: 1,
    textAlign: 'center',
  },
  contentContainer: {
    display: 'flex',
    // margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFAFAF',
    padding: 10,
    borderRadius: 15,
  },
  fitContents: {
    // margin: 5,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    // backgroundColor: 'red',
    // padding: 50,
    flex: 1,
    width: '100%',
    padding: 10,
    position: 'absolute',
    elevation: 1,
    // borderWidth: 5,
    // borderBottomColor: 'rgba(111,111,999, .2)',
  },
  user: {
    fontSize: 35,
    color: '#FFEBCC',
    backgroundColor: '#f77',
    padding: 10,
    borderRadius: 10,
  },
  switchLanguages: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    height: 31,
    width: 45,
    borderRadius: 5,
  },
  sLangContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  popUp: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    position: 'relative',
  },
  popUpHeadingCont: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  LanguagesList: {
    padding: 20,
  },
  langName: {},
  popUpHeading: {
    fontSize: 20,
  },
  langName: {
    color: '#FF694E',
  },
  langNameCont: {
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 5,
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    padding: 10,
    borderColor: '#ffd3cb',
    backgroundColor: 'rgba(255, 211, 203,.1)',
    marginTop: 5,
  },
  sLangContainer2: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
  },
  closePopup: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#ffd3cb',
    backgroundColor: 'white',
    width: 48,
    height: 48,
    padding: 0,
    position: 'absolute',
    bottom: -10,
    right: -10,
  },
});
