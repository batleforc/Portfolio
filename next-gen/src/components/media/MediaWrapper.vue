<script setup lang="ts">
import type { Media } from "@/model/Properties";
import MediaItem from "./MediaItem.vue";

defineProps<{
  medias: Media[];
}>();
</script>

<template>
  <div class="coverMedia">
    <MediaItem v-for="media in medias" :key="media.link" :media="media" />
  </div>
</template>
