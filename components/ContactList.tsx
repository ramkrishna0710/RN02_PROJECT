import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
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
    ]
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
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
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 4,
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