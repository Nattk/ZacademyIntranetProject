import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'import': 'url("../admin/admin.css")',
  'import': '"../ma_formation/livretAccueil.css"',
  'import': '"../ma_formation/agenda.css"',
  'import': '"../admin/admin.css"',
  'import': '"../ma_formation/AccueilConnected.css"',
  'nav > div': {
    'paddingLeft': [{ 'unit': 'rem', 'value': 1 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 1 }]
  },
  'nav > button:last-child': {
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'marginRight': [{ 'unit': 'px', 'value': 50 }]
  },
  'nav-title': {
    'fontWeight': 'bold'
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
