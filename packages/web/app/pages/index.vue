<script setup lang="ts">
import type { IArticleCategoryListItem } from '@mh/ui/app/types'

const list = [
  {
    category: '好奇激发',
    titles: [
      '你不知道的职场潜规则：应届生必读！',
      '揭秘职场新人如何快速升职的秘密！',
      '职场新人为何被称为 职场鲨鱼？ 探究背后的故事！',
      '初入职场的你，真的了解你的行业吗？',
      '刚毕业？这些职场生存技巧你不能不知道！',
    ],
  },
].flatMap(item => [item, item, item, item])

function handleClickItem(item: IArticleCategoryListItem, title: string) {
  console.log(item, title)
}

function handleClickCategory(item: IArticleCategoryListItem, category: string) {
  console.log(category)
}

function handleClickWriter(item: IArticleCategoryListItem, title: string) {
  console.log(item, title)
}

function handleClickDelete(item: IArticleCategoryListItem, title: string) {
  console.log(item, title)
}

function handleClickCopy(item: IArticleCategoryListItem, title: string) {
  console.log(item, title)
}

function handleClickShare(item: IArticleCategoryListItem, title: string) {
  console.log(item, title)
}
</script>

<template>
  <div>
    <ArticleCategoryList
      :list="list" @click-item="handleClickItem" @click-category="handleClickCategory"
      @click-writer="handleClickWriter" @click-delete="handleClickDelete" @click-copy="handleClickCopy"
      @click-share="handleClickShare"
    />
  </div>
</template>

<style scoped></style>
