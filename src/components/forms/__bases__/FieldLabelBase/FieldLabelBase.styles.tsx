import { styles } from '~/libs/style';

export const s = styles({
  // .FieldLabelBase
  FieldLabelBase: {
    position: 'absolute',
    top: '-0.5em',
    left: '0.8rem',
    color: '#333',
    fontWeight: 700,
    fontSize: '1.6rem',
    padding: '0 0.4rem',
    marginTop: 0,
    lineHeight: 1,
    zIndex: 1,

    ':before': {
      display: 'block',
      content: '""',
      width: '100%',
      height: '0.3rem',
      position: 'absolute',
      top: '0.7rem',
      left: 0,
      margin: 'auto',
      zIndex: 0,
      background: '#fff',
    },
  },

  // .FieldLabelBase__Inner
  FieldLabelBase__Inner: {
    position: 'relative',
    zIndex: 1,
  },

  // .FieldLabelBase__SubLabel
  FieldLabelBase__SubLabel: {
    color: '#828282',
    paddingLeft: '0.4rem',
  },

  // .FieldLabelBase__SubLabel--em
  FieldLabelBase__SubLabel_em: {
    color: '#F2994A',
  },
});
