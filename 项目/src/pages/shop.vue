<template>
    <div v-cloak>


        <el-button class="one" type="primary" round @click="pushShow('xiangqing2')">
            添加商品
        </el-button>

        <el-dialog title="在下方表单中上架商品" :visible.sync="this.$store.state.dialogVisible" width="40%"
            :before-close="handleClose">

            <div>
                <router-view @onEvent="change()"></router-view>
            </div>

            <span slot="footer" class="dialog-footer">

            </span>

        </el-dialog>

        <el-card :destroy-on-close="true" v-if="!this.$store.state.bigRefresh">
            <el-collapse accordion>
                <el-collapse-item v-for="m in message" :key="m.id">
                    <template slot="title">
                        {{ m.sellname }}<i class="header-icon el-icon-info"></i>
                    </template>
                    <div>
                        商品价格：{{ m.sellPrice }}
                        <br />
                        商品库存：{{ m.sellNum }}
                        <br />
                        商品已卖出：{{ m.selloutnum }}
                    </div>
                    <div>
                        <el-button @click="san(m.id)">移除商品</el-button>
                    </div>
                </el-collapse-item>

            </el-collapse>
        </el-card>
    </div>
</template>

<script>
import { request } from "../network/request/request"

export default {
    data() {
        return {
            fresh: '',
            message: {},
            message2: {},
            small: true,
        }
    },
    watch: {

        fresh() {
            console.log('womei');
            request({
                url: '/searchSell',
                method: 'get',
                params: {
                    auth_id: '2211640303',
                    auth_code: 'zhoutinglong',
                }

            }).then(value => {
                console.log('查询成功')
                console.log(value)
                console.log('small');
                this.message = value.data.message
                this.$store.state.fresh = true
            }).catch(err => {
                console.log('查询失败')
                console.log(err);
            })
        },
        small() {
            console.log('womei');
            request({
                url: '/searchSell',
                method: 'get',
                params: {
                    auth_id: '2211640303',
                    auth_code: 'zhoutinglong',
                }

            }).then(value => {
                console.log('查询成功')
                console.log(value)
                console.log('small');
                this.message = value.data.message
                this.small = true
            }).catch(err => {
                console.log('查询失败')
                console.log(err);
            })
        }
    },
    methods: {
        change(m) {
            this.fresh = m
            console.log('yes'+m);
        },
        pushShow(m) {
            this.$store.state.dialogVisible = true
            console.log(m);
            this.$router.push({
                name: m,
            })
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => { });
        },

        san(id) {
            console.log(id);

            request({
                url: '/deleteSell',
                method: 'get',
                params: {
                    auth_id: 2211640303,
                    auth_code: 'zhoutinglong',
                    id: id
                }

            }).then(value => {
                console.log('删除成功')
                console.log(value)
                this.small = false
            }).catch(err => {
                console.log('删除失败')
                console.log(err);
            })
        }
    },


    created() {

        request({
            url: '/searchSell',
            method: 'get',
            params: {
                auth_id: 2211640303,
                auth_code: 'zhoutinglong',
                sellBelong:this.$store.state.bigname
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
.one {
    width: 100%;
}

.el-card {
    background: rgba(0, 0, 0, 0.3);
}

::v-deep .el-collapse-item__header {
    background-color: transparent !important;

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
</style>