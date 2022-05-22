import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import colors from '../utils/colors'

const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => (
  <TouchableOpacity
    style={[styles(size).radius, style]}
    onPress={props.onPress}
  >
    <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
  </TouchableOpacity>
)

const styles = (size) => ({
  radius: {
    borderRadius: size / 4,
    width: size,
    height: size,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.teal,
    borderWidth: 2,
  },
  text: { color: colors.teal, fontSize: size / 4 },
})

export default RoundedButton
