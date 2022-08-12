<template>
  <q-page class="flex flex-center" padding>
    <q-card bordered class="my-card">
      <q-card-section>
        <div class="text-h5 text-center">Login Form</div>
      </q-card-section>
      <q-separator inset/>
      <q-card-section>
        <div class="q-pa-md" style="max-width: 400px">

          <q-form
            class="q-gutter-xs"
            @submit="onSubmit"
          >
            <q-input
              v-model="formData.email"
              :rules="[ val => val && val.length > 0 || 'Please enter your email']"
              filled
              label="Email *"
              lazy-rules
            >
              <template v-slot:prepend>
                <q-icon name="badge"/>
              </template>
            </q-input>
            <q-input
              v-model="formData.password"
              :rules="[ val => val && val.length > 0 || 'Please enter your password']"
              filled
              label="Password *"
              lazy-rules
              type="password"
            >
              <template v-slot:prepend>
                <q-icon name="key"/>
              </template>
            </q-input>

            <div>
              <q-btn class="full-width" color="primary" label="Login" rounded type="submit"/>
            </div>
          </q-form>

        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { api } from 'boot/axios'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'

const $q = useQuasar()
const router = useRouter()
const formData = ref({})

function onSubmit () {
  api.post('login', formData.value)
    .then(res => {
      localStorage.setItem('token', res.data.token)
      router.push({ name: 'DashboardPage' })
      $q.notify({
        color: 'green-4',
        position: 'top',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'User Logged In Successfully!'
      })
    })
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 450px
</style>
