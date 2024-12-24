import { FieldTypeEnum } from '@/types/enums';
import * as yup from 'yup';

export const form = {
  field: {
    get common() {
      return {
        msg: {
          require: '必須事項です',
          min(num: number) {
            return `${num}以上入力してください`;
          },
          max(num: number) {
            return `${num}以内で入力してください`;
          },
        },
      };
    },

    get id() {
      return {
        type: FieldTypeEnum.TEXT,
        label: 'ユーザーID',
        emptyData: '',
        validator: yup.string().max(10, this.common.msg.max(10)),
      };
    },

    get userName() {
      return {
        type: FieldTypeEnum.TEXT,
        label: 'ユーザー名',
        emptyData: '',
        validator: yup.string().max(30, this.common.msg.max(30)),
      };
    },

    get countrySelect() {
      return {
        type: FieldTypeEnum.SELECT,
        label: '国',
        emptyData: '',
        validator: yup.string(),
      };
    },

    get articleSelect() {
      return {
        type: FieldTypeEnum.SELECT,
        label: '記事',
        emptyData: '',
        validator: yup.string(),
      };
    },
  },
} as const;
