<template>
  <v-modal v-model="isVisible" :centered="isCentered" :static="isStatic" :drawer="isDrawer" @dismiss="cancel">
    <template #header>
      <h5 class="my-2">modal manager test</h5>
    </template>
    <template #body>
      <transition name="fade" mode="out-in" appear>
        <v-async v-model="asyncModel" :promise="userService.getUserAsync">
          <template #busy>
            <div class="d-flex justify-content-center">
              <div class="m-auto">
                <v-spinner size="sm" accent="danger" />
              </div>
            </div>
          </template>

          <template #ready="{ result: { success, fail } }">
            <div v-if="success">
              <v-row>
                <v-col>
                  <v-input
                    v-model.trim="userService.dc.model.userName"
                    class="mb-0"
                    label="name"
                    placeholder="enter name"
                    :state="userService.validations.states.name"
                    :validation-messages="userService.validations.errorMessages.name"
                    @update:modelValue="
                      userService.validations.states.name == ValidationStateEnum.invalid
                        ? ((userService.validations.states.name = ValidationStateEnum.unset), (userService.validations.errorMessages.name = []))
                        : ''
                    "
                  />
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-input
                    v-model.trim="userService.dc.model.userEmail"
                    class="mb-0"
                    label="email"
                    :placeholder="'enter email'"
                    :state="userService.validations.states.email"
                    :validation-messages="userService.validations.errorMessages.email"
                    @update:modelValue="
                      userService.validations.states.email == ValidationStateEnum.invalid
                        ? ((userService.validations.states.email = ValidationStateEnum.unset), (userService.validations.errorMessages.email = []))
                        : ''
                    "
                  />
                </v-col>
              </v-row>
            </div>
            <div v-else-if="fail" class="d-flex justify-content-center mt-5">
              <v-button @click="asyncModel = true">Retry</v-button>
            </div>
          </template>
        </v-async>
      </transition>
    </template>
    <template #footer>
      <!-- :disabled="!userService.dc.isDirty.value" -->
      <v-button
        accent="default"
        @click="userService.dc.rollback(), (userService.validations.states.name = ValidationStateEnum.unset), (userService.validations.states.email = ValidationStateEnum.unset), cancel()"
        class="mr-2"
      >
        cancel
      </v-button>
      <v-button @click="() => userService.createUser()"> <span>save</span></v-button>
    </template>
  </v-modal>
</template>

<script setup lang="ts">
import { ref, toRef, watch } from 'vue'
import { props as formModalProps } from './def/form-modal'
import { IoC } from 'cubes'
import { IUserService } from '../meta/i-user-service'
import { serviceMap } from '@/service'
import { ValidationStateEnum } from '../../presentation/components/meta/validation'

const props = defineProps(formModalProps)
const userService = IoC.DI().resolve<IUserService>(serviceMap.myUserService.key)
const isVisible = toRef(props, 'isVisible')
const cancel = toRef(props, 'cancel')
const yes = toRef(props, 'yes')
const asyncModel = ref(false)

watch(
  () => userService.validations.saved,
  _to => {
    yes.value()
  }
)
</script>

<style scoped></style>
