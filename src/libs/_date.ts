import { configs } from '@/configs';
import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

export const TimezoneDate = (date: string | Date = new Date()) => {
  return utcToZonedTime(date, configs.app.timezone);
};

export const formatDate = (
  date: string | Date,
  dateFormat = configs.app.dateFormat.default
) => {
  return format(TimezoneDate(date), dateFormat);
};
