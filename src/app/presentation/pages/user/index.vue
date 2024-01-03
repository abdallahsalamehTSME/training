<template>
  <app-page-content>
    <v-button @click="openFormModalAsync">open manager</v-button>
  </app-page-content>
</template>

<script lang="ts" setup>
import { IoC } from 'cubes'
import { serviceMap } from '@/service'

import { IAppService } from '@/app/service/meta/i-app-service'

const appService = IoC.DI().resolve<IAppService>(serviceMap.AppService.key)

const openFormModalAsync = async () => {
  const result = await appService.openFormModalAsync({
    isDrawer: false
  })
  return result
}
</script>
