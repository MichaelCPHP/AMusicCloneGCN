<template>
  <Page>
    <ActionBar title="Now Playing" />
    <GridLayout rows="*, auto, auto" class="full-player p-4">
      <StackLayout row="0" verticalAlignment="center">
        <Image :src="getArtworkUrl(track.ArtworkPath)" width="300" height="300" class="m-b-4" />
        <Label :text="track.TrackName" class="text-2xl font-bold text-center" />
        <Label :text="track.Artist" class="text-lg text-center" />
      </StackLayout>
      <GridLayout row="1" columns="auto, *, auto" class="m-y-4">
        <Label :text="currentTime" col="0" />
        <Slider v-model="progress" minValue="0" :maxValue="duration" col="1" />
        <Label :text="remainingTime" col="2" />
      </GridLayout>
      <GridLayout row="2" columns="*, auto, auto, auto, *" class="text-2xl">
        <Label :text="'fa-random' | fonticon" class="fa" col="0" />
        <Label :text="'fa-step-backward' | fonticon" class="fa" col="1" />
        <Label :text="isPlaying ? 'fa-pause' : 'fa-play' | fonticon" class="fa" col="2" @tap="togglePlay" />
        <Label :text="'fa-step-forward' | fonticon" class="fa" col="3" />
        <Label :text="'fa-repeat' | fonticon" class="fa" col="4" />
      </GridLayout>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
import Vue from "nativescript-vue";

export default Vue.extend({
  props: ['track'],
  data() {
    return {
      isPlaying: false,
      progress: 0,
      duration: 180, // Placeholder duration in seconds
    };
  },
  computed: {
    currentTime() {
      return this.formatTime(this.progress);
    },
    remainingTime() {
      return this.formatTime(this.duration - this.progress);
    }
  },
  methods: {
    getArtworkUrl(path) {
      return `https://gypsychristiannetwork.com/instachurch/${path.replace(/ /g, '%20')}`;
    },
    togglePlay() {
      this.isPlaying = !this.isPlaying;
      // Implement actual play/pause functionality
    },
    formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = Math.floor(seconds % 60);
      return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
  }
});
</script>