<template>
  <t-simple class="p-contact" :title="title" >
    <div class="f-text-center f-text-16">
      <div class="f-pb-2">divante@divante.pl</div>
      <div>tel 111 111 111</div>
      <div class="f-pb-2">tel 111 111 111</div>
      <div>Dmowskiego</div>
      <div>Wrocław</div>
    </div>
  </t-simple>
</template>

<script>

  import TPage from '#/templates/Page'
  import AInput from '#/atoms/Input'
  import AButton from '#/atoms/Button'
  import TSimple from '#/templates/Simple'

  export default {
    name: 'p-contact',
    components: {TSimple, AButton, AInput, TPage},
    data: () => ({
      title: 'Contact'
    }),
  }
</script>