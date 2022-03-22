export const envConfig = {
  env: process.env.NEXT_PUBLIC_ENV || '',
  timeZone: 'Asia/Tokyo',
} as const;

export default envConfig;
