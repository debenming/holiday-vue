<template>
    <div>
        <el-carousel :interval="4000" type="card" height="300px">
            <el-carousel-item v-for="item in url" :key="item">
                <el-image :src="item"></el-image>
            </el-carousel-item>
        </el-carousel>

        <div v-for="m in message" :key="m.id" class="card">
            <el-card>

                <img src="../assets/441501161050245132.jpg" class="img1">

                <el-card class="text1">

                    {{ m.sellname }}


                    <br />
                    <div class="price">
                        价格：{{ m.sellPrice }}
                    </div>

                </el-card>

                <el-button style="margin-top: 20px" @click="drawer = true, open(m)">商品详情</el-button>

                <el-button class="one" style="margin-top: 20px;margin-left:50px" @click="buy(m)">购买</el-button>
            </el-card>

            <el-drawer :visible.sync="drawer" :with-header="false" :destroy-on-close="true">
                <div class="big">
                    <el-card class="CCard">

                        <img src="../assets/441501161050245132.jpg" class="IImg">

                        <el-card class="text">
                            商品名称：{{ message2.sellname }}
                            <br />
                            商品价格：{{ message2.sellPrice }}
                            <br />
                            商品库存：{{ message2.sellNum }}
                            <br />
                            售出数量：{{ message2.selloutnum }}
                            <br />
                            星空卖家：{{ message2.sellBelong }}
                            <br />
                            商品描述：{{ message2.sellDetail }}
                            <br />
                            <el-input-number v-model="shoppingNum" :min="1" :max="100" label="购买数量"></el-input-number>
                        </el-card>

                        <el-button style="margin-top: 20px" @click="car(message2)">加入购物车</el-button>

                        <el-button style="margin-top: 20px" @click="buy(message2)">购买</el-button>


                    </el-card>
                </div>


            </el-drawer>
        </div>


    </div>
</template>

<script>
import { request } from "../network/request/request"
export default {
    data() {
        return {
            drawer: false,
            message: {},
            message2: {},
            shoppingNum: 1,
            url: [require('../assets/all/1.jpg'),
            require('../assets/all/2.png'),
            require('../assets/all/3.png'),
            require('../assets/all/4.jpg'),]
        }
    },
    methods: {
        open(m) {
            this.message2 = m
            console.log(this.message2);
        },
        car(m) {
            console.log(m.id);
            console.log(this.$store.state.personId);
            console.log(this.shoppingNum);
            request({
                url: '/insertCar',
                method: 'post',
                data: {
                    auth_id: "2211640303",
                    auth_code: 'zhoutinglong',
                    shoppingId: m.id, //商品ID
                    userId: this.$store.state.personId, //用户ID
                    shoppingNum: this.shoppingNum //商品数量
                }

            }).then(value => {
                console.log('提交成功')
                console.log(value)
                this.$message({
                    message: '恭喜您加入购物车成功',
                    type: 'success'
                });
            }).catch(err => {
                console.log('提交失败')
                console.log(err);
                this.$message.error('加入购物车失败');
            })
        },
        buy(m) {
            console.log(this.$store.state.personId);
            console.log(this.shoppingNum);
            console.log(m.id);
            request({
                url: '/createSellOut',
                method: 'post',
                data: {
                    auth_id: "2211640303",
                    auth_code: 'zhoutinglong',
                    buyPersonId: this.$store.state.personId, //用户ID
                    sellnum: this.shoppingNum, //商品数量
                    buySellId: m.id, //商品ID
                }

            }).then(value => {
                console.log('提交成功')
                console.log(value)
                this.$message({
                    message: '恭喜您购买成功',
                    type: 'success'
                });
            }).catch(err => {
                console.log('提交失败')
                console.log(err);
                this.$message.error('购买失败');
            })
        },

    },
    created() {

        request({
            url: '/searchSell',
            method: 'get',
            params: {
                auth_id: 2211640303,
                auth_code: 'zhoutinglong',
            }

        }).then(value => {
            console.log('查询成功')
            console.log(value)
            this.message = value.data.message
        }).catch(err => {
            console.log('查询失败')
            console.log(err);
        })



    },
}
</script>

<style scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}

.card {
    display: inline-block;
    width: 24%;
    height: 2px;
    margin: 7px;
    line-height: 50px;
}

.img1 {
    width: 50vw;
    height: 15vw;
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
}

.text1 {
    width: 100%;
    height: 100%;
    margin-top: 20px;
    font-size: 17px;
    color: #409EFF;
    font-family: "PingFang SC"
}

.price {
    font-size: 13px;
    color: #606266;
}


.IImg {
    object-fit: contain;
    width: 50vw;
    height: 15vw;
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
    border-radius: 10px;
}

.text {
    color: #409EFF;
    width: 100%;
    height: 100%;
    margin-top: 20px;
    padding-right: 20px;
}

.big {
    padding: 10px;
    padding-top: 35px;
}
</style>