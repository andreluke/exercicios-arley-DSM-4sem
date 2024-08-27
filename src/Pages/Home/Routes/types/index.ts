import { ParamListBase } from '@react-navigation/native';
export interface RootStackParamList extends ParamListBase {
    Home: undefined; // A tela Home não espera parâmetros
    Morning: undefined;
    Afternoon: undefined;
    Night: undefined;
}