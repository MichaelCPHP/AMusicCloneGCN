<template>
  <GridLayout columns="auto, *, auto" rows="auto" class="mini-player p-2">
    <Image :src="getArtworkUrl(track.ArtworkPath)" width="40" height="40" col="0" />
    <StackLayout col="1" class="m-l-2">
      <Label :text="track.TrackName" class="font-bold" />
      <Label :text="track.Artist" class="text-sm" />
    </StackLayout>
    <Label :text="'fa-play' | fonticon" class="fa text-lg" col="2" />
  </GridLayout>
</template>

<script lang="ts">
import Vue from "nativescript-vue";

export default Vue.extend({
  props: ['track'],
  methods: {
    getArtworkUrl(path) {
      return `https://gypsychristiannetwork.com/instachurch/${path.replace(/ /g, '%20')}`;
    }
  }
});
</script>