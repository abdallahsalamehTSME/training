<template>
  <app-page-content>
    <h1>Welcome to user</h1>
    <user-form :userName="userName" :userEmail="userEmail" @saved="saved = !saved" />
    <User-list></User-list>
    <v-button @click="openFormModalAsync">open manager</v-button>
  </app-page-content>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { IoC } from 'cubes'
import { serviceMap } from '@/service'
import UserForm from '../../components/user-from'
import UserList from '../../components/user-list.vue'
import { IAppService } from '@/app/service/meta/i-app-service'

const appService = IoC.DI().resolve<IAppService>(serviceMap.AppService.key)

const userName = ref(''),
  userEmail = ref(''),
  saved = ref(false)

const openFormModalAsync = async () => {
  return await appService.formModalAsync({
    isDrawer: false,
    isVisible: true,
    userName: 'abdlddd'
  })
}
</script>
