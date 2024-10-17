<template>
  <Page>
    <ActionBar :title="album.TrackAlbumName" />
    <GridLayout rows="*, auto, auto">
      <ListView row="0" for="track in tracks" @itemTap="onTrackTap">
        <v-template>
          <Label :text="track.TrackName" class="p-4 text-lg" />
        </v-template>
      </ListView>
      <MiniPlayer row="1" v-if="currentTrack" :track="currentTrack" @tap="openFullPlayer" />
      <BottomNavigation row="2" />
    </GridLayout>
  </Page>
</template>

<script lang="ts">
import Vue from "nativescript-vue";
import MiniPlayer from './MiniPlayer.vue';
import BottomNavigation from './BottomNavigation.vue';
import FullPlayer from './FullPlayer.vue';
import { getTracksByAlbum } from '../services/musicService';

export default Vue.extend({
  components: {
    MiniPlayer,
    BottomNavigation
  },
  props: ['album'],
  data() {
    return {
      tracks: [],
      currentTrack: null
    };
  },
  created() {
    this.loadTracks();
  },
  methods: {
    async loadTracks() {
      this.tracks = await getTracksByAlbum(this.album.AlbumID);
    },
    onTrackTap(event) {
      this.currentTrack = this.tracks[event.index];
    },
    openFullPlayer() {
      this.$navigateTo(FullPlayer, {
        props: { track: this.currentTrack }
      });
    }
  }
});
</script>