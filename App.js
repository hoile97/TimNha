/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

//import navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//import screens
import DangNhap from './component/DangNhap';
import TrangChu from './component/TrangChu';
import DanhSach from './component/DanhSach';
import ChiTiet from './component/ChiTiet';
const StackNavigatorScreens = createStackNavigator(
  {
    dn: DangNhap,
    tc: TrangChu,
    dst: DanhSach,
    ctt: ChiTiet
  },
  {
    initialRouteName: 'dn',
  }
);

export default createAppContainer(StackNavigatorScreens);