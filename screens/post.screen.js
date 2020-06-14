import React from 'react';
import {
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import Fire from '../Fire';
import * as ImagePicker from 'expo-image-picker';
import UserPermissions from '../utils/UserPermissions';

const firebase = require('firebase');
require('firebase/firestore');
const Posts = ({ navigation }) => {
  const [state, setState] = React.useState({
    text: '',
    image: null,
  });
  React.useEffect(() => {
    UserPermissions.getCameraPermission();
  }, []);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
    });
    if (!result.cancelled) {
      setState({ ...state, image: result.uri });
    }
  };

  const handlePost = () => {
    Fire.shared
      .addPost({ text: state.text.trim(), localUri: state.image })
      .then((ref) => {
        setState({ text: '', image: null });
        navigation.goBack();
      })
      .catch((error) => {
        alert(error.message);
        console.log(error);
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="md-arrow-back" size={24} color={'#D8D9DB'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePost}>
          <Text style={{ fontWeight: '500' }}>Post</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Image
          source={{
            uri:
              'https://cdn.pixabay.com/photo/2016/08/28/13/12/secondlife-1625903_960_720.jpg',
          }}
          style={styles.avatar}
        />
        <TextInput
          multiline
          numberOfLines={4}
          autoFocus
          style={{ flex: 1 }}
          placeholder="Want to share something ?"
          onChangeText={(text) => setState({ ...state, text: text })}
          value={state.text}
        />
      </View>
      <TouchableOpacity style={styles.photo} onPress={pickImage}>
        <Ionicons name="md-camera" size={32} color="#d8d0db" />
      </TouchableOpacity>

      <View style={{ marginHorizontal: 32, marginTop: 32, height: 150 }}>
        <Image
          source={{ uri: state.image }}
          style={{ width: '100%', height: '100%' }}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    paddingVertical: 12,
    marginTop: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#D8D9DB',
  },
  inputContainer: {
    margin: 32,
    flexDirection: 'row',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16,
  },
  photo: {
    alignItems: 'flex-end',
    marginHorizontal: 32,
  },
});
export default Posts;
