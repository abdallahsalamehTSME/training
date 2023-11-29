<template>
  <app-page-content>
    <h1>{{ getIntlNumberFormat('hfijsidj', intlNumberFormatStyleEnum.compact) }}</h1>
  </app-page-content>
</template>

<script lang="ts" setup>
import { getIntlNumberFormat } from '@/app/domain/def/get-intl-number-format'
import { intlNumberFormatStyleEnum } from '@/app/domain/enums/intl-number-format-style'
</script>
