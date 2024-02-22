<template>
  <n-popover class="!p-0" trigger="click" placement="bottom">
    <template #trigger>
      <hover-container tooltip-content="消息通知" :inverted="theme.header.inverted" class="relative w-40px h-full">
        <icon-clarity:notification-line class="text-18px" />
        <n-badge
          :value="count"
          :max="99"
          :class="[count < 10 ? '-right-2px' : '-right-10px']"
          class="absolute top-10px"
        />
      </hover-container>
    </template>
    <n-tabs
      v-model:value="currentTab"
      :class="[isMobile ? 'w-276px' : 'w-360px']"
      type="line"
      justify-content="space-evenly"
    >
      <n-tab-pane v-for="(item, index) in tabData" :key="item.key" :name="index">
        <template #tab>
          <div class="flex-x-center items-center" :class="[isMobile ? 'w-92px' : 'w-120px']">
            <span class="mr-5px">{{ item.name }}</span>
            <n-badge
              v-bind="item.badgeProps"
              :value="item.list.filter(message => !message.isRead).length"
              :max="99"
              show-zero
            />
          </div>
        </template>
        <loading-empty-wrapper
          class="h-360px"
          :empty="item.list.length === 0"
          :loading="false"
          placeholder-class="bg-$n-color transition-background-color duration-300 ease-in-out"
        >
          <message-list :list="item.list" @read="handleRead" />
        </loading-empty-wrapper>
      </n-tab-pane>
    </n-tabs>
    <div v-if="showAction" class="flex border-t border-$n-divider-color cursor-pointer">
      <div class="flex-1 text-center py-10px" @click="handleClear">清空</div>
      <div class="flex-1 text-center py-10px border-l border-$n-divider-color" @click="handleAllRead">全部已读</div>
    </div>
  </n-popover>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useThemeStore } from '@/store';
import { useBasicLayout } from '@/composables';
import MessageList from './message-list.vue';

defineOptions({ name: 'SystemMessage' });

const theme = useThemeStore();
const { isMobile } = useBasicLayout();

const currentTab = ref(0);

const tabData = ref<App.MessageTab[]>([
  {
    key: 1,
    name: '通知',
    badgeProps: { type: 'warning' },
    list: [{ id: 1, icon: 'ri:message-3-line', title: '暴力开发中，请关注Ming的发量', date: '2022-06-17' }]
  },
  {
    key: 2,
    name: '消息',
    badgeProps: { type: 'error' },
    list: [
      {
        id: 1,
        title: '项目动态',
        svgIcon: 'avatar',
        description: '暴力开发中',
        date: '2021-11-07 22:45:32'
      }
    ]
  }
]);

const count = computed(() => {
  return tabData.value.reduce((acc, cur) => {
    return acc + cur.list.filter(item => !item.isRead).length;
  }, 0);
});

const showAction = computed(() => tabData.value[currentTab.value].list.length > 0);

function handleRead(index: number) {
  tabData.value[currentTab.value].list[index].isRead = true;
}

function handleAllRead() {
  tabData.value[currentTab.value].list.forEach(item => Object.assign(item, { isRead: true }));
}

function handleClear() {
  tabData.value[currentTab.value].list = [];
}
</script>
<style scoped></style>
