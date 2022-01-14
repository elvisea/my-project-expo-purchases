import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background: #121214;
    padding: 0 ${RFValue(20)}px;
`;

export const Title = styled.Text`
    color: #e1e1e6;
    text-align: center;
    font-size: ${RFValue(20)}px;
    margin-bottom: ${RFValue(16)}px;
`;

export const TitleMyButton = styled.Text`
    color: #e1e1e6;
`;

export const MyButton = styled(RectButton)`
    width: 100%;
    height: ${RFValue(60)}px;
    align-items: center;
    justify-content: center;
    border-radius: ${RFValue(5)}px; 
    background: #7159c1;
`;