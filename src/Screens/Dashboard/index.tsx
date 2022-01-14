import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import AppLoading from 'expo-app-loading';

import * as InAppPurchases from 'expo-in-app-purchases';

import {
	Container,
	MyButton,
	Title,
	TitleMyButton
} from './styles';

import {
	useFonts,
	RobotoSlab_400Regular,
	RobotoSlab_500Medium,
	RobotoSlab_700Bold,
} from '@expo-google-fonts/roboto-slab';

const IAP_SKUS: any = Platform.select({
	ios: [],
	android: ['credit_tier1', 'credit_tier3', 'credit_tier2'],
});

const Dashboard: React.FC = () => {

	const [message, setMessage] = useState('');

	let [fontsLoaded] = useFonts({
		RobotoSlab_700Bold, RobotoSlab_400Regular, RobotoSlab_500Medium
	});

	// const navigation = useNavigation<any>();

	// useEffect(() => {
	// 	const connect = async () => {
	// 		try {
	// 			const res = await connectAsync(); // Conectar com lojas
	// 			console.log(res)
	// 		} catch (error) {
	// 			setMessage('')
	// 			console.log("connectAsync => ", error)
	// 		}
	// 	}
	// 	connect()
	// }, [])

	useEffect(() => {
		InAppPurchases.connectAsync();
	}, [])


	const desconectar = async () => {
		const res = await InAppPurchases.disconnectAsync()
		console.log("RES => ", res)
	}

	const getProducts = async () => {
		try {
			const res = await InAppPurchases.connectAsync();
			console.log(res)
			const { responseCode, results } = await InAppPurchases.getProductsAsync(IAP_SKUS); // Buscar Produtos
			console.log("responseCode => ", responseCode)
			console.log("results => ", results)
			if (responseCode === InAppPurchases.IAPResponseCode.OK) {
				return results;
			} else {
				return [];
			}
		} catch (error) {
			console.log("error =>", error)
		}
	}

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<Container>
				<Title>React Native + Expo In App Purchases</Title>
				<MyButton onPress={getProducts}>
					<TitleMyButton>Teste</TitleMyButton>
				</MyButton>
			</Container>
		)
	}
}

export default Dashboard;