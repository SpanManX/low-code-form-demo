<template>
  <el-button class="but" type="primary" @click="()=>isPreview = !isPreview">切换预览模式</el-button>
  <div class="demo-wrapper">
    <lowCodeForm ref="lowCodeFormRef" :data="demo7" :variables="testData" :callback="handleCallback"
                 :isPreview="isPreview"></lowCodeForm>
  </div>
  <el-image-viewer
      v-if="showPreview !== ''"
      :url-list="[showPreview]"
      show-progress
      @close="showPreview = ''"
  />
  <el-button @click="handleTest" v-if="isPreview">校验</el-button>
</template>
<script setup>
import lowCodeForm from "low-code-form-generator";
import 'low-code-form-generator/dist/low-code-form-generator.css'
import {reactive, ref} from "vue";
import demo7 from '../assets/demo7.js'

const isPreview = ref(false);
const lowCodeFormRef = ref(null);
const showPreview = ref('')

const testData = reactive({
  "field1752214307646320": 1752244342177,
  "field1752214306566359": 2,
  "field1752214311914827": ["ValueB"],
  "field1752214310595119": "2025-07-30T16:00:00.000Z",
  "field1752214308776432": "123",
  "field1752214314625551": [],
  "field1752214316464511": []
})

function handleCallback(name, fieldName, vm) {
  if (name === 'ElButton' && (fieldName === 'field1752214304261429' || fieldName === 'field1752214305457614')) {
    vm.props.onClick = () => {
      console.log(fieldName);
    }
  }
  if (name === 'ElUpload') {
    vm.props.httpRequest = (e) => {
      console.log(e.file, '自定义上传行为');
    }
    vm.props.onPreview = (e) => {
      showPreview.value = e.url
      console.log(e);
    }
  }
}

function handleTest() {
  if (isPreview.value) {
    lowCodeFormRef.value.formRef().validate((valid) => {
      if (valid) {
        console.log(testData)
      }
    });
  } else {
    console.log(lowCodeFormRef.value.getFormData()); // 编辑模式时用于获取form表单变量
    console.log(lowCodeFormRef.value.getJson()); // 编辑模式时用于获取JSON数据
  }
}
</script>
<style>
#app, html, body {
  height: 100%;
  margin: 0;
}

#app {
  background: rgb(240, 242, 245);
}
</style>

<style scoped>
.demo-wrapper {
  height: calc(100% - 42px);
}

.but {
  margin: 5px 0;
}
</style>
