<template>
    <div class="second">
        <div class="form">

            <h1>注册页面</h1>
            <el-input prefix-icon="el-icon-user-solid" v-model="form.username" placeholder="请输入用户名"
                clearable></el-input>

            <el-input prefix-icon="el-icon-lock" v-model="form.password" placeholder="请输入密码" clearable
                show-password></el-input>

            <el-button @click="add()" type="primary">注册</el-button>

            <el-link type="primary" :underline="false" icon="el-icon-edit"
                @click="Pan(), pushShow('denlu')">快快注册吧，点我返回登录页</el-link>
        </div>
    </div>



</template>

<script>
import { request } from "../network/request/request"
import { mapState, mapMutations } from 'vuex'
export default {
    data() {
        return {
            form: {
                username: '', //用户名
                password: '', //密码
                text: '测试'

            }
        }
    },
    computed: {
        ...mapState(['person', 'password', 'pan']),
        message: {
            get() {
                return this.$store.state.truePerson
            },
            set(value) {
                this.$store.commit('updateMessage3', value)
            }
        },
        message1: {
            get() {
                return this.$store.state.truePassword
            },
            set(value) {
                this.$store.commit('updateMessage4', value)
            }
        }
    },
    methods: {
        ...mapMutations({ Pan: 'PAN3' }),
        PPan() {
            if (this.$store.state.truePassword != '' && this.$store.state.truePerson != '') {
                this.Pan();
                console.log('yes')
            }
        },
        pushShow(m) {
            console.log(m);
            this.$router.push({
                name: m,
            })
        },
        add() {
            request({
                url: '/register',
                method: 'post',
                data: {
                    "auth_id": "2211640303",
                    "auth_code": "zhoutinglong",
                    username: this.form.username, //用户名
                    password: this.form.password, //密码
                    
                }
            }).then(value => {
                console.log('提交成功')
                console.log(value)
                if (value.data.message == '创建成功') {
                    console.log('denlu');
                    this.show2 = true
                    this.$router.push({
                        name: 'denlu',
                    })
                    this.$message({
                        message: '恭喜您注册成功',
                        type: 'success'
                    })
                }
                else{
                     this.$message.error('注册失败，可能是没用英文注册哦，或者是已经有人注册过这个号了');
                }
            }).catch(err => {
                console.log('提交失败')
                console.log(err);
            })


        }

    },
}
</script>

<style scoped>
.form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: auto;
    margin-top: 60px;
    width: 600px;
    height: 500px;
    background-color: rgb(45, 58, 75);
    text-align: center;
    background: rgba(0, 0, 0, 0.3);
}

h1 {
    display: block;
    color: white;
}

.el-input {
    width: 500px;
}

.el-button {
    width: 500px;
}

/* .second{
    background-image:url(../assets/R-C.jpg) ;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    min-height: 100vh;
  background-size: 100%;
} */
html,
body {
    box-sizing: border-box;
    height: 100%;
    background-color: rgb(255, 0, 0);
    padding: 0;
    margin: 0;
}
</style>
