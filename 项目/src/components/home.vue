<template>
  <div class="title" >
    <el-container>
      <el-header>
        <div>
          <Title1></Title1>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Context />
        </el-aside>
        <el-main >
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Title1 from './Title1.vue'
import Context from './Context.vue'


export default {
  data() {
    return {

    }
  },
  components: {
    Title1, Context,
  },
  beforeCreate() {
        document.querySelector('body').setAttribute('style', "background-image: url(" + require("../assets/2.png") + ");background-size: cover;" +
            "background-repeat: no-repeat")
    }
}
</script>

<style scoped>
.title {
  background-color: #fff;
  background: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-height: 100vh;
  background-size: 100%;
}

.el-header{
  padding: 0;
}
html,
body {
    box-sizing: border-box;
    height: 100%;
    padding: 0;
    margin: 0;
}

* {
  margin: 0;
  padding: 0;
}

.el-header {
  background-color: #cecece;
  background: rgba(0, 0, 0, 0.3);
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: white;
  background: rgba(0, 0, 0, 0.3);
  color: rgb(0, 0, 0);
  text-align: center;
  line-height: 200px;
  height: 100%;
}

.el-main {
  background-color: #ffffff;
  background: rgba(0, 0, 0, 0.1);
  color: #333;
  text-align: center;
  line-height: 160px;
  height: 748px;
}

.el-container {
  height: 792px;
}


</style>