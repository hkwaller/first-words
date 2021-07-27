import styled from 'styled-components/native'

export const Header = styled.Text`
  font-family: 'MyHappyEndingRegular';
  font-size: 60px;
  font-weight: bold;
`

export const ButtonText = styled.Text`
  font-family: 'MyHappyEndingRegular';
  font-size: 60px;
  font-weight: bold;
`
export const BodyText = styled.Text`
  font-family: 'MyHappyEndingRegular';
  font-size: 30px;
`
export const NameText = styled.Text`
  font-family: 'MyHappyEndingRegular';
  color: #ecafac;
  font-size: 70px;
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
`
export const NavigationButton = styled.TouchableOpacity<{ color: string }>`
  font-weight: bold;
  color: black;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  border-radius: 40px;
  padding: 20px 60px;
  align-self: center;
  background-color: ${props => props.color || '#aae0fc'};
  transform: rotate(2deg);
`

export const SmallButtonContainer = styled.TouchableOpacity<{ color: string; rotation: number }>`
  padding: 10px;
  font-weight: bold;
  color: black;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  border-radius: 30px;
  background-color: ${props => props.color || '#aae0fc'};
  transform: ${props => `rotate(${props.rotation || 2}deg)`};
`
