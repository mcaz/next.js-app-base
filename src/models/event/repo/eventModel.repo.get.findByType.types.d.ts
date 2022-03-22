import { Vo } from '../eventModel.vo';

/**
 * @request
 */
export type TRequest = { type: NTableValue.EEventType };

/**
 * @response
 */
export type TResponse = { data: Vo[]; length: number };
