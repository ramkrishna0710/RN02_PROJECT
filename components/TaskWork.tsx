import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

export default function TaskWork() {
    const contacts = [
        {
            uid: 1,
            name: 'Ramkrishna Mandal',
            status: 'React-Native Developer',
            imageUrl: 'https://scontent.fccu27-2.fna.fbcdn.net/v/t39.30808-6/414957178_2029457977435307_3517048102200422571_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zUjC17XwJJMQ7kNvgGztJiC&_nc_ht=scontent.fccu27-2.fna&oh=00_AYCqj0_hAB7mHt7JpChsxf8xAyfd0UYLk-75Nv4TQcxdVg&oe=66BB0813'
        },
        {
            uid: 2,
            name: 'Nisith Bhowmik',
            status: 'React Developer',
            imageUrl: 'https://scontent.fccu27-2.fna.fbcdn.net/v/t39.30808-6/414957178_2029457977435307_3517048102200422571_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zUjC17XwJJMQ7kNvgGztJiC&_nc_ht=scontent.fccu27-2.fna&oh=00_AYCqj0_hAB7mHt7JpChsxf8xAyfd0UYLk-75Nv4TQcxdVg&oe=66BB0813'
        },
        {
            uid: 3,
            name: 'Ramkrishna Mandal',
            status: 'Android Developer',
            imageUrl: 'https://scontent.fccu27-2.fna.fbcdn.net/v/t39.30808-6/414957178_2029457977435307_3517048102200422571_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zUjC17XwJJMQ7kNvgGztJiC&_nc_ht=scontent.fccu27-2.fna&oh=00_AYCqj0_hAB7mHt7JpChsxf8xAyfd0UYLk-75Nv4TQcxdVg&oe=66BB0813'
        },
        {
            uid: 4,
            name: 'Ramkrishna Mandal',
            status: 'React-Native Developer',
            imageUrl: 'https://scontent.fccu27-2.fna.fbcdn.net/v/t39.30808-6/414957178_2029457977435307_3517048102200422571_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zUjC17XwJJMQ7kNvgGztJiC&_nc_ht=scontent.fccu27-2.fna&oh=00_AYCqj0_hAB7mHt7JpChsxf8xAyfd0UYLk-75Nv4TQcxdVg&oe=66BB0813'
        },
        {
            uid: 5,
            name: 'Ramkrishna Mandal',
            status: 'React-Native Developer',
            imageUrl: 'https://scontent.fccu27-2.fna.fbcdn.net/v/t39.30808-6/414957178_2029457977435307_3517048102200422571_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zUjC17XwJJMQ7kNvgGztJiC&_nc_ht=scontent.fccu27-2.fna&oh=00_AYCqj0_hAB7mHt7JpChsxf8xAyfd0UYLk-75Nv4TQcxdVg&oe=66BB0813'
        },
        {
            uid: 6,
            name: 'Ramkrishna Mandal',
            status: 'React-Native Developer',
            imageUrl: 'https://scontent.fccu27-2.fna.fbcdn.net/v/t39.30808-6/414957178_2029457977435307_3517048102200422571_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zUjC17XwJJMQ7kNvgGztJiC&_nc_ht=scontent.fccu27-2.fna&oh=00_AYCqj0_hAB7mHt7JpChsxf8xAyfd0UYLk-75Nv4TQcxdVg&oe=66BB0813'
        },
        {
            uid: 7,
            name: 'Ramkrishna Mandal',
            status: 'React-Native Developer',
            imageUrl: 'https://scontent.fccu27-2.fna.fbcdn.net/v/t39.30808-6/414957178_2029457977435307_3517048102200422571_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zUjC17XwJJMQ7kNvgGztJiC&_nc_ht=scontent.fccu27-2.fna&oh=00_AYCqj0_hAB7mHt7JpChsxf8xAyfd0UYLk-75Nv4TQcxdVg&oe=66BB0813'
        },
    ]

    const activeContacts = [
        {
            uid: 1,
            name: 'Add Story',
            profilePic: 'https://cdn.iconscout.com/icon/free/png-256/free-plus-button-6544256-5479387.png'
        },
        {
            uid: 2,
            name: 'Ram',
            profilePic: 'https://scontent.fccu27-2.fna.fbcdn.net/v/t39.30808-6/414957178_2029457977435307_3517048102200422571_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zUjC17XwJJMQ7kNvgGztJiC&_nc_ht=scontent.fccu27-2.fna&oh=00_AYCqj0_hAB7mHt7JpChsxf8xAyfd0UYLk-75Nv4TQcxdVg&oe=66BB0813'
        },
        {
            uid: 3,
            name: 'Nisith',
            profilePic: 'https://scontent.fccu27-2.fna.fbcdn.net/v/t39.30808-6/414957178_2029457977435307_3517048102200422571_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zUjC17XwJJMQ7kNvgGztJiC&_nc_ht=scontent.fccu27-2.fna&oh=00_AYCqj0_hAB7mHt7JpChsxf8xAyfd0UYLk-75Nv4TQcxdVg&oe=66BB0813'
        },
        {
            uid: 4,
            name: 'Chiranjit',
            profilePic: 'https://scontent.fccu27-2.fna.fbcdn.net/v/t39.30808-6/414957178_2029457977435307_3517048102200422571_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zUjC17XwJJMQ7kNvgGztJiC&_nc_ht=scontent.fccu27-2.fna&oh=00_AYCqj0_hAB7mHt7JpChsxf8xAyfd0UYLk-75Nv4TQcxdVg&oe=66BB0813'
        },
        {
            uid: 5,
            name: 'Rina',
            profilePic: 'https://scontent.fccu27-2.fna.fbcdn.net/v/t39.30808-6/414957178_2029457977435307_3517048102200422571_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zUjC17XwJJMQ7kNvgGztJiC&_nc_ht=scontent.fccu27-2.fna&oh=00_AYCqj0_hAB7mHt7JpChsxf8xAyfd0UYLk-75Nv4TQcxdVg&oe=66BB0813'
        },
        {
            uid: 6,
            name: 'Roumita',
            profilePic: 'https://scontent.fccu27-2.fna.fbcdn.net/v/t39.30808-6/414957178_2029457977435307_3517048102200422571_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zUjC17XwJJMQ7kNvgGztJiC&_nc_ht=scontent.fccu27-2.fna&oh=00_AYCqj0_hAB7mHt7JpChsxf8xAyfd0UYLk-75Nv4TQcxdVg&oe=66BB0813'
        },
        {
            uid: 7,
            name: 'Ananya',
            profilePic: 'https://scontent.fccu27-2.fna.fbcdn.net/v/t39.30808-6/414957178_2029457977435307_3517048102200422571_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zUjC17XwJJMQ7kNvgGztJiC&_nc_ht=scontent.fccu27-2.fna&oh=00_AYCqj0_hAB7mHt7JpChsxf8xAyfd0UYLk-75Nv4TQcxdVg&oe=66BB0813'
        },
    ]
  return (
    <View>
      <View style={styles.header}>
  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
    <Text style={styles.headingText}>Massenger</Text>
    <Image 
      source={{ uri: 'data:image/png;base64,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' }}
      style={styles.headerImage} 
    />
  </View>
</View>
      <View>
      <ScrollView horizontal={true} style={styles.container}>
      {activeContacts.map( ({uid, name, profilePic})=> (
            <View key={uid} style={styles.card}>
                <Image 
                source={{
                    uri: profilePic
                }}
                style={styles.cardImage}
                />
                <View>
                <Text style={styles.cardText}>{name}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
      <Text style={styles.headingText}>Chats</Text>
      <View>
      <ScrollView
      style={styles.container}
      scrollEnabled={false}
      >
        {contacts.map( ({uid, name, status, imageUrl})=> (
            <View key={uid} style={styles.userCard}>
                <Image 
                source={{
                    uri: imageUrl
                }}
                style={styles.userImage}
                />
                <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    headerImage: {
        padding: 15,
        height: 40,
        width: 40
    },
    container: {},
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginStart: 5,
        paddingHorizontal: 9,
    },
    cardImage: {
        height: 60,
        width: 60,
        borderRadius: 60/2,
    },
    cardText: {
        fontSize: 14,
        fontWeight: '600',
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#8D3DAF',
        padding: 8,
        borderRadius: 10
    },
    userImage: {
        height: 60,
        width: 60,
        borderRadius: 60/2,
        marginRight: 14
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    userStatus: {
        fontSize: 12
    },
})