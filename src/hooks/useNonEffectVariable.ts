import { useEffect, useRef } from 'react';

type ChangeEvent<Variable> = {
  value: Variable;
  oldValue: Variable;
  original: Variable;
};

export const useNonEffectVariable = <Variable = unknown>(
  variable: Variable,
  ctx?: { onChange: (event: ChangeEvent<Variable>) => void }
) => {
  const originalVariableRef = useRef(variable);
  const variableRef = useRef(variable);
  const onChangeRef = useRef(ctx?.onChange);

  useEffect(() => {
    onChangeRef.current = ctx?.onChange;
  }, [ctx?.onChange]);

  return {
    get value() {
      return variableRef.current;
    },

    set value(value: Variable) {
      const oldValue = variableRef.current;
      const original = originalVariableRef.current;

      if (value === oldValue) {
        return;
      }

      variableRef.current = value;

      if (onChangeRef.current) {
        onChangeRef.current({ value, oldValue, original });
      }
    },

    get original() {
      return originalVariableRef.current;
    },

    set onChange(onChange: (event: ChangeEvent<Variable>) => void) {
      onChangeRef.current = onChange;
    },

    reset: () => {
      variableRef.current = originalVariableRef.current;
    },
  };
};
