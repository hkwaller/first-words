import styled from 'styled-components/native'

export const Header = styled.Text`
  font-family: 'AvocadoCreamy';
  font-size: 60px;
  font-weight: bold;
`

export const ButtonText = styled.Text`
  font-size: 40px;
  font-weight: bold;
`

export const ButtonContainer = styled.TouchableOpacity<{ color: string; rotation: number }>`
  padding: 20px;
  font-weight: bold;
  color: black;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  border-radius: 30px;
  min-height: 180px;
  background-color: ${props => props.color || '#aae0fc'};
  transform: ${props => `rotate(${props.rotation || 2}deg)`};
  overflow: hidden;
`

export const SmallButtonContainer = styled.TouchableOpacity`
  padding: 10px;
  font-weight: bold;
  border: 2px solid palevioletred;
  color: black;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`
