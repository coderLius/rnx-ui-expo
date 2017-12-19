
import {
  StackNavigator,
} from 'react-navigation';


import ActionSheet from './page/ActionSheet';
import AddAndSubtract from './page/AddAndSubtract';
import Alert from './page/Alert';
import Badge from './page/Badge';
import Btn from './page/Btn';
import CardView from './page/CardView';
import Confirm from './page/Confirm';
import Dialog from './page/Dialog';
import Drop from './page/Drop';
import DynamicText from './page/DynamicText';
import HeaderedSheet from './page/HeaderedSheet';
import ImgHolder from './page/ImgHolder';
import ImgPicker from './page/ImgPicker';
import ImgRollView from './page/ImgRollView';
import KeyboardAdaptiveView from './page/KeyboardAdaptiveView';
import Loading from './page/Loading';
import NavBar from './page/NavBar';
import NumericKeyboard from './page/NumericKeyboard';
import Overlay from './page/Overlay';
import PhoneNumInput from './page/PhoneNumInput';
import RefreshView from './page/RefreshView';
import Sheet from './page/Sheet';
import SmsCaptchaInput from './page/SmsCaptchaInput';
import TabBar from './page/TabBar';
import ToolTip from './page/ToolTip';
import TransPxToDp from './page/TransPxToDp';
import Validator from './page/Validator';
import VirtualPasswordInput from './page/VirtualPasswordInput';

import Home from './page/Home';

const navigationOptions = {
  header: null,
};

const AppRouter = StackNavigator.call(this, {
  Home: {
    screen: Home,
  },
  ActionSheet: {
    screen: ActionSheet,
  },
  AddAndSubtract: {
    screen: AddAndSubtract,
  },
  Alert: {
    screen: Alert,
  },
  Badge: {
    screen: Badge,
  },
  Btn: {
    screen: Btn,
  },
  CardView: {
    screen: CardView,
  },
  Confirm: {
    screen: Confirm,
  },
  Dialog: {
    screen: Dialog,
  },
  Drop: {
    screen: Drop,
  },
  DynamicText: {
    screen: DynamicText,
  },
  HeaderedSheet: {
    screen: HeaderedSheet,
  },
  ImgHolder: {
    screen: ImgHolder,
  },
  ImgPicker: {
    screen: ImgPicker,
  },
  ImgRollView: {
    screen: ImgRollView,
  },
  KeyboardAdaptiveView: {
    screen: KeyboardAdaptiveView,
  },
  Loading: {
    screen: Loading,
  },
  NavBar: {
    screen: NavBar,
  },
  NumericKeyboard: {
    screen: NumericKeyboard,
  },
  Overlay: {
    screen: Overlay,
  },
  PhoneNumInput: {
    screen: PhoneNumInput,
  },
  RefreshView: {
    screen: RefreshView,
  },
  Sheet: {
    screen: Sheet,
  },
  SmsCaptchaInput: {
    screen: SmsCaptchaInput,
  },
  TabBar: {
    screen: TabBar,
  },
  ToolTip: {
    screen: ToolTip,
  },
  TransPxToDp: {
    screen: TransPxToDp,
  },
  Validator: {
    screen: Validator,
  },
  VirtualPasswordInput: {
    screen: VirtualPasswordInput,
  },
}, {
  initialRouteName: 'Home', // 默认显示界面
  navigationOptions,
});

export default AppRouter;
