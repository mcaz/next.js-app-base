import { createStyles } from '@/libs/style';

export const s = createStyles(() => {
  return {
    TextField: {},
    TextField_plain: {
      '& input': {
        background: 'none',
      },
      '& fieldset': {
        border: 'none',
      },
    },
    TextField_number: {
      '& input': {
        textAlign: 'right',
      },
    },
    TextField__Root: {
      '& .MuiInputBase-adornedEnd': {
        paddingRight: 0,
      },
    },
    TextField__Root_hideSpinner: {
      '& .MuiInputBase-input::-webkit-inner-spin-button, & .MuiInputBase-input::-webkit-outer-spin-button':
        {
          WebkitAppearance: 'none',
          MozAppearance: 'textfield',
          margin: 0,
        },
    },
    TextField__EndAdornment__Root: {
      '& > p': {
        fontSize: '1.4rem',
        fontFamily: 'Noto Sans JP',
      },
    },
  };
});
