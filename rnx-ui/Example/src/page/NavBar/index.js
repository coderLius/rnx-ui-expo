import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  Alert,
} from 'react-native';
import All from 'rnx-ui/All';
// import NavBar from 'rnx-ui/NavBar';
import PropTypes from 'prop-types';
import Badge from 'rnx-ui/Badge';
import Router from '../../router';
import {
  List,
  Icon,
  NavBar,
} from '../../component';

function generateMsgCount() {
  return Math.floor(Math.random() * 200);
}

function formatMsgCount() {
  const msgCount = generateMsgCount();
  let text = `${msgCount}`;
  if (msgCount === 0) {
    text = '';
  } else if (msgCount > 99) {
    text = '99+';
  }
  return text;
}


const items = [
  {
    content: '切换为长标题',
    onPress() {
      this.setState({
        title: '这是一个很长很长很长很长很长很长的标题',
      });
    },
  },
  {
    content: '随机设置未读消息',
    onPress() {
      this.setState({
        msgCount: formatMsgCount(),
      });
    },
  },
];

const COLOR_NAVBAR_TEXT = '#fff';
const styles = StyleSheet.create({
  navBar: {
    backgroundColor: 'pink',
  },
  title: {
    color: 'black',
  },
  leftBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftIcon: {
    color: COLOR_NAVBAR_TEXT,
  },
  leftBtnText: {
    marginLeft: 5,
    color: COLOR_NAVBAR_TEXT,
  },
  rightIcon: {
    color: COLOR_NAVBAR_TEXT,
    fontSize: 20,
  },
});

class Page extends Component {
  static section = 'Navigation';

  constructor(props) {
    super(props);
    this.state = {
      title: 'navbar',
      msgCount: '6',
    };
  }
  render() {
    return (
      <All>
        <NavBar
          style={styles.navBar}
          titleStyle={styles.title}
          title="NavBar"
          leftEvent={() => { Router.back(this.props.navigation.state.key); }}
          rightBtn={
            <Badge text={this.state.msgCount}>
              <Icon name="commenting-o" style={styles.rightIcon} />
            </Badge>
          }
          rightEvent={() => {
            Alert.alert('清空');
            this.setState({
              msgCount: '',
            });
          }}
        />
        <List
          items={items}
          pressContext={this}
        />
      </All>
    );
  }
}

Page.propTypes = {
  navigation: PropTypes.object,
};

Router.register('NavBar', Page);

export default Page;
