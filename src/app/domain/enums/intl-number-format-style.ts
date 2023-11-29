enum intlNumberFormatStyleEnum {
  currency = 'currency',
  percent = 'percent',
  compact = 'compact'
}

type TIntlNumberFormatStyleEnum = keyof typeof intlNumberFormatStyleEnum

export { intlNumberFormatStyleEnum }
export type { TIntlNumberFormatStyleEnum }
