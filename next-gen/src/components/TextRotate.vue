<script setup lang="ts">
import { onMounted, ref } from "vue";

const props = defineProps({
  dataRotate: {
    type: Array<string>,
    required: true,
  },
  dataPeriod: {
    type: Number,
    default: 2000,
  },
  className: {
    type: String,
    default: "",
  },
});

const text = ref("");
const timeoutId = ref(0);

const rotate = (textIncoming: string, deleting: boolean, loopNum: number) => {
  var fullText = props.dataRotate[loopNum % props.dataRotate.length];
  var futurText = fullText.substring(
    0,
    textIncoming.length + (deleting ? -1 : +1)
  );
  text.value = futurText;
  var delta = 200 - Math.random() * 100;
  if (deleting) {
    delta /= 2;
  }
  if (!deleting && futurText === fullText) {
    delta = props.dataPeriod;
    deleting = true;
  } else if (deleting && futurText === "") {
    deleting = false;
    loopNum++;
    delta = 500;
  }
  timeoutId.value = setTimeout(() => {
    rotate(futurText, deleting, loopNum);
  }, delta);
};

const stopRotate = () => {
  clearTimeout(timeoutId.value);
};

onMounted(() => {
  rotate(text.value, false, 0);
  return stopRotate;
});
</script>

<template>
  <div class="textRotateWrapper" :class="className">
    <span class="textRotate">
      <span class="textWrap">{{ text }}</span>
    </span>
  </div>
</template>
