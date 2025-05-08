<script setup lang="ts">
const list = [
  {
    category: '好奇激发',
    titles: [
      '你不知道的职场潜规则：应届生必读！',
      '揭秘职场新人如何快速升职的秘密！',
      '职场新人为何被称为"职场鲨鱼"？探究背后的故事！',
      '初入职场的你，真的了解你的行业吗？',
      '刚毕业？这些职场生存技巧你不能不知道！',
    ],
  },
  {
    category: '教育启发',
    titles: [
      '应届生如何在职业生涯中开辟新天地？',
      '职场新人必学的五大成功法则！',
      '毕业后如何打造自己的职业"蓝图"？',
      '初入职场的正确打开方式：从零到一的成长指南',
      '职业规划不再难：年轻人的实战攻略！',
    ],
  },
].flatMap(item => [item, item])

function handleClick(title: string) {
  console.warn(title)
}
</script>

<template>
  <main class="container mx-auto p-2">
    <div v-for="(item, index) in list" :key="item.category" class="flex group">
      <div
        class="w-[30px] text-center p-1 text-main-t border-p border-1 transition-colors duration-300 group-hover:text-blue-500" :class="{
          'border-t-0': index !== 0,
        }"
      >
        {{ item.category }}
      </div>
      <div class="flex-1 flex flex-col">
        <div
          v-for="title in item.titles" :key="title"
          class="p-1 border-p border-1 ml-[-1px] mb-[-1px] last:mb-0 transition-all duration-300 hover:bg-gray-50 hover:border-1 cursor-pointer hover-effect"
          :class="{
            'border-t-0': index !== 0,
          }"
          @click="handleClick(title)"
        >
          {{ title }}
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.group:hover .group-hover\:text-blue-500 {
  color: #3b82f6;
}

.hover-effect {
  transform-origin: center;
}

.hover-effect:hover {
  transform: scale(1.02);
}
</style>
