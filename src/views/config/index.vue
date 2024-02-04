<template>
	<n-space vertical>
		<n-tabs type="line" animated>
			<n-tab-pane name="tab1" tab="基本配置">
				<n-card>
					<n-space vertical style="gap: 20px">
						<n-space>
							<n-space style="display: flex; align-items: center">
								<n-space style="font-weight: bold">用户:</n-space>
								<n-space>
									<n-select
										v-model:value="formData.tab1.userName"
										:options="optionsUserName"
										style="width: 150px"
										@update:value="onUpdateUser('tab1')"
									/>
								</n-space>
							</n-space>
						</n-space>
						<n-space vertical>
							<n-space>
								<n-space style="font-weight: bold">主页通知:</n-space>
								<n-space>
									<n-switch v-model:value="formData.tab1.isOpenNotice">
										<template #checked> 已启用 </template>
										<template #unchecked> 已停用 </template>
									</n-switch>
								</n-space>
							</n-space>
							<n-space>
								<n-input
									v-model:value="formData.tab1.noticeContent"
									placeholder="请输入通知栏内容"
									type="textarea"
									style="width: 400px"
									:autosize="{
										minRows: 3,
										maxRows: 5,
									}"
									:disabled="!formData.tab1.isOpenNotice"
								/>
							</n-space>
						</n-space>
						<n-space>
							<n-space style="display: flex; align-items: center">
								<n-space style="font-weight: bold">上传间隔:</n-space>
								<n-space>
									<n-select
										v-model:value="formData.tab1.uploadInterval"
										:options="optionsTab1Interval"
										style="width: 150px"
									/>
								</n-space>
							</n-space>
						</n-space>
						<n-space>
							<n-space style="display: flex; align-items: center">
								<n-space style="font-weight: bold">任务分配:</n-space>
								<n-space>
									<n-select
										v-model:value="formData.tab1.mission"
										:options="optionsTab1Mission"
										style="width: 150px"
									/>
								</n-space>
							</n-space>
						</n-space>
						<n-button type="primary" @click="onSubmit('tab1')">保存</n-button>
					</n-space>
				</n-card>
			</n-tab-pane>
			<n-tab-pane name="tab2" tab="账户配置">
				<n-card>
					<n-space vertical style="gap: 20px">
						<n-space>
							<n-space style="display: flex; align-items: center">
								<n-space style="font-weight: bold">用户:</n-space>
								<n-space>
									<n-select
										v-model:value="formData.tab1.userName"
										:options="optionsUserName"
										style="width: 150px"
										@update:value="onUpdateUser('tab1')"
									/>
								</n-space>
							</n-space>
						</n-space>
						<n-space>
							<n-space style="display: flex; align-items: center">
								<n-space style="font-weight: bold">权限配置:</n-space>
								<n-space>
									<n-select
										v-model:value="formData.tab2.permission"
										:options="optionsTab2Permission"
										style="width: 150px"
									/>
								</n-space>
							</n-space>
						</n-space>
						<n-space>
							<n-space style="display: flex; align-items: center">
								<n-space style="font-weight: bold">账号状态:</n-space>
								<n-space>
									<n-switch v-model:value="formData.tab2.isStatusOn">
										<template #checked> 已启用 </template>
										<template #unchecked> 已停用 </template>
									</n-switch>
								</n-space>
							</n-space>
						</n-space>
						<n-button type="primary" @click="onSubmit('tab2')">保存</n-button>
					</n-space>
				</n-card>
			</n-tab-pane>
		</n-tabs>
	</n-space>
</template>

<script setup lang="tsx">
import { ref } from "vue";

const formData = ref({
	tab1: {
		isOpenNotice: true,
		noticeContent: "",
		uploadInterval: "0",
		userName: "0",
		mission: "0",
	},
	tab2: {
		userName: "0",
		permission: "0",
		isStatusOn: true,
	},
});
const optionsTab1Interval = [
	{
		label: "无间隔",
		value: "0",
	},
	{
		label: "1秒",
		value: "1",
	},
	{
		label: "3秒",
		value: "3",
	},
];
const optionsTab1Mission = [
	{
		label: "0张",
		value: "0",
	},
	{
		label: "10张",
		value: "10",
	},
	{
		label: "50张",
		value: "50",
	},
];
const optionsUserName = [
	{
		label: "全局",
		value: "0",
	},
	{
		label: "Ming",
		value: "1",
	},
	{
		label: "Super001",
		value: "2",
	},
	{
		label: "Admin002",
		value: "3",
	},
	{
		label: "User003",
		value: "4",
	},
];
const optionsTab2Permission = [
	{
		label: "User",
		value: "0",
	},
	{
		label: "Admin",
		value: "1",
	},
];

const onUpdateUser = (userNo: string) => {
	if (userNo === "tab1") {
		// 调用nextTick
	}
	if (userNo === "tab2") {
		// 调用nextTick
	}
};

const onSubmit = (tabNo: string) => {
	if (tabNo === "tab1") {
		console.log(formData.value.tab1);
	}
	if (tabNo === "tab2") {
		console.log(formData.value.tab2);
	}
};
</script>
