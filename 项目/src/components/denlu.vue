<template>
    <div class="first">
        <!-- <button @click="change()">dianwo</button> -->

        <transition name="el-zoom-in-top">
            <el-card v-show="show2" class="one">
                <span class="text">

                </span>
            </el-card>

        </transition>

        <transition name="el-zoom-in-top">


            <span v-show="show2" class="two">

            </span>
        </transition>

        <div class="form" v-if="pan == 1" ref="box">
            <h1>登录页面</h1>

            <el-input prefix-icon="el-icon-user-solid" v-model="form.username" placeholder="请输入用户名"
                clearable></el-input>

            <el-input prefix-icon="el-icon-lock" v-model="form.password" placeholder="请输入密码" clearable
                show-password></el-input>

            <el-button @click="add()" type="primary">登录</el-button>
             <el-link type="primary" :underline="false" icon="el-icon-edit"
                @click="PPan(), pushShow('zuce')">如果没注册，点我注册</el-link>
            <div>
                <el-button class="button1" type="primary" @click="change()">点我有惊喜</el-button>
            </div>

           
            <el-link type="primary" :underline="false" icon="el-icon-edit"
                @click="PPan(), pushShow('gai')" class="gai">忘记密码？</el-link>
        </div>
    </div>

</template>

<script>
import { request } from "../network/request/request"
import { mapState, mapMutations } from 'vuex'
import axios from 'axios';



export default {
    data() {
        return {
            show2: false,
            form: {
                username: '', //用户名
                password: '', //密码
                text: '测试',
                check1: ''
            }
        }
    },

    computed: {
        ...mapState(['person', 'password', 'pan']),
        message: {
            get() {
                return this.$store.state.person
            },
            set(value) {
                this.$store.commit('updateMessage1', value)
            }
        },
        message1: {
            get() {
                return this.$store.state.password
            },
            set(value) {
                this.$store.commit('updateMessage2', value)
            }
        }
    },
    methods: {
        ...mapMutations({ PPan: 'PAN2' }),

        change() {
            this.show2 = !this.show2
        },
        pushShow(m) {
            console.log(m);
            this.$router.push({
                name: m,
            })
        },
        add() {
            request({
                url: '/login',
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
                this.check1 = value.data.message.message
                console.log(this.check1);
                if (this.check1 == '登陆成功') {
                    console.log('home');
                    this.show2 = false
                    this.$router.push({
                        name: 'home',
                    })
                    document.querySelector('body').removeAttribute('style')
                    document.querySelector('body').setAttribute('style', "background-image: url(" + require("../assets/2.png") + ");background-size: cover;" +
                        "background-repeat: no-repeat");
                    this.$message({
                        message: '恭喜您登录成功',
                        type: 'success'
                    });
                    this.$store.state.personId=value.data.message.id
                    this.$store.state.bigname=this.form.username
                }
                else {
                    this.$message.error('登录账号或密码错误');
                }
            }).catch(err => {
                console.log('提交失败')
                console.log(err);


            })


            // axios.interceptors.request.use(config => {
            //     //在发送请求之前做些什么
            //     console.log('yes');
            //     return config
            // }, err => {
            //     //若请求失败，做些什么
            //     return Promise.reject(err)
            // })
        },


    },



    beforeCreate() {
        document.querySelector('body').setAttribute('style', "background-image: url(" + require("../assets/R-C.jpg") + ");background-size: cover;" +
            "background-repeat: no-repeat")
    }

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

.first {

    position: absolute;
    top: 0px;
    left: 0;
    right: 0;
    bottom: 0;
    min-height: 100vh;
    background-size: 100%;
}

html,
body {
    box-sizing: border-box;
    height: 100%;
    padding: 0;
    margin: 0;
}

.one {

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    min-height: 10vh;
    background-size: 100%;
    background-image: url(../assets/屏幕截图_20230125_160655.png);
    float: left;
    width: 6%;
    height: 73%;
    margin-top: 10%;
    margin-right: -150px;
    margin-left: 150px;

}

.two {

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    min-height: 10vh;
    background-size: 100%;
    background-image: url(../assets/屏幕截图_20230125_160614.png);
    float: right;
    width: 6%;
    height: 73%;
    margin-top: 10%;
    margin-right: 150px;
    margin-left: -150px;
    background-color: rgb(89, 0, 255);
}

.button1 {
    width: 200px;
    margin-left: 40px;

}
.gai{
    margin-left: 10px;
}
</style>
