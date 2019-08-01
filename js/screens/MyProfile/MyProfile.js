import React from "react";
import { View, Text, Image } from "react-native";
import MapView from "react-native-maps";
import PropTypes from "prop-types";
import styles from "./styles";
import theme from "../../theme";
import { parseCoordinates, getRegion } from "./helpers/mapCoordinates";
import { getAgeIndicatorPositions } from "./helpers/ageIndicator";
import Icon from "react-native-vector-icons/FontAwesome";

const MyProfile = ({ user }) => {
  const { age } = user.dob;
  const ageIndicatorPositions = getAgeIndicatorPositions(age);
  const coordinates = parseCoordinates(user.location.coordinates);
  const region = getRegion(coordinates);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image style={styles.userAvatar} source={{ uri: user.picture.large }} />
        <View>
          <Text style={styles.userInfoTop}>Name</Text>
          <Text style={styles.userInfoBottom}>{`${user.name.first} ${
            user.name.last
          }`}</Text>
        </View>
      </View>
      <View style={styles.middle}>
        <Text style={styles.sectionTitle}>Location</Text>
        <MapView style={styles.map} region={region}>
          <MapView.Marker
            style={styles.maker}
            coordinate={coordinates}
            pinColor={theme.palette.primary.main}
          />
        </MapView>
      </View>
      <View style={styles.bottom}>
        <View style={styles.left}>
          <Text style={styles.sectionTitle}>Gender</Text>
          <View>
            <Icon
              name={user.gender === "male" ? "mars" : "venus"}
              size={50}
              color={theme.palette.primary.main}
            />
          </View>
        </View>
        <View style={styles.right}>
          <Text style={styles.sectionTitle}>Age</Text>
          <Text style={styles.age}>{`${age} yo`}</Text>
          <View style={styles.ageIndicator}>
            <View style={styles.bigBar} />
            {ageIndicatorPositions.map((position, index) => (
              <View
                key={`age-${index}`}
                style={{ ...styles.smallBar, bottom: position }}
              />
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

MyProfile.propTypes = {
  user: PropTypes.object.isRequired
};

export default MyProfile;
