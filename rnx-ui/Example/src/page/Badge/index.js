import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import All from 'rnx-ui/All';
import Badge from 'rnx-ui/Badge';
import Router from '../../router';

import {
  Icon,
  Article,
  NavBar,
} from '../../component';

const styles = StyleSheet.create({
  icon: {
    fontSize: 20,
  },
  scrollView: {
    paddingHorizontal: 10,
  },
  container: {
    flexDirection: 'row',
  },
  placeholder: {
    flex: 1,
  },
  textContainerStyle: {
    top: null,
    bottom: 0,
  },
});

class Page extends Component {
  render() {
    return (
      <All>
        <NavBar
          title="Badge"
          leftEvent={() => { Router.back(this.props.navigation.state.key); }}
        />
        <ScrollView style={styles.scrollView}>
          <Article title="文字 + 角标">
            <View style={styles.container}>
              <Badge text="+1s">
                <Text>
                    一颗赛艇
                  </Text>
              </Badge>
              <View style={styles.placeholder} />
            </View>
          </Article>
          <Article title="图标 + 角标">
            <View style={styles.container}>
              <Badge text={8}>
                <Icon name="commenting-o" style={styles.icon} />
              </Badge>
              <View style={styles.placeholder} />
            </View>
          </Article>
          <Article title="自定义位置">
            <View style={styles.container}>
              <Badge text="8" textContainerStyle={styles.textContainerStyle}>
                <Icon name="commenting-o" style={styles.icon} />
              </Badge>
              <View style={styles.placeholder} />
            </View>
          </Article>
        </ScrollView>
      </All>
    );
  }
}

Page.section = 'Data Display';

Page.propTypes = {
  navigation: PropTypes.object,
};

Router.register('Badge', Page);

export default Page;
