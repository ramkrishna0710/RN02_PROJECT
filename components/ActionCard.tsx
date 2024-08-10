import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                What's new in Javascript 21 - ES12
            </Text>
        </View>
        <Image
         source={{
            uri: 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
         }}
         style={styles.cardImage}
         />
         <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
            Many languages allows negative bracket indexing like [-1] to access elements from the end of an object / array / string.
This is not possible in JavaScript, because [] is used for accessing both arrays and objects. obj[-1] refers to the value of key -1, not to the last property of the object.
The at() method was introduced in ES2022 to solve this problem.
            </Text>
         </View>
         <View style={styles.footerContainer}>
            <TouchableOpacity onPress={ () => openWebsite('https://www.w3schools.com/js/js_2021.asp') }>
                <Text style={styles.readMore}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => openWebsite('https://www.instagram.com/mr._ramkrishna') }>
                <Text style={styles.followMe}>Follow Me</Text>
            </TouchableOpacity>
         </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
        width: 330,
        height: 370,
        borderRadius: 8,
        marginVertical: 12,
        marginHorizontal: 16
    },
    elevatedCard: {
        backgroundColor: '#E07C24',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4,
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    cardImage: {
        height: 190
    },
    bodyContainer: {
        padding: 10
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    readMore: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6
    },
    followMe: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6
    },
})