import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'import': '"../ma_formation/livretAccueil.css"',
  'import': '"../ma_formation/agenda.css"',
  'nav': {
    'display': 'flex',
    'justifyContent': 'flex-start'
  },
  'nav ul': {
    'listStyle': 'none'
  },
  'nav > div:last-child': {
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'marginRight': [{ 'unit': 'px', 'value': 80 }]
  },
  'nav-title': {
    'fontWeight': 'bold'
  },
  '#iframe-navbar': {
    'width': [{ 'unit': 'vw', 'value': 100 }],
    'height': [{ 'unit': 'rem', 'value': 11 }]
  },
  'main': {
    'margin': [{ 'unit': 'px', 'value': 150 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'main articlecontact': {
    'margin': [{ 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 50 }],
    'height': [{ 'unit': 'px', 'value': 150 }],
    'display': 'flex',
    'boxSizing': 'border-box'
  },
  'main article sectionphoto': {
    'background': 'red',
    'maxWidth': [{ 'unit': 'px', 'value': 150 }],
    'minWidth': [{ 'unit': 'px', 'value': 150 }]
  },
  'main article sectionvoid': {
    'maxWidth': [{ 'unit': 'px', 'value': 80 }],
    'minWidth': [{ 'unit': 'px', 'value': 20 }]
  },
  'main article sectiondescription': {
    'background': 'blue',
    'minWidth': [{ 'unit': 'px', 'value': 300 }],
    'overflow': 'hidden',
    'textOverflow': 'ellipsis'
  }
});
