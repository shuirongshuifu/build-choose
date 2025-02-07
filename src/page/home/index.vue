<template>
  <div>
    <div v-html="htmlContent"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// 获取传递进来的unit参数
let unit = import.meta.env.VITE_UNIT;

// 定义一个响应式变量来存储HTML内容
const htmlContent = ref("");

onMounted(async () => {
  try {
    // 使用fetch API读取publick文件架下unitView中的html视图文件
    const response = await fetch(`/unitView/${unit}.html`);
    if (response.ok) {
      // 将响应内容转换为文本
      const html = await response.text();
      // 赋值响应式变量
      htmlContent.value = html;
    } else {
      console.error("error");
    }
  } catch (error) {
    console.error("Error fetching HTML file:", error);
  }
});
</script>
