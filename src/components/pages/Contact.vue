<template>
  <t-page class="p-contact">
    <div class="f-flex-1"></div>

    <div class="m-post f-contact">
      <div class="m-content f-post">
        <div class="f-pb-4">
          <a-input v-model="name" label="Name" required/>
          <a-input v-model="email" label="Email" required/>
        </div>
        <div class="f-text-red">{{ error }} &nbsp;</div>
        <a-input v-model="message" class="f-mt-4" label="Message"/>
        <div class="f-text-right f-py-3">
          <a-button @click.native="validate()">
            Send
          </a-button>
        </div>
      </div>
    </div>

    <div class="f-flex-1"></div>
  </t-page>
</template>

<script>

import TPage from '../templates/Page'
import AInput from '../atoms/Input'
import AButton from '../atoms/Button'

export default {
  name: 'p-contact',
  components: {AButton, AInput, TPage},
  data: () => ({
    name: '',
    email: '',
    message: '',
    error: '',
  }),
  methods: {
    validate() {
      this.error = ''

      if (this.name_validator() === false) {
        this.error = 'Field name is required'
      }
      else if (this.email_validator() === false) {
        this.error = 'Field email is not correct'
      }
    },
    name_validator() {
      return this.name.length > 0
    },
    email_validator() {
      const reg = new RegExp('(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])')

      return reg.test(this.email)
    },
  }
}
</script>