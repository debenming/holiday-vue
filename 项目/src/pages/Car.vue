<template>
    <div class="bigbig">
        <el-card v-for="m in message" :key="m.id" class="text1">



            商品名称：{{ m.shoppingItemName }}
            <br />
            购买数量：{{ m.shoppingNum }}
            <br />
            <el-input-number v-model="num"  :min="1" :max="100" label="描述文字"></el-input-number>
            <br />
            <el-button @click="drawer = true, open(m.shoppingItemId)" type="primary" >
                点我开启星空购物车
            </el-button>
            <el-button @click="gen(m.id)" >更新购买数量</el-button>
            <el-button @click="shan(m.id)" >删除购物车</el-button>
            

            <el-drawer :visible.sync="drawer" :with-header="false">
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
                            <el-input-number v-model="shoppingNum" :min="1" :max="100" label="购买数量" ></el-input-number>
                        </el-card>

                        <el-button style="margin-top: 20px" @click="buy(message2),shan(m.id)">购买</el-button>
                        <el-button @click="mei()">关闭面板</el-button>


                    </el-card>
                </div>
            </el-drawer>
        </el-card>
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
            shoppingNum: '',
            fresh:true,
            num:1,
        };
    },
    watch:{
fresh(){
    request({
            url: '/searchCar',
            method: 'get',
            params: {
                auth_id: 2211640303,
                auth_code: 'zhoutinglong',
            }

        }).then(value => {
            console.log('购物车成功')
            console.log(value)
            this.message = value.data.message
            this.fresh=true
        }).catch(err => {
            console.log('查询失败')
            console.log(err);
        })
}
    },
    methods: {
        gen(id){
            request({
                url: '/updateCar',
                method: 'get',
                params: {
                    auth_id: 2211640303,
                    auth_code: 'zhoutinglong',
                    id:id,
                    shoppingNum:this.num
                }

            }).then(value => {
                console.log('更新成功')
                console.log(value)
                this.fresh=false
                
            }).catch(err => {
                console.log('查询失败')
                console.log(err);
            })
        },
        shan(id){
            request({
                url: '/deleteCar',
                method: 'get',
                params: {
                    auth_id: 2211640303,
                    auth_code: 'zhoutinglong',
                    id:id
                }

            }).then(value => {
                console.log('查询成功')
                console.log(value)
                this.fresh=false
                
            }).catch(err => {
                console.log('查询失败')
                console.log(err);
            })
        },
        mei(){
             this.drawer= false
        },
        pushShow(m) {
            console.log(m);
            this.$router.push({
                name: m,
            })
        },
        open(id) {
            
            request({
                url: '/searchSell',
                method: 'get',
                params: {
                    auth_id: 2211640303,
                    auth_code: 'zhoutinglong',
                    id:id
                }

            }).then(value => {
                console.log('查询成功')
                console.log(value)
                this.message2 = value.data.message[0]
                
            }).catch(err => {
                console.log('查询失败')
                console.log(err);
            })
        },
        buy(m) {
            request({
                url: '/createSellOut',
                method: 'post',
                data: {
                    auth_id: "2211640303",
                    auth_code: 'zhoutinglong',
                    buySellId: m.id, //商品ID
                    buyPersonId: this.$store.state.personId, //用户ID
                    sellnum: this.shoppingNum //商品数量
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
            url: '/searchCar',
            method: 'get',
            params: {
                auth_id: 2211640303,
                auth_code: 'zhoutinglong',
            }

        }).then(value => {
            console.log('购物车成功')
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
.el-card {
    margin-top: 20px;
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

.text1 {
    margin-left: 80px;
    width: 87%;
    height: 100%;
    margin-top: 20px;
    font-size: 17px;
    color: #409EFF;
    font-family: "PingFang SC";
    background-image: url(../assets/chang.jpg);
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

.name {
    margin-bottom: -50px;
}

.bigbig {
    line-height: 50px;
}
::v-deep .el-input__inner{
    background-color: transparent ;

    color: #409EFF;
}
::v-deep .el-input-number__increase{
    background-color: transparent ;


}
::v-deep .el-input-number__decrease{
    background-color: transparent ;


}
</style>