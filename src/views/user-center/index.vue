<template>
	<n-space vertical>
		<n-card>
			<n-space vertical style="gap: 20px">
				<n-space>
					<n-space style="display: flex; align-items: center">
						<n-space style="font-weight: bold">修改用户名:</n-space>
						<n-space>
							<n-input v-model:value="formData.newName"></n-input>
						</n-space>
					</n-space>
				</n-space>
				<n-space>
					<n-button @click="showModal = true" quaternary>修改密码</n-button>
				</n-space>
				<n-button type="primary" @click="onSubmit">保存</n-button>
			</n-space>
		</n-card>
		<n-modal v-model:show="showModal" preset="dialog">
			<n-form ref="formRef" :model="model" :rules="rules">
				<n-form-item path="password" label="输入新密码">
					<n-input
						v-model:value="model.password"
						type="password"
						@input="handlePasswordInput"
						@keydown.enter.prevent
						placeholder="输入新密码"
					/>
				</n-form-item>
				<n-form-item
					ref="rPasswordFormItemRef"
					first
					path="reenteredPassword"
					label="重复输入新密码"
				>
					<n-input
						v-model:value="model.reenteredPassword"
						:disabled="!model.password"
						type="password"
						@keydown.enter.prevent
						placeholder="重复输入新密码"
					/>
				</n-form-item>
			</n-form>
			<n-button @click="onSubmitModal">修改</n-button>
		</n-modal>
	</n-space>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
	FormInst,
	FormItemInst,
	FormItemRule,
	useMessage,
	FormRules,
} from "naive-ui";

const formData = ref({
	newName: "",
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
const formRef = ref<FormInst | null>(null);
const rPasswordFormItemRef = ref<FormItemInst | null>(null);
const message = useMessage();
const model = ref({
	password: "",
	reenteredPassword: "",
});
const showModal = ref(false);

const validatePasswordStartWith = (
	rule: FormItemRule,
	value: string,
): boolean => {
	return (
		!!model.value.password &&
		model.value.password.startsWith(value) &&
		model.value.password.length >= value.length
	);
};

const validatePasswordSame = (rule: FormItemRule, value: string): boolean => {
	return value === model.value.password;
};

const handlePasswordInput = () => {
	if (model.value.reenteredPassword) {
		rPasswordFormItemRef.value?.validate({ trigger: "password-input" });
	}
};

const handleValidateButtonClick = (e: MouseEvent) => {
	e.preventDefault();
	formRef.value?.validate((errors) => {
		if (!errors) {
			message.success("验证成功");
		} else {
			console.log(errors);
			message.error("验证失败");
		}
	});
};

const onUpdateUser = (userNo: string) => {
	if (userNo === "tab1") {
		// 调用nextTick
	}
};

const onSubmit = (tabNo: string) => {
	console.log(formData.value);
};

const onSubmitModal = () => {
	if (
		model.value?.password === model.value?.reenteredPassword &&
		model.value?.password !== ""
	) {
		// 提交
		showModal.value = !showModal.value;
	}
};
const rules: FormRules = {
	password: [
		{
			required: true,
			message: "请输入密码",
		},
	],
	reenteredPassword: [
		{
			required: true,
			message: "请再次输入密码",
			trigger: ["input", "blur"],
		},
		{
			validator: validatePasswordStartWith,
			message: "两次密码输入不一致",
			trigger: "input",
		},
		{
			validator: validatePasswordSame,
			message: "两次密码输入不一致",
			trigger: ["blur", "password-input"],
		},
	],
};
</script>
