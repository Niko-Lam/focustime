import { useState } from 'react'
import { Text, View, StyleSheet, Vibration } from 'react-native'
import { ProgressBar } from 'react-native-paper'
import CountDown from '../component/CountDown'
import RoundedButton from '../component/RoundedButton'
import Timing from '../features/Timing'

import size from '../utils/size'
import colors from '../utils/colors'

import { useKeepAwake } from 'expo-keep-awake'

const ONE_SECOND_IN_MS = 1000

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
]

const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  useKeepAwake()
  const [progress, setProgress] = useState(1)

  const [isStarted, setIsStart] = useState(false)

  const [minutes, setMinutes] = useState(0.1)

  const start = () => setIsStart(true)
  const end = () => setIsStart(false)

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN)
    setIsStart(false)
    setProgress(1)
    // setMinutes(0.5)
    reset()
    // onTimerEnd(focusSubject)
    // console.log(1)
  }

  return (
    <View style={styles.container}>
      <View style={styles.countDown}>
        <CountDown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={onEnd}
        />
        <View style={{ paddingTop: size.xxl }}>
          <Text style={styles.title}>Focusing On</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>

      <View style={{ paddingTop: size.xxl }}>
        <ProgressBar
          progress={progress}
          color={colors.teal}
          style={{ height: size.sm }}
        />
      </View>

      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>

      <View style={styles.buttonWrapper}>
        {isStarted ? (
          <RoundedButton title="END" onPress={end} />
        ) : (
          <RoundedButton title="START" onPress={start} />
        )}
      </View>

      <View style={styles.cleatSubjectWrapper}>
        <RoundedButton title="❌" size={size.xxxl} onPress={clearSubject} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countDown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.2,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timingWrapper: {
    flex: 0.1,
    flexDirection: 'row',
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cleatSubjectWrapper: {
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: { color: colors.teal, fontWeight: 'bold', textAlign: 'center' },
  task: { color: colors.teal, textAlign: 'center' },
})

export default Timer
