import React, {useState} from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {WebView} from 'react-native-webview';
import FastImage from 'react-native-fast-image';

import splashGif from './smart_haus_splash.gif';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={style.container}>
      {!isLoading ? (
        <View style={style.splashView}>
          <FastImage
            style={style.splashImage}
            source={{
              uri: Image.resolveAssetSource(splashGif).uri,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
            onLoad={() => {
              setTimeout(() => {
                setIsLoading(!isLoading);
              }, 3000);
            }}
          />
        </View>
      ) : null}
      <SafeAreaView />
      <WebView
        onLoad={() => {}}
        source={{uri: 'https://new.smarthaus.co.kr'}}
        textZoom={100}
        automaticallyAdjustContentInsets={true}
        scalesPageToFit={true}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  splashView: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashImage: {
    width: 200,
    height: 200,
  },
});
