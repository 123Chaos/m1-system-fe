<template>
	<hover-container
		class="w-40px"
		:inverted="theme.header.inverted"
		tooltip-content="主题配置"
	>
		<dark-mode-switch
			:dark="theme.darkMode"
			class="wh-full"
			@click="onSwitch"
		/>
	</hover-container>
</template>

<script lang="ts" setup>
import { useAppStore, useThemeStore } from "@/store";

defineOptions({ name: "ThemeMode" });

const app = useAppStore();
const theme = useThemeStore();

const onSwitch = () => {
	app.$state.settingDrawerVisible = !app.$state.settingDrawerVisible;
};
</script>

<style scoped></style>
