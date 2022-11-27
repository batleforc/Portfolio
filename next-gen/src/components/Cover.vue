<script setup lang="ts">
import TextRotate from "./TextRotate.vue";
import properties from "@/properties";
import MediaWrapper from "./media/MediaWrapper.vue";
import IcoMoonSvgVue from "./IcoMoonSvg.vue";

const eventDownWard = (attributes: string) => (e: Event) => {
  if (!e) return;
  e.preventDefault();
  document.querySelector(attributes)?.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <div id="cover" class="coverPage">
    <div class="coverContent">
      <h1 class="coverContentTitle">{{ properties.name }}</h1>
      <TextRotate
        :data-rotate="properties.attributes"
        class-name="justify-center place-items-center m-4"
      />
      <MediaWrapper :medias="properties.media" />
    </div>
    <a href="#about" @click="eventDownWard('#about')">
      <IcoMoonSvgVue
        icon="chevron-down"
        class-name="ico-next-content animate-bounce"
      />
    </a>
  </div>
</template>
