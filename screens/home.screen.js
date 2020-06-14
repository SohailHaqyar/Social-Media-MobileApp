import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
const posts = [
  {
    id: "1",
    name: "Mrs Stinsfire",
    text:
      "Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals after maintainable products.",
    avatar:
      "https://cdn.pixabay.com/photo/2016/08/28/13/12/secondlife-1625903_960_720.jpg",
    image:
      "https://s27363.pcdn.co/wp-content/uploads/2019/04/Greece-Header-Photo-1600x857.jpg.optimal.jpg",
    timestamp: 129181872,
  },
  {
    id: "2",
    name: "Tracy",
    text:
      "Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals after maintainable products.",
    avatar:
      "https://cdn.pixabay.com/photo/2016/08/28/13/12/secondlife-1625903_960_720.jpg",
    image:
      "https://s27363.pcdn.co/wp-content/uploads/2019/04/Greece-Header-Photo-1600x857.jpg.optimal.jpg",
    timestamp: 1928319,
  },
  {
    id: "3",
    name: "Robin Sherbatsky",
    text:
      "Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals after maintainable products.",
    avatar:
      "https://cdn.pixabay.com/photo/2016/08/28/13/12/secondlife-1625903_960_720.jpg",
    image:
      "https://s27363.pcdn.co/wp-content/uploads/2019/04/Greece-Header-Photo-1600x857.jpg.optimal.jpg",
    timestamp: 129929181872,
  },
  {
    id: "4",
    name: "Lily Aldrin",
    text:
      "Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals after maintainable products.",
    avatar:
      "https://cdn.pixabay.com/photo/2016/08/28/13/12/secondlife-1625903_960_720.jpg",
    image:
      "https://s27363.pcdn.co/wp-content/uploads/2019/04/Greece-Header-Photo-1600x857.jpg.optimal.jpg",
    timestamp: 1928309876987,
  },
  {
    id: "5",
    name: "blah blah",
    text:
      "Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals after maintainable products.",
    avatar:
      "https://cdn.pixabay.com/photo/2016/08/28/13/12/secondlife-1625903_960_720.jpg",
    image:
      "https://s27363.pcdn.co/wp-content/uploads/2019/04/Greece-Header-Photo-1600x857.jpg.optimal.jpg",
    timestamp: 87821709,
  },
];

const Home = () => {
  const renderPost = (post) => {
    return (
      <View style={styles.feedItem}>
        <Image source={{ uri: post.avatar }} style={styles.avatar} />
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text style={styles.name}>{post.name}</Text>
              <Text style={styles.timestamp}>
                {moment(post.timestamp).fromNow()}
              </Text>
            </View>
            <Ionicons name="ios-more" size={24} color="#73788b" />
          </View>
          <Text style={styles.posts}>{post.text}</Text>

          <Image
            source={{ uri: post.image }}
            style={styles.postImage}
            resizeMode="cover"
          />
          <View style={{ flexDirection: "row" }}>
            <Ionicons
              name="ios-heart-empty"
              size={24}
              color="#73788b"
              style={{ marginHorizontal: 16 }}
            />
            <Ionicons name="ios-chatboxes" size={24} color="#73788b" />
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Feed</Text>
      </View>

      <FlatList
        style={styles.feed}
        data={posts}
        renderItem={({ item }) => renderPost(item)}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFECF4",
  },
  header: {
    paddingTop: 64,
    paddingBottom: 16,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ebecf4",
    shadowColor: "#454d65",
    shadowOffset: { height: 5 },
    shadowRadius: 15,
    shadowOpacity: 0.2,
    elevation: 8,
    zIndex: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "500",
  },
  feed: {
    marginHorizontal: 16,
  },
  feedItem: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 9,
    flexDirection: "row",
    marginVertical: 8,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 16,
  },
  name: {
    fontSize: 15,
    fontWeight: "500",
    color: "#454d65",
  },
  timestamp: {
    fontSize: 11,
    color: "#c4c6ce",
    marginTop: 4,
  },
  posts: {
    marginTop: 16,
    fontSize: 14,
    color: "#838899",
  },
  postImage: {
    width: undefined,
    height: 150,
    borderRadius: 5,
    marginVertical: 16,
  },
});
export default Home;
