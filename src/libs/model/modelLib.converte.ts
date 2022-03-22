import { ClassConstructor, plainToInstance } from 'class-transformer';

/**
 * VoをもとにDtoへ変換する
 *
 * @param vo  Vo
 * @param Dto Dtoクラス
 * @returns   Dto
 */
export const voToDto = <T>(vo: unknown, Dto: ClassConstructor<T>) => {
  return plainToInstance(Dto, vo);
};

/**
 * VoリストをもとにDtoリストへ変換する
 *
 * @param vos Voリスト
 * @param Dto Dtoクラス
 * @returns   Dtoリスト
 */
export const vosToDtos = <T>(vos: unknown[], Dto: ClassConstructor<T>) => {
  return vos.map((vo) => voToDto(vo, Dto));
};

/**
 * Voリストをもとに変換されたDtoリストのThunkを返す
 *
 * @param vos Voリスト
 * @param Dto Dtoクラス
 * @returns   () => Dtoリスト
 */
export const vosToDtosThunk = <T>(vos: unknown[], Dto: ClassConstructor<T>) => {
  return () => vos.map((vo) => voToDto(vo, Dto));
};
