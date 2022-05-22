import { useState } from 'react'

import { View, Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper'

import colors from '../utils/colors'
import RoundedButton from '../component/RoundedButton'
import size from '../utils/size'

const inputSettings = {
  selectionColor: colors.teal,
  underlineColor: colors.teal,
  activeUnderlineColor: colors.teal,
  outlineColor: colors.teal,
}

const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null)

  const textChange = (enterVal) => setSubject(enterVal)

  const TapAndAddSubject = () => addSubject(subject)

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={textChange}
          {...inputSettings}
          label="What would you like to Focus on"
          value={subject}
          style={styles.textInput}
        />
        <RoundedButton title="+" size={60} onPress={TapAndAddSubject} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  text: {
    color: colors.teal,
  },
  inputContainer: {
    padding: size.lg,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    marginRight: size.sm,
  },
})

export default Focus
