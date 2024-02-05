<template>
	<n-space>
		<div style="height: 400px; width: 400px">
			<VueCropper
				ref="cropper"
				:img="option.img"
				:outputSize="option.size"
			0	:outputType="option.outputType"
			></VueCropper>
		</div>
	</n-space>
</template>

<script setup lang="ts">
import { ref } from "vue";
import "vue-cropper/dist/index.css";
import { VueCropper } from "vue-cropper";

const option = {
	img: "src/assets/pic1.jpg",
	size: 1,
	outputType: "png",
};
const cropper = ref(null);
</script>
