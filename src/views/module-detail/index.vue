<template>
	<n-space vertical>
		<n-button type="success" style="width: 150px; margin: 20px 0 20px 20px" @click="onBack">
		返回操作日志
	</n-button>
	<n-grid :x-gap="16" :y-gap="16" :item-responsive="true">
		<n-grid-item span="0:24 640:24 1024:10">
			<n-card :bordered="false" class="rounded-8px shadow-sm">
				<div ref="lineRef" class="w-full h-360px"></div>
			</n-card>
		</n-grid-item>
	</n-grid>
	</n-space>
</template>

<script setup lang="tsx">
import { ref } from "vue";
import type { Ref } from "vue";
import { routeName } from '@/router';
import { type ECOption, useEcharts } from "@/composables";
import { useRouterPush } from '@/composables';
const { routerPush } = useRouterPush();
const lineOptions = ref<ECOption>({
	title: {
		text: "模型识别率",
	},
	tooltip: {
		trigger: "axis",
		axisPointer: {
			type: "cross",
			label: {
				backgroundColor: "#6a7985",
			},
		},
	},
	legend: {
		data: ["类型1", "类型2", "类型3"],
	},
	grid: {
		left: "3%",
		right: "4%",
		bottom: "3%",
		containLabel: true,
	},
	xAxis: [
		{
			type: "category",
			boundaryGap: false,
			data: ["2/1", "2/2", "2/3", "2/4", "2/5", "2/6", "2/7"],
		},
	],
	yAxis: {},
	series: [
		{
			color: "#8e9dff", // random
			name: "类型1", // 遍历legend
			type: "line",
			smooth: true,
			areaStyle: {
				color: {
					type: "linear",
					x: 0,
					y: 0,
					x2: 0,
					y2: 1,
					colorStops: [],
				},
			},
			emphasis: {
				focus: "series",
			},
			data: [0.14, 0.18, 0.26, 0.37, 0.35, 0.32, 0.37],
		},
		{
			color: "#26deca",
			name: "类型2",
			type: "line",
			smooth: true,
			areaStyle: {
				color: {
					type: "linear",
					x: 0,
					y: 0,
					x2: 0,
					y2: 1,
					colorStops: [],
				},
			},
			emphasis: {
				focus: "series",
			},
			data: [0.44, 0.62, 0.77, 0.7, 0.54, 0.44, 0.67],
		},
		{
			color: "red",
			name: "类型3",
			type: "line",
			smooth: true,
			areaStyle: {
				color: {
					type: "linear",
					x: 0,
					y: 0,
					x2: 0,
					y2: 1,
					colorStops: [],
				},
			},
			emphasis: {
				focus: "series",
			},
			data: [0.4, 0.48, 0.66, 0.71, 0.52, 0.72, 0.7],
		},
	],
}) as Ref<ECOption>;
const { domRef: lineRef } = useEcharts(lineOptions);

const onBack = ()=>{
	routerPush({ name: routeName('module-log'), query: { name: 'abc' }});
}
</script>

<style scoped></style>
