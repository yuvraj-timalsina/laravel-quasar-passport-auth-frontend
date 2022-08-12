<template>
  <q-layout class="bg-grey-1" view="hHh lpR fFf">
    <q-header class="bg-white text-grey-8 q-py-xs" elevated height-hint="58">
      <q-toolbar>
        <q-btn
          aria-label="Menu"
          dense
          flat
          icon="menu"
          round
          @click="toggleLeftDrawer"
        />

        <q-btn v-if="$q.screen.gt.xs" :to="{name:'MainLayout'}" class="q-ml-xs" flat no-caps no-wrap target="_blank">
          <q-icon color="secondary" name="cruelty_free" size="3em"/>
          <q-toolbar-title class="text-weight-bold" shrink>
           {{ user.name }}
          </q-toolbar-title>
        </q-btn>

        <q-space/>

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn color="secondary" icon-right="logout" label="Logout" @click="logOut"/>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      class="bg-grey-2"
      show-if-above
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item v-ripple clickable>
            <q-item-section avatar>
              <q-icon color="secondary" name="laptop_windows"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Dashboard</q-item-label>
            </q-item-section>
          </q-item>
          <q-item v-ripple clickable>
            <q-item-section avatar>
              <q-icon color="secondary" name="checklist"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Todo</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { api } from 'boot/axios'
import { onMounted, ref } from 'vue'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'

const $q = useQuasar()
const leftDrawerOpen = ref(false)
const user = ref({})
const router = useRouter()

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

function logOut () {
  api.post('logout')
    .then(res => {
      localStorage.removeItem('token')
      router.push({ name: 'LoginPage' })
      $q.notify({
        color: 'red-4',
        position: 'top',
        textColor: 'white',
        icon: 'waving_hand',
        message: 'User Logged Out!'
      })
    })
}

/** get userDetail */
onMounted(() => {
  userDetail()
})

function userDetail () {
  api.post('user-detail')
    .then(res => {
      console.log(res.data.data.name)
      user.value = res.data.data
    })
    .catch(err => {
      console.log(err)
    })
}
</script>

<style lang="sass">

</style>
