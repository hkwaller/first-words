import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as AppleAuthentication from 'expo-apple-authentication'
import { Header } from 'src/components/styled'
import Button from 'src/components/Button'

type Props = {}

function Start(props: Props) {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={{ padding: 30 }}>
      <Header style={{ marginBottom: 40 }}>Start</Header>
      <Button
        title="Begynn å lære"
        onPress={() => {
          navigation.navigate('FreePlay')
        }}
      />
      <AppleAuthentication.AppleAuthenticationButton
        buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
        buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.WHITE_OUTLINE}
        cornerRadius={5}
        style={{ width: 200, height: 44, marginTop: 20 }}
        onPress={async () => {
          console.log('logging in')
          try {
            console.log('signing in')
            const credential = await AppleAuthentication.signInAsync({
              requestedScopes: [
                AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                AppleAuthentication.AppleAuthenticationScope.EMAIL,
              ],
            })
            console.log('🚀 ~ file: Start.tsx ~ line 41 ~ onPress={ ~ credential', credential)
            // signed in
          } catch (e) {
            console.log('🚀 ~ file: Start.tsx ~ line 45 ~ onPress={ ~ e', e)
            if (e.code === 'ERR_CANCELED') {
              // handle that the user canceled the sign-in flow
            } else {
              // handle other errors
            }
          }
        }}
      />
    </SafeAreaView>
  )
}
export default Start
