<template>
  <Page>
    <ActionBar title="Library" />
    <StackLayout>
      <Label text="Welcome to Apple Music Clone" class="text-center p-4" />
    </StackLayout>
  </Page>
</template>

<script lang="ts">
import Vue from "nativescript-vue";

export default Vue.extend({
  data() {
    return {};
  },
  created() {
    console.log("Home component created");
  },
});
</script>