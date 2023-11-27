<template>


  <div class="piece">
    <el-row>
      <el-col :span="20">
        <el-text class="mx-1" style="font-size: 22px">{{ props.title }}</el-text>
      </el-col>
      <el-col :span="2" :offset="2">
        <el-space>
          <el-tag class="ml-2" size="large" type="success">{{ choiceArr[0] }}</el-tag>
          <el-tag class="ml-2" size="large" type="danger">{{ choiceArr[1] }}</el-tag>
        </el-space>
      </el-col>
    </el-row>
    <br>


    <el-row>
      <el-col :span="12">A:{{ answerArr[0] }}</el-col>
      <el-col :span="12">B:{{ answerArr[1] }}</el-col>
    </el-row>
    <br>
    <el-row>
      <el-col :span="12">C:{{ answerArr[2] }}</el-col>
      <el-col :span="12">D:{{ answerArr[3] }}</el-col>
    </el-row>
  </div>


  <el-collapse @change="handleChange">
    <el-collapse-item name="1">
      <template #title>
        <el-button type="primary" plain>Record</el-button>
      </template>
      <div class="piece">
        {{ props.record }}
      </div>
    </el-collapse-item>
    <el-collapse-item name="2" class="piece">
      <template #title>

        <el-button type="success" plain>Control</el-button>
      </template>
      <div class="piece">
        <div v-for="item in needHandleArr">
          {{ item }}
        </div>
      </div>
    </el-collapse-item>

  </el-collapse>
  <br>
</template>

<script setup lang="ts">
import {ref} from "vue";


const props = defineProps<{
  title: string,
  choice: string,
  ans: string,
  record: string,
  need: string,
}>();

const arrUtil = (val: string) => {
  let arr = val.replace("[", "").replace("]", "").split(",")

  for (let i = 0; i < arr.length; i++) {

    arr[i] = arr[i].replace("\'", "").replace("\'", "")
  }
  return arr;
}

let choiceArr = arrUtil(props.choice)
let answerArr = arrUtil(props.ans)
let needHandleArr = arrUtil(props.need)


const handleChange = (val: string[]) => {


}
const activeNames = ref(['1'])


</script>
<style scoped>
.piece {
  font-size: 22px;
  font-family: 楷体, serif;
}
</style>


<WrongQuestion title="" choice="['c','a']" ans="['Does;do']" record="" need="['sdfsf']"/>