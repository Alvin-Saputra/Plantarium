<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true,

    },
    subtitle: {
        type: String,
        required: true,
        default: undefined // Nilai default jika parent tidak mengirim apa-apa
    },

    imageUrl: {
        type: String,
        required: true,
        default: undefined // Nilai default jika parent tidak mengirim apa-apa
    }
});

</script>


<template>
  <v-card class="mx-auto rounded-lg" max-width="400" elevation="1">
    <v-img
      class="mx-auto rounded" 
      height="250"

      :src="imageUrl"
      cover
    ></v-img>

    <v-card-title class="text-center">
      {{ props.title }}
    </v-card-title>

    <v-card-subtitle class="text-center">
      {{ props.subtitle }}
    </v-card-subtitle>

    <v-card-text>
      <div>Whitehaven Beach</div>
      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" text="Share"></v-btn>
      <v-btn color="orange" text="Explore"></v-btn>
    </v-card-actions>
  </v-card>
</template>

<!-- <template>
    <v-card class="mx-auto rounded-xl" width="500" height="400">
    <v-img
      height="100px"
      width="100px"
      :src="imageUrl"
      contain
    ></v-img>
  

        <v-card-title>
            {{ props.title }}
        </v-card-title>

        <v-card-subtitle>
           {{ props.subtitle }}
        </v-card-subtitle>

        <v-card-actions>
            <v-btn color="orange-lighten-2" text="Explore"></v-btn>

            <v-spacer></v-spacer>

            <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
        </v-card-actions>


    </v-card>
</template> -->





<style lang="scss" scoped></style>