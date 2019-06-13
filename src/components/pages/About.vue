<template>
  <t-simple class="p-about" title="About">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In erat sem, lobortis a diam sit amet, laoreet ullamcorper magna. Integer neque mauris, accumsan non ligula sed, ultricies sagittis ligula. Aliquam venenatis nisl vel egestas tristique. Sed ornare dictum orci et elementum. Mauris quis ex ac dui fermentum pharetra. Aliquam pellentesque ullamcorper eleifend. Sed quis porttitor sapien.
  </t-simple>
</template>

<script>
import TSimple from '#/templates/Simple'
export default {
  name: 'p-about',
  components: {TSimple},
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