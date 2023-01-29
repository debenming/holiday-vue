<template>
    <div>
        <div class="Cnt">
            <el-card class="cnt0">
                <div>
                    <span style=" padding: -20px;width:100%;height: 50px;">青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪</span>
                    <el-divider></el-divider>
                    <span>疲倦的月亮躲进了云层休息,只留下几颗星星像是在放哨</span>
                </div>

            </el-card>

            <el-card class="cnt">
                <el-progress type="dashboard" :percentage="percentage" :color="colors"></el-progress>

                <span class="cnt1">
                    <el-button-group>
                        <el-button icon="el-icon-minus" @click="decrease"></el-button>
                        <el-button icon="el-icon-plus" @click="increase"></el-button>
                    </el-button-group>
                </span>
            </el-card>

        </div>


        <div class="Last">

            <transition name="el-zoom-in-center">


                <el-card class="k1" v-show="true" :destroy-on-close="true" >
                    <div> 星空仓库（只能容纳8个星空订单，除非vip）</div>
                   
                    <el-collapse accordion>
                        <div v-for="m in message" :key="m.id" @click="search(m.sellid)">
                            <el-collapse-item  >
                           
                            <template slot="title" >
                                星空订单时间：{{ m.selltime-0| dateFormat}}
                                <i class="header-icon el-icon-info"></i>
                            </template>
                            <div>
                                购买数量：{{ m.sellnum}}
                                <br />
                                星空卖家：{{ m.sellpersonid }}
                            </div>
                            <el-button @click="qu(m.id)">取消订单</el-button>

                        </el-collapse-item>
                        </div>
                        

                    </el-collapse>
                </el-card>


            </transition>



            <div class="laoliu">
                <transition name="el-zoom-in-top">
                    <el-card v-show="show2" class="k2">{{message0.sellname}}</el-card>
                </transition>

                <transition name="el-zoom-in-bottom">
                    <el-card v-show="show2" class="k3">{{message0.sellDetail}}</el-card>
                </transition>
            </div>

        </div>


    </div>

</template>

<script>
import 'element-ui/lib/theme-chalk/base.css';
import { request } from "../network/request/request"
export default {
    data() {
        return {
            show2: false,
            small: true,
            percentage: 10,
            colors: [
                { color: '#f56c6c', percentage: 20 },
                { color: '#e6a23c', percentage: 40 },
                { color: '#5cb87a', percentage: 60 },
                { color: '#1989fa', percentage: 80 },
                { color: '#6f7ad3', percentage: 100 }
            ],
            message: {},
            message2: {},
            message0: {},
        };
    },

    methods: {

        increase() {
            this.percentage += 30;
            if (this.percentage > 100) {
                this.percentage = 100;
            }
        },
        decrease() {
            this.percentage -= 30;
            if (this.percentage < 0) {
                this.percentage = 0;
            }
        },
        qu(m) {
            console.log(m);
            request({
                url: '/deleteSellOut',
                method: 'get',
                params: {
                    auth_id: '2211640303',
                    auth_code: 'zhoutinglong',
                    id: m
                }

            }).then(value => {
                console.log('查询成功')
                console.log(value)
                this.small = false
                console.log(this.small);
            }).catch(err => {
                console.log('查询失败')
                console.log(err);
            })
        },
        search(id) {
            console.log(id);
            request({
                url: '/searchSell',
                method: 'get',
                params: {
                    auth_id: '2211640303',
                    auth_code: 'zhoutinglong',
                    id: id
                }

            }).then(value => {
                console.log('查询成功')
                console.log(value)
                this.message0 = value.data.message[0]
            }).catch(err => {
                console.log('查询失败')
                console.log(err);
            })

        }

    },
    created() {

        request({
            url: '/searchSellOut',
            method: 'get',
            params: {
                auth_id: '2211640303',
                auth_code: 'zhoutinglong',
            }

        }).then(value => {
            console.log('查询成功')
            console.log(value)
            this.message = value.data
        }).catch(err => {
            console.log('查询失败')
            console.log(err);
        })


    },
    watch: {
        percentage() {
            if (this.percentage == 100) {
                this.show2 = true
            }
            else {
                this.show2 = false
            }
        },
        small() {
            console.log('womei');
            request({
                url: '/searchSellOut',
                method: 'get',
                params: {
                    auth_id: '2211640303',
                    auth_code: 'zhoutinglong',
                }

            }).then(value => {
                console.log('查询成功')
                console.log(value)
                console.log('small');
                this.message = value.data
                this.small = true
            }).catch(err => {
                console.log('查询失败')
                console.log(err);
            })
        }
    }
}
</script>

<style scoped>
.Cnt {
    width: 100%;
    height: 200px;

}

.cnt {
    float: right;
    display: inline-block;
    width: 30%;
    height: 200px;
}

.cnt1 {
    width: 500px;
    height: 500px;
    background-color: rgb(183, 27, 27);
    margin-left: -118px;

}

.cnt0 {
    float: left;
    display: inline-block;
    width: 65%;
    height: 200px;
    margin-right: 25px;
    line-height: 50px;
}

.k1 {
    float: left;
    line-height: 50px;
    width: 39%;
    height: 490px;
    border-radius: 4px;
    text-align: center;
    margin-bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
}

/* .el-collapse-item__header,
.el-collapse-item__wrap */
::v-deep .el-collapse-item__header {
    background-color: transparent !important;
    font-size: 18px;
    color: #fff;
}

::v-deep .el-collapse-item__wrap {

    background-color: transparent !important;

    color: #fff;
}

::v-deep .el-collapse-item__content {
    font-size: 18px;
    color: #fff;
}


.k2 {
    margin-left: 20px;
    float: right;
    width: 97%;
    height: 240px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    background: rgba(0, 0, 0, 0.3);
}

.k3 {
    margin-left: 20px;
    margin-top: 20px;
    float: right;
    width: 97%;
    height: 230px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    margin-bottom: 0;
    background: rgba(0, 0, 0, 0.3);
}

.Last {
    height: 480px;
    margin-top: 20px;
    margin-bottom: 0;
}

.laoliu {
    width: 60%;
    float: right;
}
</style>
