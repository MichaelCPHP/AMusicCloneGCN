<template>
  <Page>
    <ActionBar :title="artist" />
    <GridLayout rows="*, auto, auto">
      <ListView row="0" for="album in albums" @itemTap="onAlbumTap">
        <v-template>
          <GridLayout columns="auto, *" class="p-4">
            <Image :src="getArtworkUrl(album.ArtworkPath)" width="50" height="50" col="0" />
            <Label :text="album.TrackAlbumName" col="1" class="m-l-4 text-lg" />
          </GridLayout>
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
import TrackList from './TrackList.vue';
import { getAlbumsByArtist } from '../services/musicService';

export default Vue.extend({
  components: {
    MiniPlayer,
    BottomNavigation
  },
  props: ['artist'],
  data() {
    return {
      albums: [],
      currentTrack: null
    };
  },
  created() {
    this.loadAlbums();
  },
  methods: {
    async loadAlbums() {
      this.albums = await getAlbumsByArtist(this.artist);
    },
    onAlbumTap(event) {
      const album = this.albums[event.index];
      this.$navigateTo(TrackList, {
        props: { album }
      });
    },
    openFullPlayer() {
      // Navigate to full player
    },
    getArtworkUrl(path) {
      return `https://gypsychristiannetwork.com/instachurch/${path.replace(/ /g, '%20')}`;
    }
  }
});
</script>