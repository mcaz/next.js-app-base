import { s } from './FieldLabelBase.styles';
import { TProps } from './FieldLabelBase.types';
import E from '~/components/elements';
import { useRender, useStyles } from '~/hooks/react';

export const FieldLabelBase: TVFC<TProps> = ({
  label,
  subLabel,
  emphasisSubLabel,
}): JSX.Element => {
  const { tryRenderIfTrue } = useRender();
  const { c, tryStyleIfTrue } = useStyles();

  return (
    <E.Container className={s.FieldLabelBase}>
      <E.Span className={s.FieldLabelBase__Inner}>
        {label}

        {tryRenderIfTrue(
          Boolean(subLabel),

          <E.Span
            className={c(
              s.FieldLabelBase__SubLabel,
              tryStyleIfTrue(s.FieldLabelBase__SubLabel_em, emphasisSubLabel)
            )}
          >
            {subLabel}
          </E.Span>
        )}
      </E.Span>
    </E.Container>
  );
};

export default FieldLabelBase;
