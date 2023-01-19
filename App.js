import { useEffect, useState } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function App() {
  const regiaoInicial = {
    // SP
    latitude: -23.533773,
    longitude: -46.65529,

    latitudeDelta: 50,
    longitudeDelta: 50,
  };

  const marcarLocal = (event) => {
    setLocalizacao({
      ...localizacao,
      latitude: event.nativeEvent.coordinate.latitude,
      longitude: event.nativeEvent.coordinate.longitude,
    });
    console.log(localizacao);
  };
  const [localizacao, setLocalizacao] = useState({
    // Argentina
    latitude: -33.867886,
    longitude: -63.987,
    latitudeDelta: 10,
    longitudeDelta: 10,
  });

  return (
    <>
      <StatusBar />
      <View style={estilos.container}>
        <MapView
          style={estilos.map}
          initialRegion={regiaoInicial}
          liteMode={false}
          mapType="standard"
          onPress={marcarLocal}
        >
          <Marker
            coordinate={localizacao}
            title="Aqui!!"
            onPress={(e) => console.log(e.nativeEvent)}
          />
        </MapView>
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
