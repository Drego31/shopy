<template>
  <t-page class="p-skicams">
    <m-post-cams-view
      v-for="(view, key) in listOfViews"
      :key="key"
      :name="view.name"
      :cams="view.cams"
    />
  </t-page>
</template>

<script>
import TPage from '../templates/Page'
import MPostCamsView from '../molecules/post/CamsView'

export default {
  name: 'p-skicams',
  components: {MPostCamsView, TPage},
  data: () => ({
    listOfViews: [
      {name: '', cams: [{url: ''}, {url: ''}]},
    ]
  }),
  mounted() {
    fetch('https://makevoid-skicams.p.mashape.com/cams.json', {
      method: 'GET',
      headers: {
        'X-Mashape-Key': 'kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw'
      },
    })
      .then(response => response.json())
      .then(jsonResponse => this.transformResponse(jsonResponse))
      .catch(() => undefined)
  },
  methods: {
    transformResponse(json) {
      const array = Object.keys(json).map(key => {
        json[key].cams = Object.keys(json[key].cams)
          .map(cams_key => json[key].cams[cams_key])
        return json[key]
      })
      this.listOfViews = array.filter(item => {
        return item.name === 'Passo dello Stelvio' || item.name === 'Bielmonte'
      })
    },
  },
}
</script>