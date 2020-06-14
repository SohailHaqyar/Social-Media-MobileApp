import React, { useState, useEffect } from 'react';
import Fire from '../Fire';
import { Ionicons } from '@expo/vector-icons';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import firebase from 'firebase';
import UserPermissions from '../utils/UserPermissions';
import * as ImagePicker from 'expo-image-picker';

const Register = ({ navigation }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    avatar: null,
    errorMessage: null,
  });
  const handleRegister = () => {
    Fire.shared.createUser(user);
  };
  const handlePickAvatar = async () => {
    UserPermissions.getCameraPermission();
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
    });
    if (!result.cancelled) {
      setUser({ ...user, avatar: result.uri });
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity style={styles.upload} onPress={handlePickAvatar}>
          <Image source={{ uri: user.avatar }} style={styles.avatar} />
          <Ionicons
            name="ios-add"
            color="white"
            size={40}
            style={styles.addIcon}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.greeting}>{'Hello! \nSignup to get started'}</Text>
      <View style={styles.errorMessage}>
        {user.errorMessage && (
          <Text style={styles.error}>{user.errorMessage}</Text>
        )}
      </View>
      <View style={styles.form}>
        <View>
          <Text style={styles.inputTitle}>Full Name</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            onChangeText={(name) => setUser({ ...user, name })}
            value={user.name}
          />
        </View>
        <View style={{ marginTop: 32 }}>
          <Text style={styles.inputTitle}>Email Address</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            onChangeText={(email) => setUser({ ...user, email })}
            value={user.email}
          />
        </View>
        <View style={{ marginTop: 32 }}>
          <Text style={styles.inputTitle}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            onChangeText={(password) => setUser({ ...user, password })}
            value={user.password}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={{ color: '#fff', fontWeight: '500' }}> Sign up</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ alignSelf: 'center', marginTop: 32 }}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={{ color: '#414959', fontSize: 13 }}>
          New to Social App ?{' '}
          <Text style={{ color: '#e9446a', fontWeight: '500' }}> Sign in </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  greeting: {
    marginTop: 32,
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
  errorMessage: {
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  form: {
    marginBottom: 40,
    marginHorizontal: 30,
  },
  inputTitle: {
    color: '#8A8F9E',
    fontSize: 10,
    textTransform: 'uppercase',
  },
  input: {
    borderBottomColor: '#8A8F9E',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: '#161F3D',
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: '#E9446a',
    borderRadius: 4,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    color: '#e9446a',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },
  upload: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E9446a',
  },
  avatar: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
export default Register;
