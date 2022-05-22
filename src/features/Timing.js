import { View, Text, StyleSheet } from 'react-native'
import RoundedButton from '../component/RoundedButton'

const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View style={styles.timingButton}>
        <RoundedButton size={70} title="5:00" onPress={() => onChangeTime(5)} />
        <RoundedButton
          size={70}
          title="10:00"
          onPress={() => onChangeTime(10)}
        />
        <RoundedButton
          size={70}
          title="15:00"
          onPress={() => onChangeTime(15)}
        />
        <RoundedButton
          size={70}
          title="20:00"
          onPress={() => onChangeTime(20)}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})

export default Timing
