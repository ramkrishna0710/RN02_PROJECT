import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevetedCards from './components/ElevetedCards'
import FancyCards from './components/FancyCards'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'
import TaskWork from './components/TaskWork'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevetedCards />
        <FancyCards />
        <ActionCard />
        <ContactList />
        <TaskWork/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App