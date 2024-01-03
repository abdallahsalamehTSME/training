<template>
  <div class="mx-3">
    <v-async v-model="asyncModel" :promise="appService.getUserAsync">
      <template #busy>
        <div class="d-flex justify-content-center">
          <div class="m-auto">
            <v-spinner size="sm" accent="danger" />
          </div>
        </div>
      </template>

      <template #ready="{ result: { success, fail } }">
        <div v-if="success" class="mb-3">
          <v-row>
            <v-col>
              <v-input
                v-model.trim="appService.dc.model.userName"
                class="mb-0"
                label="name"
                placeholder="enter name"
                :state="appService.validations.states.name"
                :validation-messages="appService.validations.errorMessages.name"
                @update:modelValue="
                  appService.validations.states.name == ValidationStateEnum.invalid
                    ? ((appService.validations.states.name = ValidationStateEnum.unset), (appService.validations.errorMessages.name = []))
                    : ''
                "
              />
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-input
                v-model.trim="appService.dc.model.userEmail"
                class="mb-0"
                label="email"
                :placeholder="'enter email'"
                :state="appService.validations.states.email"
                :validation-messages="appService.validations.errorMessages.email"
                @update:modelValue="
                  appService.validations.states.email == ValidationStateEnum.invalid
                    ? ((appService.validations.states.email = ValidationStateEnum.unset), (appService.validations.errorMessages.email = []))
                    : ''
                "
              />
            </v-col>
          </v-row>
          <div v-if="hasSaveCancel" class="d-flex justify-content-end py-3">
            <v-button
              accent="default"
              @click="appService.dc.rollback(), (appService.validations.states.name = ValidationStateEnum.unset), (appService.validations.states.email = ValidationStateEnum.unset)"
              :disabled="!appService.dc.isDirty.value"
              class="mr-2"
            >
              cancel
            </v-button>
            <v-button @click="() => appService.createUser()" :disabled="!appService.dc.isDirty.value"> <span>save</span></v-button>
          </div>
        </div>
        <div v-else-if="fail" class="d-flex justify-content-center mt-5">
          <v-button @click="asyncModel = true">Retry</v-button>
        </div>
      </template>
    </v-async>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { IoC } from 'cubes'
import { serviceMap } from '@/service'
import { ValidationStateEnum } from './meta/validation'
import { IUserService } from '@/app/service/meta/i-user-service'
import { props as userFormProps } from './def/user-form'
const appService = IoC.DI().resolve<IUserService>(serviceMap.myUserService.key)
const emit = defineEmits(['saved'])
defineProps(userFormProps)
const asyncModel = ref(false)
</script>
