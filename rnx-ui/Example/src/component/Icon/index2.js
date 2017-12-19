import React, { Component } from 'react';
import { Font } from 'expo';
import PropTypes from 'prop-types';
import { createIconSet } from '@expo/vector-icons';

const ICON_MAP = {
  menu: '\uf0c9',
  'angle-left': '\uf104',
  'commenting-o': '\uf27b',
  bomb: '\uf1e2',
  bolt: '\uf0e7',
  plug: '\uf1e6',
  rocket: '\uf135',
  cart: '\uf07a',
  'fa-plus': '\uf067',
  'fa-minus': '\uf068',
  'fa-check': '\uf00c',
};

const glyphMap = ICON_MAP;
const CustomIcon = createIconSet(glyphMap, 'FontName');
Font.loadAsync({
  FontName: require('../../../asset/font/FontAwesome.ttf'),
});

export default class Icon extends Component {

  render() {
    return (
      <CustomIcon style={this.props.style} name={this.props.name} color="#fff" />
    );
  }
}

Icon.propTypes = {
    // 字符名字
  name: PropTypes.string.isRequired,
    // 自定义样式
  style: PropTypes.object,
};

Icon.defaultProps = {
  name: '',
  style: { fontSize: 16 },
};
