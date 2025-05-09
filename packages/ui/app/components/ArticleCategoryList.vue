<script setup lang="ts">
import type { IArticleCategoryListItem, IArticleCategoryListProps } from '@/types'

const Props = defineProps<IArticleCategoryListProps>()

const emit = defineEmits<IArticleCategoryListEmits>()

type ListItem = IArticleCategoryListItem

interface IArticleCategoryListEmits {
  (e: 'clickItem', item: ListItem, title: string): void
  (e: 'clickCategory', item: ListItem, category: string): void
  (e: 'clickWriter', item: ListItem, title: string): void
  (e: 'clickDelete', item: ListItem, title: string): void
  (e: 'clickCopy', item: ListItem, title: string): void
  (e: 'clickShare', item: ListItem, title: string): void
}

function handleClickItem(item: ListItem, title: string) {
  emit('clickItem', item, title)
}

function handleClickCategory(item: ListItem, category: string) {
  emit('clickCategory', item, category)
}

function handleClickWriter(item: ListItem, title: string) {
  emit('clickWriter', item, title)
}

function handleClickDelete(item: ListItem, title: string) {
  emit('clickDelete', item, title)
}

function handleClickCopy(item: ListItem, title: string) {
  emit('clickCopy', item, title)
}

function handleClickShare(item: ListItem, title: string) {
  emit('clickShare', item, title)
}
</script>

<template>
  <main class="container mx-auto p-2">
    <div v-for="(item, index) in Props.list" :key="item.category" class="flex group/list hover:bg-gray-100">
      <button
        class="w-[30px] cursor-pointer text-center p-1 text-main-t border-p border-1 transition-colors duration-300 group/list-hover:text-blue-500"
        :class="{
          'border-t-0': index !== 0,
        }" @click="handleClickCategory(item, item.category)"
      >
        {{ item.category }}
      </button>
      <div class="flex-1 flex flex-col">
        <div
          v-for="title in item.titles" :key="title" class="
          p-1 border-p border-1 ml-[-1px] mb-[-1px] last:mb-0 transition-all duration-300 hover:bg-gray-50 hover:border-1 cursor-pointer hover-effect
         flex gap-3
         group/title
          " :class="{
            'border-t-0': index !== 0,
        }"
        >
          <div @click="handleClickItem(item, title)">
            {{ title }}
          </div>
          <div class="hidden group-hover/title:flex-inline gap-1">
            <ArtivleCategoryListBtn @click="handleClickWriter(item, title)">
              生成
              <i class="i-mdi:pencil" />
            </ArtivleCategoryListBtn>
            <ArtivleCategoryListBtn @click="handleClickDelete(item, title)">
              删除
              <i class="i-mdi:delete" />
            </ArtivleCategoryListBtn>
            <ArtivleCategoryListBtn @click="handleClickCopy(item, title)">
              复制
              <i class="i-mdi:content-copy" />
            </ArtivleCategoryListBtn>
            <ArtivleCategoryListBtn @click="handleClickShare(item, title)">
              分享
              <i class="i-mdi:share" />
            </ArtivleCategoryListBtn>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.hover-effect {
  transform-origin: center;
}

.hover-effect:hover {
  transform: scale(1.02);
}
</style>
