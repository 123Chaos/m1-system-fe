<template>
	<n-space class="overflow-hidden">
		<n-space class="search-form">
			<div class="item" v-for="item in searchFormConfig">
				<div class="tag">{{ item.tag }}</div>
				<n-input
					v-if="item.type === 'input'"
					:placeholder="'请输入' + item.tag"
					v-model:value="searchForm[item.value]"
					style="width: 150px"
				></n-input>
				<n-date-picker
					v-model:value="searchForm[item.value]"
					type="daterange"
					clearable
					v-if="item.type === 'date-picker'"
					style="width: 250px"
				/>
				<n-select
					v-if="item.type === 'select'"
					v-model:value="searchForm[item.value]"
					:options="item?.options"
					clearable
					style="width: 200px"
				></n-select>
			</div>
		</n-space>
		<n-space class="btn-group">
			<n-button @click="onSearch" type="primary">搜索</n-button>
			<n-button @click="onReset">重置</n-button>
			<n-button @click="onSeeMore" type="success" v-if="props?.more">查看更多</n-button>
		</n-space>
	</n-space>
</template>

<script setup lang="tsx">
import { ref } from "vue";
const props = defineProps(["searchFormConfig", "more"]);
const emit = defineEmits(["reset", "search", "more"]);
const searchFormConfig = props?.searchFormConfig;
const searchForm = ref({}) as any;

const onSearch = () => {
	emit("search", searchForm.value);
};

const onReset = () => {
	searchFormConfig.forEach((item: any) => {
		if (item?.type === "input" || item?.type === "select")
			searchForm.value[item?.value] = "";
		if (item?.type === "date-picker") searchForm.value[item?.value] = null;
	});
	emit("reset", searchForm.value);
};

const onSeeMore = () => {
	if (props?.more) {
		emit("more");
	}
};
onReset();
</script>

<style lang="scss">
.search-form {
	display: flex;
	gap: 20px;
	.item {
		display: flex;
		align-items: center;
		justify-content: center;
		.tag {
			margin-right: 20px;
		}
	}
}
</style>
