import { IAppService } from '@/app/service/meta/i-app-service'
import { serviceMap } from '@/service'
import { IoC } from 'cubes'
import { TIntlNumberFormatStyleEnum } from '../enums/intl-number-format-style'

const appService = IoC.DI().resolve<IAppService>(serviceMap.AppService.key)
const numberFormatConfig = appService.application.config.numberFormat
// gaurd on number
const localLang = appService!.application.state.ui.culture.lang
// const getIntlNumberFormat = (number: string | number, NumberStyle?: TIntlNumberFormatStyleEnum) => {

const getIntlNumberFormat = (number: number, NumberStyle?: TIntlNumberFormatStyleEnum) => {
  switch (NumberStyle) {
    case 'currency':
      return new Intl.NumberFormat(numberFormatConfig[localLang].localeCode, { style: 'currency', currency: numberFormatConfig[localLang].currency }).format(number)
    case 'percent':
      return new Intl.NumberFormat(numberFormatConfig[localLang].localeCode, { style: 'percent' }).format(number)
    case 'compact':
      return new Intl.NumberFormat(numberFormatConfig[localLang].localeCode, { notation: 'compact' }).format(number)
    default:
      return new Intl.NumberFormat(numberFormatConfig[localLang].localeCode).format(number)
  }
}

export { getIntlNumberFormat }
