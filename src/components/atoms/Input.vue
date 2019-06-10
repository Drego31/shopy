<template>
  <div class="f-relative">
    <label class="a-label f-input" :class="value ? 'f-small' : ''">
      {{ label }}
      <span v-if="required" class="f-text-red">*</span>
    </label>
    <input
      class="a-input f-relative"
      :type="type"
      v-model="v_model"
    />
  </div>
</template>

<script>
export default {
  name: 'a-input',
  props: {
    value: {type: String, default: ''},
    label: {type: String, default: ''},
    type: {type: String, default: 'text'},
    required: {type: Boolean, default: false},
  },
  computed: {
    v_model: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },

    }
  },
}
</script>