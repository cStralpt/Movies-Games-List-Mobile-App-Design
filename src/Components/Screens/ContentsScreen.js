import * as React from 'react';
import { useState } from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Image,
  SectionList,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import Fa from 'react-native-vector-icons/FontAwesome';
import Ionic from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
function shuFleRecs(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const GorM = shuFleRecs(0, 1);
export default function Contents({ route }) {
  const {
    GamesList,
    MoviesList,
    AllContents,
    moviesHeadings,
    Recommendation,
    DataDiri,
  } = route.params;
  if (route.params.DataType == 'MoviesList') {
    dynamicStylesValue(20);
    // console.log('Movies');
  }
  const [getMoviesHeadings, setMoivesHeadings] = useState(moviesHeadings);
  const RenderGamesList = ({ item }) => (
    <View style={styles.gameItem}>
      <View style={styles.imgContainer}>
        <Image style={styles.gameImg} source={item.Img} />
        <View style={styles.gameRatingCont}>
          <Text style={styles.gameRating}>{item.Rating}</Text>
        </View>
      </View>
      <View style={styles.gameData}>
        <Text style={styles.gTitle}>{item.Title}</Text>
        <View style={styles.gReviewsCont}>
          <View style={styles.gIcon}>
            <Fa style={styles.gReviesIcon} name="star" />
          </View>
          <Text style={styles.gReviews}>{item.Reviews}</Text>
        </View>
      </View>
    </View>
  );
  const [getmovies, setMovies] = useState(MoviesList);
  const RenderMoviesList = ({ item }) => (
    <View style={styles.moviesItem}>
      <View style={styles.fosterContainer}>
        <Image style={styles.foster} source={item.Img} />
      </View>
      <View style={styles.movieItemData}>
        <Text style={styles.mTitle}>{item.Title}</Text>
        <View style={styles.ratRev}>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="whitesmoke"
            onPress={() => {
              const newData = getmovies.filter(items => {
                return items.Released === item.Released;
              });
              setMovies(newData);
            }}>
            <Text style={styles.mReleased}>{item.Released}</Text>
          </TouchableHighlight>
          <View style={styles.ratRevCont}>
            <Text style={styles.mRev}>
              {getMoviesHeadings[0]}: {item.Reviews}
            </Text>
            <Text style={styles.Dot}>.</Text>
            <Text style={styles.mRat}>
              {getMoviesHeadings[1]}: {item.Rating}
            </Text>
          </View>
        </View>
      </View>
      <Ionic style={styles.mPlayBtnIcon} name="play-circle-outline" />
      <View style={[styles.mPlayBtnIcon, styles.playBtnPrettier]} />
    </View>
  );
  const RenderAllContents = ({ item }) => (
    <View>
      <Text
        style={{
          color: '#c4c572',
          backgroundColor: 'rgba(255, 255, 119,.1)',
          margin: 10,
          padding: 20,
          borderRadius: 50,
          borderWidth: 5,
          textAlign: 'center',
          textAlignVertical: 'center',
          fontWeight: 'bold',
          borderColor: '#f77',
          fontSize: 25,
        }}>
        {item.Title}
      </Text>
    </View>
  );
  if (route.params.DataType == 'GamesList') {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.fListG}
          data={GamesList}
          renderItem={RenderGamesList}
        />
      </View>
    );
  } else if (route.params.DataType == 'MoviesList') {
    return (
      <View style={styles.container}>
        <FlatList
          horizontal
          style={styles.fListM}
          data={getmovies}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={true}
          renderItem={RenderMoviesList}
        />
      </View>
    );
  } else if (route.params.DataType == 'Recommendation') {
    const mOrG = [
      Recommendation.recData.gamesList[
        Math.floor(Math.random() * (4 - 0 + 1) + 0)
      ],
      Recommendation.recData.moviesList[
        Math.floor(Math.random() * (11 - 0 + 1) + 0)
      ],
    ];
    // console.log(mOrG);
    const [randomizeMe, setRandomizeMe] = useState(Recommendation.randNumb);
    const [headingRec, setHeadingsRec] = useState(Recommendation.randNumb);
    const [getGorM, setGorM] = useState(mOrG[randomizeMe]);
    const shufleRecNow = () => {
      // let h = 1;
      // while (h < 8) {
      setRandomizeMe(Math.floor(Math.random() * (1 - 0 + 1) + 0));
      setGorM(mOrG[randomizeMe]);
      setHeadingsRec(randomizeMe);
      console.log(randomizeMe);
      //   h++;
      // }
    };
    return (
      <View style={styles.recContainer}>
        <View style={styles.recImgCont}>
          <Image style={styles.recImg} source={getGorM.Img} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.recTitle}>{getGorM.Title}</Text>
          <View style={styles.recRatRevCont}>
            <View style={styles.recRevC}>
              <Text style={styles.recRevRatValue}>{getGorM.Reviews}</Text>
              <Text style={styles.recRatRev}>
                {Recommendation.recHeadings[0][0]}
              </Text>
            </View>
            <View style={[styles.recRatC, styles.recRevC]}>
              <Text style={styles.recRevRatValue}>{getGorM.Rating}</Text>
              <Text style={styles.recRatRev}>
                {Recommendation.recHeadings[0][1]}
              </Text>
            </View>
          </View>
          <View style={styles.recBtnCont}>
            <TouchableOpacity activeOpacity={0.5} style={{ borderRadius: 15 }}>
              <Text style={styles.recBtn}>
                {Recommendation.recHeadings[1][headingRec]}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={shufleRecNow}
          style={{ borderRadius: 15, elevation: 19 }}>
          <Fa
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              backgroundColor: '#ff7',
              padding: 20,
              textAlign: 'center',
              textAlignVertical: 'center',
              // borderRadius: 50,
            }}
            name="random"
            size={30}
          />
        </TouchableOpacity>
      </View>
    );
  } else if (route.params.DataType == 'DataDiri') {
    return (
      <View style={styles.portContainer}>
        <View style={styles.headerPort}>
          <Text style={styles.name}>Satria Alipatullah</Text>
          <Text style={styles.umur}>18 {DataDiri.age}</Text>
        </View>
        <View style={styles.mainPort}>
          <Image
            source={require('../../Assets/Images/DataDiri/Mr.Stralpt.jpg')}
            style={styles.personImg}
          />
          <View style={styles.moreInfoCont}>
            <View style={styles.fitMe}>
              <View style={styles.alNpm}>
                <Text style={styles.alNpm}>NPM: 200602090</Text>
                <Text style={styles.alamat}>{DataDiri.address}</Text>
              </View>
            </View>
            <View style={styles.about}>
              <Text style={styles.about}>
                askdjhas dkjahs klashfkahsd flkjadshf lkasdhflkasdfhj{' '}
              </Text>
            </View>
            <View style={styles.sosMedAcc}>
              <Fa
                style={[styles.gReviesIcon, styles.sosMedIcon]}
                name="instagram"
              />
              <Fa
                style={[styles.gReviesIcon, styles.sosMedIcon]}
                name="whatsapp"
              />
              <Fa
                style={[styles.gReviesIcon, styles.sosMedIcon]}
                name="telegram"
              />
            </View>
          </View>
        </View>
      </View>
    );
  } else if (route.params.DataType == 'AllContents') {
    const DATA = [
      {
        title: AllContents.sectionHeadings[1],
        data: [AllContents.screensDatas.gamesList],
      },
      {
        title: AllContents.sectionHeadings[0],
        // data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
        data: [AllContents.screensDatas.moviesList],
      },
    ];
    // console.log(DATA[0].data[0]);
    const getAllList = props => {
      if (props.whatList == 'Games List') {
        return (
          <View style={styles.sectionitem}>
            {console.log(props.whatList)}
            {/* {console.log(data)} */}
            <View style={styles.ss}>
              <FlatList
                style={styles.fListG}
                data={props.data}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={true}
                renderItem={RenderGamesList}
              />
            </View>
          </View>
        );
      } else if (props.whatList == 'Movies List') {
        return (
          <View style={styles.sectionitem}>
            <View style={styles.container}>
              <FlatList
                horizontal
                style={styles.fListM}
                data={props.data}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={true}
                renderItem={RenderMoviesList}
              />
            </View>
          </View>
        );
      }
    };
    const Item = props => getAllList(props);

    return (
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item data={item} whatList="Games List" />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
        />
      </SafeAreaView>
    );
  }
}
// <Text>{JSON.stringify(data[0].Title)}</Text>
let styleValue = { flistPad: 20 };
function dynamicStylesValue(sV) {
  styleValue.flistPad = 20;
  // console.log('benar');
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  fListM: {
    paddingTop: styleValue.flistPad,
    paddingBottom: styleValue.flistPad,
    width: '100%',
  },
  fListG: {
    padding: styleValue.flistPad,
    width: '100%',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  gameItem: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 5,
    borderBottomWidth: 3,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'whitesmoke',
    borderColor: '#f77',
  },
  imgContainer: {
    width: 100,
    // flexBasis: '30%',
    height: 100,
    position: 'relative',
  },
  gameImg: {
    width: '100%',
    resizeMode: 'cover',
    height: '100%',
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#f77',
  },
  gameData: {
    display: 'flex',
    // width: '100%',
    flexGrow: 1,
    // borderWidth: 3,
    paddingLeft: 10,
  },
  gameRatingCont: {
    display: 'flex',
    position: 'absolute',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'flex-end',
    backgroundColor: '#f77',
    borderRadius: 30,
    padding: 4,
    width: 35,
    height: 35,
    color: 'white',
  },
  gameRating: {
    textAlign: 'center',
    color: 'white',
  },
  gTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  gReviews: {
    fontSize: 20,
    color: '#f77',
    marginStart: 5,
  },
  gReviewsCont: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255, 119, 119, .5)',
    padding: 10,
    borderRadius: 5,
  },
  gReviesIcon: {
    fontSize: 25,
    color: '#f77',
    // borderWidth: 4,
    textAlign: 'center',
  },
  gIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  moviesItem: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignContent: 'center',
    // borderWidth: 3,
    width: 350,
    height: '100%',
    marginHorizontal: 20,
    position: 'relative',
    padding: 20,
    backgroundColor: '#f77',
    borderRadius: 15,
  },
  fosterContainer: {
    width: '100%',
    height: '60%',
    flexGrow: 1,
  },
  foster: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 15,
  },
  movieItemData: {
    display: 'flex',
    // height: '100%',
    backgroundColor: '#f77',
  },
  mTitle: {
    fontSize: 20,
    color: 'whitesmoke',
    fontWeight: 'bold',
  },
  ratRev: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 5,
    backgroundColor: 'whitesmoke',
    borderRadius: 5,
    alignContent: 'center',
  },
  mRat: {
    color: '#f77',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
  },
  mPlayBtnIcon: {
    display: 'flex',
    color: '#f77',
    fontSize: 150,
    // borderWidth: 4,
    textAlign: 'center',
    position: 'absolute',
    elevation: 2,
    left: '35%',
    bottom: '40%',
  },
  mReleased: {
    padding: 5,
    backgroundColor: 'rgba(255, 119, 119, .2)',
    color: '#f77',
    fontWeight: 'bold',
    borderRadius: 3,
  },
  mRev: {
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
  },
  ratRevCont: {
    display: 'flex',
    flexDirection: 'row',
  },
  Dot: {
    fontWeight: 'bold',
    color: 'silver',
  },
  recImgCont: {
    height: '50%',
  },
  recImg: {
    height: '100%',
    width: '100%',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  recContainer: {
    // borderWidth: 3,
    margin: 20,
    flexGrow: 1,
    position: 'relative',
  },
  infoContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
    backgroundColor: 'white',
    flexGrow: 1,
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15,
    padding: 20,
    // borderWidth: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
  },
  recTitle: {
    color: '#f77',
    fontSize: 35,
    fontFamily: 'times new roman',
    textAlign: 'center',
  },
  recRatRevCont: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recBtnCont: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  recBtn: {
    display: 'flex',
    backgroundColor: 'rgba(255, 119, 119, .5)',
    borderWidth: 3,
    borderColor: '#f77',
    color: '#f77',
    textAlign: 'center',
    padding: 20,
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: 100,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    // fontSize: 30,
  },
  recRevC: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 20,
  },
  recRatC: {
    marginRight: 20,
  },
  recRevRatValue: {
    color: '#f77',
    fontWeight: 'bold',
    fontSize: 30,
  },
  recRatRev: {
    backgroundColor: 'rgba(255, 119, 119, .2)',
    color: '#f77',
    padding: 5,
    borderRadius: 3,
  },
  portContainer: {
    display: 'flex',
    height: '100%',
    // borderWidth: 3,
    padding: 20,
  },
  headerPort: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 7,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 19,
  },
  name: {
    color: '#f77',
    fontWeight: 'bold',
    fontSize: 25,
  },
  umur: {
    backgroundColor: '#f77',
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 10,
  },
  mainPort: {
    display: 'flex',
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    // borderWidth: 3,
    flexGrow: 1,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  personImg: {
    display: 'flex',
    width: '40%',
    height: '60%',
    flexGrow: 1,
    borderRadius: 10,
  },
  moreInfoCont: {
    display: 'flex',
    // borderWidth: 3,
    flexGrow: 1,
    padding: 20,
  },
  alNpm: {
    color: '#f77',
    fontSize: 20,
    // fontFamily: 'times new roman',
  },
  fitMe: {
    display: 'flex',
    flexDirection: 'row',
  },
  about: {
    marginTop: 10,
    fontSize: 15,
  },
  sosMedAcc: {
    display: 'flex',
    alignItems: 'flex-end',
    // borderWidth: 3,
    flexGrow: 1,
  },
  sosMedIcon: {
    marginVertical: 3,
  },
  alamat: {
    color: '#f77',
    fontFamily: 'times new roman',
    // fontSize: 20,
  },
  // playBtnPrettier: {
  //   width: 120,
  //   height: 120,
  //   backgroundColor: 'whitesmoke',
  //   elevation: 1,
  //   borderRadius: 160,
  //   left: '38%',
  //   bottom: '43%',
  // },
  container22: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
  sectionitem: {},
  sectionHeader: {
    color: 'hotpink',
    padding: 5,
    fontSize: 30,
    fontFamily: 'serif',
    borderBottomColor: 'hotpink',
    borderBottomWidth: 3,
  },
});
