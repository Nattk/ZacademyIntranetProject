import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'livreAccueil-row': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }],
    'marginRight': [{ 'unit': 'px', 'value': 0 }],
    'display': '-ms-flexbox',
    'display': 'flex',
    'MsFlexWrap': 'wrap',
    'flexWrap': 'wrap'
  },
  'livretAccueil-card': {
    'height': [{ 'unit': 'vh', 'value': 60 }],
    'alignItems': 'center',
    'textAlign': 'center',
    'display': 'flex',
    'flexDirection': 'column',
    'justifyContent': 'center',
    'paddingRight': [{ 'unit': 'rem', 'value': 3 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 3 }]
  },
  'livretAccueil-pagination': {
    'marginTop': [{ 'unit': 'em', 'value': 1 }],
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'marginRight': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'livreAccueil-title': {
    'color': 'rgb(33, 37, 41)'
  },
  'livretAccueil-page-link': {
    'color': '#b21e3e',
    'position': 'relative',
    'display': 'block',
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.75 }],
    'marginLeft': [{ 'unit': 'px', 'value': -1 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.25 }],
    'backgroundColor': '#fff',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#dee2e6' }]
  },
  'livretAccueil-page-link:hover': {
    'zIndex': '2',
    'color': '#fff',
    'textDecoration': 'none',
    'backgroundColor': '#b21e3e',
    'borderColor': '#e6e1de'
  },
  'livretAccueil-page-link-number': {
    'position': 'relative',
    'display': 'block',
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.75 }],
    'marginLeft': [{ 'unit': 'px', 'value': -1 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.25 }],
    'color': '#b21e3e',
    'backgroundColor': '#fff',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#dee2e6' }]
  },
  'livretAccueil-page-link-number:hover': {
    'zIndex': '2',
    'color': '#fff',
    'textDecoration': 'none',
    'backgroundColor': '#b21e3e',
    'borderColor': '#e6e1de'
  }
});
