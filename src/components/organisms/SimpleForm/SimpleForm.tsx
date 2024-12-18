import { C } from '@/components/controls';
import { DynamicForm } from '@/components/molecules';
import { Box, Typography } from '@/components/primitives';
import { useForm } from '@/hooks';
import { TFields, TProps } from './SimpleForm.module.types';

export function SimpleForm({ articleOptions }: TProps) {
  const { control, handleSubmit, fieldConfig } = useForm<TFields>(
    ({ yup, yupResolver, fieldConfig }) => {
      const { id, userName, countrySelect, articleSelect, common } =
        fieldConfig;
      const requireMsg = common.msg.require;

      return {
        resolver: yupResolver(
          yup.object().shape({
            id: id.validator.required(requireMsg),
            name: userName.validator.required(requireMsg),
            countrySelect: countrySelect.validator.required(requireMsg),
            articleSelect: countrySelect.validator.required(requireMsg),
          })
        ),
        defaultValues: {
          id: id.emptyData,
          name: userName.emptyData,
          countrySelect: countrySelect.emptyData,
          articleSelect: articleSelect.emptyData,
        },
      };
    }
  );

  const submit = async (fields: TFields) => {
    console.log('submit', fields);
  };

  return (
    <Box mb={3}>
      <Typography fontSize="1.25rem" fontWeight="bold">
        Form Sample
      </Typography>

      <C.Memoized
        as={DynamicForm}
        props={{
          control,
          direction: 'row',
          actionDirection: 'row',
          onSubmit: handleSubmit(submit),
          fields: [
            {
              name: 'id',
              type: fieldConfig.id.type,
              label: fieldConfig.id.label,
              placeholder: 'ID',
              gridRange: 4,
            },
            {
              name: 'name',
              type: fieldConfig.userName.type,
              label: fieldConfig.userName.label,
              placeholder: 'Name',
              gridRange: 4,
            },
            {
              name: 'countrySelect',
              type: fieldConfig.countrySelect.type,
              label: fieldConfig.countrySelect.label,
              gridRange: 4,
              placeholder: '選択してください',
              options: [
                { value: 'Japan', label: '日本' },
                { value: 'US', label: 'アメリカ' },
              ],
            },
            {
              name: 'articles',
              type: fieldConfig.articleSelect.type,
              label: fieldConfig.articleSelect.label,
              placeholder: '選択してください',
              options: articleOptions,
              gridRange: 12,
            },
          ],
        }}
      />
    </Box>
  );
}
