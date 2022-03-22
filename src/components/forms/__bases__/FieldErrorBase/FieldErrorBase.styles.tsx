import { styles, theme } from '~/libs/style';

export const s = styles({
  // ,FieldErrorBase
  FieldErrorBase: {
    display: 'none',
    margin: '0.4rem 0',
    whiteSpace: 'pre',
  },

  // ,FieldErrorBase--show
  FieldErrorBase_show: {
    display: 'inline-block',
  },

  // ,FieldErrorBase__Text
  FieldErrorBase__Text: {
    color: theme.palette.error.main,
  },
});
