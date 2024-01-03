<template>
  <app-page-content>
    <!-- <h1>{{ getIntlNumberFormat(1500, { style: 'currency', currency: numberFormatConfig[appService!.application.state.ui.culture.lang].currency }) }}</h1>
    <h1>{{ getIntlNumberFormat(1500, { style: 'currency' }) }}</h1> -->
  </app-page-content>
</template>

<script lang="ts" setup>
import { getIntlNumberFormat } from '@/app/domain/def/get-intl-number-format'
import { intlNumberFormatStyleEnum } from '@/app/domain/enums/intl-number-format-style'
import { IAppService } from '@/app/service/meta/i-app-service'
import { serviceMap } from '@/service'
import { IoC } from 'cubes'
const appService = IoC.DI().resolve<IAppService>(serviceMap.AppService.key)
const numberFormatConfig = appService.application.config.numberFormat
</script>
