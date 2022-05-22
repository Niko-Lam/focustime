import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, Platform, SafeAreaView } from 'react-native'

import colors from './src/utils/colors'
import Focus from './src/features/Focus'
import Timer from './src/features/Timer'
import FocusHistory from './src/features/FocusHistory'

const App = () => {
  const [currnetSubject, setCurrnetSubject] = useState(null)

  const [history, setHistory] = useState([])

  return (
    <>
      <StatusBar style="auto" />
      {/* 專爲ios劉海屏，圓角屏幕做適配 */}
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}></Text>
        {!currnetSubject ? (
          <>
            <Focus addSubject={setCurrnetSubject} />
            <FocusHistory history={history} />
          </>
        ) : (
          <Timer
            focusSubject={currnetSubject}
            onTimerEnd={(subject) => setHistory([...history, subject])}
            clearSubject={() => setCurrnetSubject(null)}
          />
        )}
      </SafeAreaView>
    </>
  )
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS == 'android' ? 50 : 0,
    backgroundColor: colors.lightCyan,
  },
  text: {
    color: colors.teal,
  },
})
