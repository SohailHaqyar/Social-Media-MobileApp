import React, { useState, useEffect } from 'react';
import { Button, Image, View, Text, StyleSheet } from 'react-native';
import Fire from '../Fire';
const Profile = (props) => {
  const [user, setUser] = useState({});
  let unsbscribe = null;
  useEffect(() => {
    const user = props.uid || Fire.shared.uid;

    unsbscribe = Fire.shared.firestore
      .collection('users')
      .doc(user)
      .onSnapshot((doc) => setUser(doc.data()));
    console.log(user.avatar);

    return () => {
      unsbscribe();
    };
  }, []);
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 64, alignItems: 'center' }}>
        <View style={styles.avatarContainer}>
          <Image
            source={
              user.avatar
                ? { uri: user.avatar }
                : {
                    uri:
                      'https://api.adorable.io/avatars/285/abott@adorable.io.png',
                  }
            }
            style={styles.avatar}
          />
        </View>
        <Text style={styles.name}>{user.name}</Text>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.stat}>
          <Text style={styles.statAmount}>21</Text>
          <Text style={styles.statTitle}>Posts</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statAmount}>981</Text>
          <Text style={styles.statTitle}>Followers</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statAmount}>63</Text>
          <Text style={styles.statTitle}>Following</Text>
        </View>
      </View>
      <View style={{ alignSelf: 'center' }}>
        <Button
          onPress={() => {
            Fire.shared.signOut();
          }}
          title="logout"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarContainer: {
    shadowColor: '#151734',
    shadowRadius: 30,
    shadowOpacity: 0.4,
    shadowOffset: { width: 1, height: 1 },
    elevation: 214,
  },
  avatar: {
    width: 136,
    height: 136,
    borderRadius: 64,
  },
  name: {
    marginTop: 24,
    fontSize: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 32,
  },
  stat: {
    alignItems: 'center',
    flex: 1,
  },
  statAmount: {
    color: '#4f566d',
    fontSize: 18,
    fontWeight: '200',
  },
  statTitle: {
    color: '#c3c5cd',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 4,
  },
});
export default Profile;
