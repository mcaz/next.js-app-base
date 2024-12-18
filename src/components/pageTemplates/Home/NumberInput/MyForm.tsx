// フォームの実装例
import { useForm } from 'react-hook-form';
import { NumberField } from './NumberField';

interface FormValues {
  amount: number; // 数値型に変更
}

export const MyForm = () => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      // amount: 0,
    },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log('data', data); // 数値型として保持された値が出力される
      })}
    >
      <NumberField
        name="amount"
        control={control}
        commaPosition={2}
        decimalPlaces={3}
        maxDigits={15}
        disabled={false}
      />

      <button type="submit">submit</button>
    </form>
  );
};
