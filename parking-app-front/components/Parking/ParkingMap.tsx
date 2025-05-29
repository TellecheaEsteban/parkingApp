import { StyleSheet } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';
import { useEffect, useState, useRef } from 'react';
import * as Location from 'expo-location';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 50,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

interface ParkingMapProps {
  style?: any;
  initialRegion?: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
}

function ParkingMap({ style, initialRegion }: ParkingMapProps) {
  const [userLocation, setUserLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [mapRegion, setMapRegion] = useState<Region | undefined>(initialRegion);

  const mapRef = useRef<MapView>(null);



  const centerOnLocation = async () => {
    if (!userLocation || !mapRef.current) return;
    
    try {
      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });
      
      const newRegion = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      };

      // Animate to the new region
      if (mapRef.current) {
        mapRef.current.animateToRegion(newRegion, 1000);
      }

      // Update the region state
      setMapRegion(newRegion);
    } catch (error) {
      console.error('Error centering on location:', error);
    }
  };

  useEffect(() => {
    async function setupLocation() {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.error('Location permission not granted');
          return;
        }

        // Get current position
        const location = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.High,
        });
        const coords = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        };
        setUserLocation(coords);
        setMapRegion({
          ...coords,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        });

        // Start watching position
        const watchId = await Location.watchPositionAsync(
          {
            accuracy: Location.Accuracy.High,
            distanceInterval: 10,
          },
          (location) => {
            const coords = {
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            };
            setUserLocation(coords);
            setMapRegion({
              ...coords,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            });
          },
          (error) => {
            console.error('Error watching position:', error);
          }
        );

        // Cleanup
        return () => {
          if (watchId && typeof watchId.remove === 'function') {
            watchId.remove();
          }
        };
      } catch (error) {
        console.error('Error:', error);
      }
    }

    setupLocation();
  }, []);

  return (
    <>
      <MapView
        ref={mapRef}
        style={style}
        customMapStyle={[
          {
            featureType: "all",
            elementType: "geometry",
            stylers: [{ color: "#242f3e" }],
          },
          {
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#242f3e" }],
          },
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [{ color: "#ffffff" }, { weight: 0.8 }],
          },
          {
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#000000" }, { weight: 2 }],
          },
          {
            featureType: "administrative.locality",
            elementType: "all",
            stylers: [{ visibility: "on" }, { color: "#ffffff" }],
          },
          {
            featureType: "administrative.locality",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#000000" }, { weight: 2 }],
          },
          {
            featureType: "poi",
            elementType: "all",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#ffffff" }, { weight: 0.8 }],
          },
          {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#000000" }, { weight: 2 }],
          },
          {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [{ color: "#ffffff" }, { weight: 0.8 }],
          },
          {
            featureType: "road.highway",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#000000" }, { weight: 2 }],
          },
          {
            featureType: "road.arterial",
            elementType: "labels.text.fill",
            stylers: [{ color: "#ffffff" }, { weight: 0.8 }],
          },
          {
            featureType: "road.arterial",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#000000" }, { weight: 2 }],
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#ffffff" }, { weight: 1 }],
          },
          {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#000000" }, { weight: 3 }],
          },
          {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [{ color: "#ffffff" }, { weight: 0.8 }],
          },
          {
            featureType: "road.highway",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#000000" }, { weight: 2 }],
          },
          {
            featureType: "road.arterial",
            elementType: "labels.text.fill",
            stylers: [{ color: "#ffffff" }, { weight: 0.8 }],
          },
          {
            featureType: "road.arterial",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#000000" }, { weight: 2 }],
          },
          {
            featureType: "road",
            elementType: "all",
            stylers: [{ saturation: -100 }, { lightness: 45 }],
          },
          {
            featureType: "road.highway",
            elementType: "all",
            stylers: [{ visibility: "simplified" }],
          },
          {
            featureType: "road.arterial",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "transit",
            elementType: "all",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [{ color: "#4e5d6c" }, { visibility: "on" }],
          },
        ]}
        region={mapRegion}
        onRegionChangeComplete={(region) => {
          setMapRegion(region);
        }}
      >
        {userLocation && (
          <Marker
            coordinate={{
              latitude: userLocation.latitude,
              longitude: userLocation.longitude,
            }}
            title="Your Location"
            description="You are here"
          />
        )}
      </MapView>
      {userLocation && (
        <View style={styles.buttonContainer}>
          <MaterialIcons 
            name="my-location" 
            size={24} 
            color="#3498db"
            onPress={centerOnLocation}
          />
        </View>
      )}
    </>
  );
}

export default ParkingMap;
