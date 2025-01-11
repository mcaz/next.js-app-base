import { Button } from '@/components/atoms/Button/Button';
import { C } from '@/components/controls';
import { Form, SelectField, TextField } from '@/components/forms';
import { Container, Grid } from '@/components/primitives';
import { useEnum } from '@/hooks';
import { FieldValues } from 'react-hook-form';
import { TProps } from './DynamicForm.module.types';

export function DynamicForm<T extends FieldValues>({
  fields,
  control,
  onSubmit,
  direction = 'column',
  actionDirection = 'column',
}: TProps<T>) {
  const { GridEnum } = useEnum();

  const actionColRange =
    direction === 'column' ? GridEnum.COL_RANGE_12 : undefined;

  return (
    <Form>
      <Container as={Grid} container spacing={4} flexDirection={direction}>
        <C.ArrayMap
          array={fields}
          render={(field) => {
            const { type, name, label, placeholder, gridRange } = field;
            const colRange =
              actionDirection === 'column' ? GridEnum.COL_RANGE_12 : gridRange;

            return (
              <Grid item xs={colRange}>
                <C.Switch condition={type}>
                  {/* === TextField === */}

                  <C.Switch.Case value="text">
                    <TextField
                      name={name}
                      control={control}
                      label={label}
                      placeholder={placeholder}
                      fullWidth
                    />
                  </C.Switch.Case>

                  <C.Switch.Case value="number">
                    <TextField
                      type="number"
                      name={name}
                      label={label}
                      control={control}
                      placeholder={placeholder}
                      fullWidth
                    />
                  </C.Switch.Case>

                  <C.Switch.Case value="password">
                    <TextField
                      type="password"
                      name={name}
                      label={label}
                      control={control}
                      placeholder={placeholder}
                      fullWidth
                    />
                  </C.Switch.Case>

                  <C.Switch.Case value="email">
                    <TextField
                      type="email"
                      name={name}
                      label={label}
                      control={control}
                      placeholder={placeholder}
                      fullWidth
                    />
                  </C.Switch.Case>

                  {/* === SelectField === */}

                  <C.Switch.Case value="select">
                    {field.type === 'select' && (
                      <SelectField
                        type="email"
                        name={name}
                        label={label}
                        control={control}
                        placeholder={placeholder}
                        options={field?.options}
                        fullWidth
                      />
                    )}
                  </C.Switch.Case>
                </C.Switch>
              </Grid>
            );
          }}
        />

        <Grid item xs={actionColRange}>
          <Button type="button" onClick={onSubmit}>
            submit
          </Button>
        </Grid>
      </Container>
    </Form>
  );
}
