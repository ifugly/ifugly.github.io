<style scoped>
.home {
  width: 100%;
  height: 100%;
  background-color: #1e293b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.text {
  color: #fff;
  font-size: 32px;
  margin-bottom: 20px;
}
span {
  filter: blur(10px);
}
.no-blur {
  filter: blur(0px);
}
.small {
  font-size: 24px;
}

/* From Uiverse.io by Navarog21 */
button {
  width: 10em;
  position: relative;
  height: 3.5em;
  border: 3px ridge #149cea;
  outline: none;
  background-color: transparent;
  color: white;
  transition: 1s;
  border-radius: 0.3em;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

button::after {
  content: "";
  position: absolute;
  top: -10px;
  left: 3%;
  width: 95%;
  height: 40%;
  background-color: #1e293b;
  transition: 0.5s;
  transform-origin: center;
}

button::before {
  content: "";
  transform-origin: center;
  position: absolute;
  top: 80%;
  left: 3%;
  width: 95%;
  height: 40%;
  background-color: #1e293b;
  transition: 0.5s;
}

button:hover::before,
button:hover::after {
  transform: scale(0);
}

button:hover {
  box-shadow: inset 0px 0px 25px #1479ea;
}
</style>

<template>
  <div class="home">
    <div class="text">
      序号：<span :class="isFirst ? (lottering ? 'no-blur' : '') : 'no-blur'">{{
        sn
      }}</span>
      ，班级：
      <span :class="isFirst ? (lottering ? 'no-blur' : '') : 'no-blur'">{{
        task
      }}</span>
    </div>
    <button v-if="isFirst" @click="start">
      {{ lottering ? "停止抽签" : "开始抽签" }}
    </button>
    <div v-else class="text small">电话号码：{{ phone }}</div>
  </div>
</template>

<script setup>
import router from "@/router";
import { inject, ref } from "vue";

const phone = localStorage.getItem("phone");
!phone && router.replace("/");

let currentUser;
let sns;
let tasks;
const AV = inject("$AV");
const queryUser = new AV.Query("Users");
queryUser.equalTo("phone", phone);
queryUser.find().then((res) => {
  currentUser = res[0];

  if (currentUser.attributes.initialized) {
    isFirst.value = false;
    sn.value = currentUser.attributes.sn;
    task.value = currentUser.attributes.task;
  }
});
const querySNs = new AV.Query("SNs");
querySNs.find().then((res) => {
  sns = res.map((item) => item.attributes.sn);
});
const queryTasks = new AV.Query("Tasks");
queryTasks.find().then((res) => {
  tasks = res.map((item) => item.attributes.task);
});

const sn = ref(0);
const task = ref("请点按开始按钮");
const isFirst = ref(true);
const lottering = ref(false);
let timer;
const start = () => {
  // 如果lottering为true，则停止抽签，否则开始抽签
  if (lottering.value) {
    // 停止timer，赋值
    clearInterval(timer);
    sn.value = currentUser.attributes.sn;
    task.value = currentUser.attributes.task;
    lottering.value = false;
    isFirst.value = false;
    const todo = AV.Object.createWithoutData("Users", currentUser.id);
    todo.set("initialized", true);
    todo.save().then(
      (res) => {},
      (error) => {
        // 异常处理
        console.log(error);
      }
    );
    return;
  }
  lottering.value = true;
  timer = setInterval(() => {
    sn.value = sns[Math.floor(Math.random() * sns.length)];
    task.value = tasks[Math.floor(Math.random() * tasks.length)];
  }, 50);
};
</script>
