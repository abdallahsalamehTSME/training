<template>
  <div>
    <v-async v-model="asyncModel" :promise="appService.getUsersAsync">
      <template #busy>
        <div class="d-flex justify-content-center">
          <div class="m-auto">
            <v-spinner size="sm" accent="danger" />
          </div>
        </div>
      </template>

      <template #ready="{ result: { success, fail } }">
        <table v-if="success" class="table dt-responsive nowrap w-100 dataTable dtr-inline">
          <thead>
            <td class="align-middle text-muted">.name</td>
            <td class="align-middle text-muted">email</td>
          </thead>
          <tbody>
            <tr v-for="item in success.slice((page - 1) * 5, (page - 1) * 5 + 5)" :key="success.userId">
              <td>{{ item.userName }}</td>
              <td>{{ item.userEmail }}</td>
            </tr>
          </tbody>
        </table>

        <div v-else-if="fail" class="d-flex justify-content-center mt-5">
          <v-button @click="asyncModel = true">Retry</v-button>
        </div>
        <v-paginator v-model="page" :total-pages="totalPages" :segment-size="5" :btn-props="{ modifier: 'outline', accent: 'primary', icon: true }" />
      </template>
    </v-async>
  </div>
</template>

<script setup lang="ts">
import { IoC } from 'cubes'
import { ref, toRefs, watch } from 'vue'
import { props as listProps } from './def/user-list'
import { serviceMap } from '@/service'
import { IUserService } from '@/app/service/meta/i-user-service'

const asyncModel = ref(false),
  appService = IoC.DI().resolve<IUserService>(serviceMap.myUserService.key),
  props = defineProps(listProps),
  { saved } = toRefs(props),
  page = ref(1),
  totalPages = ref(10)

watch(
  () => saved.value,
  () => {
    asyncModel.value = true
  }
)
</script>
