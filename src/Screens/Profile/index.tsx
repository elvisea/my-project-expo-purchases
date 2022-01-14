import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, MyButton, Title, TitleMyButton } from './styles';

const Profile: React.FC = () => {
	const navigation = useNavigation<any>()
	return (
		<Container>
			<Title>React Native + Expo In App Purchases</Title>
			<MyButton onPress={() => navigation.navigate('Dashboard')}>
				<TitleMyButton>Profile</TitleMyButton>
			</MyButton>
		</Container>
	)
}

export default Profile;