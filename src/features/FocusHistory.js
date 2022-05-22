import { View, Text, StyleSheet, FlatList } from 'react-native'
import colors from '../utils/colors'
import size from '../utils/size'

const FocusHistory = ({ history }) => {
  return (
    <View style={styles.container}>
      {!history || !history.length ? (
        <Text style={styles.title}>NON HISTORY RIGHT NOW</Text>
      ) : (
        <>
          <Text style={styles.title}>What we use to Focus on :</Text>
          <FlatList
            data={history}
            renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
            keyExtractor={(item) => item}
          />
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: { padding: size.sm, flex: 1 },
  item: {
    color: colors.teal,
    fontSize: size.lg,
    textAlign: 'center',
    paddingTop: size.md,
  },
  title: {
    color: colors.teal,
    fontSize: size.md,
    textAlign: 'center',
  },
})

export default FocusHistory
