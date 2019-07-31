import React from "react";
import { View } from "react-native";
import MapView from "react-native-maps";
import PropTypes from "prop-types";
import styles from "./styles";
import theme from "../../theme";
import { parseCoordinates, getRegion } from "./helpers/mapCoordinates";

const MyProfile = ({ user }) => {
  const coordinates = parseCoordinates(user.location.coordinates);
  console.log(coordinates);
  const region = getRegion(coordinates);
  return (
    <View>
      <MapView style={styles.map} region={region}>
        <MapView.Marker
          style={styles.maker}
          coordinate={coordinates}
          pinColor={theme.palette.primary.main}
        />
      </MapView>
    </View>
  );
};

MyProfile.propTypes = {
  user: PropTypes.object.isRequired
};

export default MyProfile;
