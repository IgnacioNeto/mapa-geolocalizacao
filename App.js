import { useEffect, useState } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function App() {
  const regiaoInicial = {
    // SP
    latitude: -23.533773,
    longitude: -46.65529,

    latitudeDelta: 30,
    longitudeDelta: 30,
  };

  const marcarLocal = (event) => {
    setLocalizacao({
      latitudeDelta: 0.3,
      longitudeDelta: 0.3,
      latitude: event.nativeEvent.coordinate.latitude,
      longitude: event.nativeEvent.coordinate.longitude,
    });
    console.log(localizacao);
  };
  const [localizacao, setLocalizacao] = useState();

  return (
    <>
      <StatusBar />
      <View style={estilos.container}>
        <MapView
          style={estilos.map}
          // initialRegion={regiaoInicial}
          // Coalescencia (Se existir localizacao mostrar localizacao, senão região inicial)
          region={localizacao ?? regiaoInicial}
          liteMode={false}
          mapType="standard"
          onPress={marcarLocal}
        >
          {/* Condicional SE houver localização inicial  mostre o marcador, senão não */}
          {localizacao && (
            <Marker
              coordinate={localizacao}
              title="Aqui!!"
              onPress={(e) => console.log(e.nativeEvent)}
            />
          )}
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
