import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image 
            source={{
                uri: 'https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }}
            style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Sports Car</Text>
            <Text style={styles.cardLabel}>Pure Black, BMW</Text>
            <Text style={styles.cardDescription}>The BMW is Pure elegance and multisensory entertainment come together in the BMW 7 Series Sedan.</Text>
            <Text style={styles.cardFooter}>12 mins away</Text>
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
        height: 360,
        borderRadius: 12,
        marginVertical: 12,
        marginHorizontal: 16
    },
    cardElevated: {
        backgroundColor: '#50DBB4',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        }
    },
    cardImage: {
        height: 150,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 6
    },
    cardLabel: {
        color: '#000000',
        fontSize: 16,
        marginBottom: 4
    },
    cardDescription: {
        color: '#242B2E',
        fontSize: 14,
        marginTop: 6,
        marginBottom: 12,
        flexShrink: 1
    },
    cardFooter: {
        color: '#242B2E',
        fontSize: 12,
    },
})