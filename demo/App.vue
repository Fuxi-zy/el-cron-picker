<template>
  <div class="demo-container">
    <h1>El Cron Picker Demo</h1>
    <p class="description">Vue3 + Element Plus Cron 表达式生成器</p>
    
    <div class="demo-section">
      <h2>1. Popover 模式（默认）</h2>
      <el-cron-picker v-model="cron1" />
      <p class="result">当前值: {{ cron1 }}</p>
    </div>

    <div class="demo-section">
      <h2>2. Dialog 模式</h2>
      <el-cron-picker v-model="cron2" type="dialog" />
      <p class="result">当前值: {{ cron2 }}</p>
    </div>

    <div class="demo-section">
      <h2>3. Drawer 模式</h2>
      <el-cron-picker v-model="cron3" type="drawer" />
      <p class="result">当前值: {{ cron3 }}</p>
    </div>

    <div class="demo-section">
      <h2>4. 禁止点击模态框关闭</h2>
      <el-cron-picker v-model="cron4" type="dialog" :close-on-click-modal="false" />
      <p class="result">当前值: {{ cron4 }}</p>
    </div>

    <div class="demo-section">
      <h2>5. 直接使用配置面板</h2>
      <el-cron-config v-model="cron5" v-model:number-count="numberCount" />
      <p class="result">当前值: {{ cron5 }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const cron1 = ref('* * * * * ?')
const cron2 = ref('0 0 12 * * ?')
const cron3 = ref('0 30 10 ? * MON-FRI')
const cron4 = ref('0 0 0 1 1 ?')
const cron5 = ref('0 0/5 * * * ?')
const numberCount = ref(10)
</script>

<style>
body {
  margin: 0;
  padding: 20px;
  background: #f5f5f5;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.demo-container {
  max-width: 1000px;
  margin: 0 auto;
}

h1 {
  color: #333;
  text-align: center;
  margin-bottom: 10px;
}

.description {
  text-align: center;
  color: #666;
  margin-bottom: 40px;
}

.demo-section {
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.demo-section h2 {
  margin-top: 0;
  color: #409eff;
  font-size: 16px;
}

.result {
  margin-top: 15px;
  padding: 10px;
  background: #f5f5f5;
  border-radius: 4px;
  font-family: monospace;
  font-size: 14px;
}
</style>