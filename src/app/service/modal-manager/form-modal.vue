<template>
  <v-modal :modelValue="isVisible" :centered="isCentered" :static="isStatic" :drawer="isDrawer" @dismiss="cancel">
    <template #header>
      <h5 class="my-2">modal manager test</h5>
    </template>
    <template #body>
      <UserForm :hasSaveCancel="false" :cancel="cancel" :yes="yes"> </UserForm>
    </template>
    <template #footer>
      <v-button accent="default" @click="cancel()" class="mr-2"> cancel </v-button>
      <v-button @click="saveAsync" :disabled="!userService.dc.isDirty.value"> <span>save</span></v-button>
    </template>
  </v-modal>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import { props as formModalProps } from './def/form-modal'
import { IoC } from 'cubes'
import { IUserService } from '../meta/i-user-service'
import { serviceMap } from '@/service'
import UserForm from '../../presentation/components/user-from.vue'
const props = defineProps(formModalProps)
const userService = IoC.DI().resolve<IUserService>(serviceMap.myUserService.key)
const { cancel, yes } = toRefs(props)

const saveAsync = async () => {
  try {
    await userService.createUser()()
    yes.value()
  } catch (error) {
    console.log('error')
  }
}
</script>
