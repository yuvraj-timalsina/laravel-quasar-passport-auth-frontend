<template>
  <q-layout class="bg-grey-1" view="hHh lpR fFf">
    <q-header class="bg-white text-grey-8 q-py-xs" elevated height-hint="58">
      <q-toolbar>

        <q-btn v-if="$q.screen.gt.xs" class="q-ml-xs" flat no-caps no-wrap>
          <q-icon color="secondary" name="cruelty_free" size="28px"/>
          <q-toolbar-title class="text-weight-bold" shrink>
            Quasar App
          </q-toolbar-title>
        </q-btn>

        <q-space/>
        <q-tabs shrink stretch inline-label>
          <q-tab icon="house" name="home" label="Home" class="text-secondary"/>
          <q-tab icon="diversity_1" name="about" label="About" />
          <q-tab icon="photo_library" name="gallery" label="Gallery" />
          <q-tab icon="newspaper" name="blog" label="Blog" />
          <q-tab icon="contact_support" name="faqs" label="FAQs" />
        </q-tabs>
        <q-space/>

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn icon-right="login" :to="{name: 'LoginPage'}" class="q-mr-sm" color="negative" label="Login"/>
          <q-btn icon-right="key" :to="{name: 'RegisterPage'}" color="secondary" label="Register"/>
        </div>
      </q-toolbar>
    </q-header>
  </q-layout>
</template>

<script setup>

</script>

<style lang="sass">

</style>
