<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  icon: string;
  className?: string;
}>();

const classObject = computed(() => ({
  [`ico-${props.icon}`]: true,
  [props.className || ""]: props.className !== undefined,
}));
</script>

<template>
  <svg :class="classObject" class="ico">
    <use :href="'/icon/symbol-defs.svg#ico-' + icon" />
  </svg>
</template>
