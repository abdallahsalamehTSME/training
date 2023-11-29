<template>
  <app-page-content>
    <!-- <h1>Welcome to user</h1> -->
    <!-- <user-form :userName="userName" :userEmail="userEmail" @saved="saved = !saved" />
    <User-list></User-list> -->
    <!-- <v-button @click="openFormModalAsync">open manager</v-button> -->

    <h1>{{ getIntlNumberFormat(lang, 123456.789) }}</h1>
  </app-page-content>
</template>

<script lang="ts" setup>
import { IoC } from 'cubes'
import { serviceMap } from '@/service'
// import UserForm from '../../components/user-from'
// import UserList from '../../components/user-list.vue'
import { IAppService } from '@/app/service/meta/i-app-service'
import { computed, onMounted } from 'vue'
// import { intlLocalsListEnum } from '../../components/def/intl-number-format'

const appService = IoC.DI().resolve<IAppService>(serviceMap.AppService.key)
const numberFormatConfig = appService.application.config.numberFormat
// const userName = ref(''),
//   userEmail = ref(''),
//   saved = ref(false)

// const openFormModalAsync = async () => {
//   const result = await appService.openFormModalAsync({
//     isDrawer: false,
//     userName: 'abdlddd'
//   })
//   console.log('result', result)

//   return result
// }

const lang = computed(() => appService!.application.state.ui.culture.lang)

const getIntlNumberFormat = (localLang: string, number: string | number, NumberStyle?: 'currency' | 'whatever') => {
  switch (NumberStyle) {
    case 'currency':
      return new Intl.NumberFormat(numberFormatConfig[localLang].localeCode, { style: 'currency', currency: numberFormatConfig[localLang].currency }).format(+number)
    default:
      return new Intl.NumberFormat(numberFormatConfig[localLang].localeCode).format(+number)
  }
}

onMounted(() => {
  console.log('culturesConfigArray', numberFormatConfig)
})
</script>
