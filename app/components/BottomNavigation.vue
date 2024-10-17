<template>
  <GridLayout columns="*, *, *, *" rows="auto" class="bottom-nav p-2">
    <Label :text="'fa-music' | fonticon" class="fa text-center" col="0" />
    <Label :text="'fa-search' | fonticon" class="fa text-center" col="1" />
    <Label :text="'fa-heart' | fonticon" class="fa text-center" col="2" />
    <Label :text="'fa-user' | fonticon" class="fa text-center" col="3" />
  </GridLayout>
</template>

<script lang="ts">
import Vue from "nativescript-vue";

export default Vue.extend({});
</script>