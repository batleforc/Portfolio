<script lang="ts" setup>
import type { Media } from "@/model/Properties";
import IcoMoonSvg from "../IcoMoonSvg.vue";

defineProps<{
  media: Media;
}>();
</script>

<template>
  <a
    :href="media.link.includes('/') ? media.link : `#${media.link}`"
    :target="media.link ? '_blank' : '_self'"
    rel="noopener noreferrer"
  >
    <IcoMoonSvg :icon="media.icon" class-name="ico-cover" />
  </a>
</template>
