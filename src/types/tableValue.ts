export enum RoleType {
  MASTER = 'MASTER',
  GENERAL = 'GENERAL',
}

export enum EventType {
  FEATURE = 'FEATURE',
  EVENT = 'EVENT',
}

export enum EventImageType {
  MAIN = 'MAIN',
  SUB = 'SUB',
}

export enum EventStatus {
  DRAFT = 'DRAFT',
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}

export const Role = {
  MASTER: 'MASTER',
  GENERAL: 'GENERAL',
} as const;
