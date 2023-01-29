<template>
    <div class="context">
        <el-menu default-active="2" class="el-menu-vertical-demo">

            <el-menu-item index="1" @click="pushShow('Person')">
                <i class="el-icon-s-custom"></i>
                <span slot="title">个人中心</span>
            </el-menu-item>

            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-s-goods"></i>
                    <span>快乐购物</span>
                </template>
                <el-menu-item-group>
                    <template slot="title">折扣商品</template>
                    <el-menu-item index="1-1" @click="pushShow('Season')">节日限购</el-menu-item>
                    <el-menu-item index="1-2" @click="pushShow('Cheap')">降价热销</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="精品商城">
                    <el-menu-item index="1-3" @click="pushShow('Love')">猜你喜欢</el-menu-item>
                    <el-menu-item index="1-4" @click="pushShow('All')">全体商品</el-menu-item>
                </el-menu-item-group>

            </el-submenu>

            <el-menu-item index="3" @click="pushShow('Car')">
                <i class="el-icon-shopping-cart-2"></i>
                <span slot="title">购物小车</span>
            </el-menu-item>

            <el-menu-item index="4" @click="pushShow('Message')">
                <i class="el-icon-document-copy"></i>
                <span slot="title">查看订单</span>
            </el-menu-item>

           

            <el-submenu index="5">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>商家服务</span>
                </template>
                <el-menu-item-group>
              
                    <el-menu-item index="1-1" @click="pushShow('shop')">卖家服务</el-menu-item>
                    <el-menu-item index="1-2" @click="pushShow('smallShop')" :disabled="right">管理员服务</el-menu-item>
                </el-menu-item-group>
                

            </el-submenu>
        </el-menu>
       
    </div>
</template>

<script>
export default {
    data() {
        return {
            right:true
        }
    },
    methods: {
        pushShow(m) {
            console.log(m);
            this.$router.push({
                name: m,
            })
        }
    },
    mounted() {
        if(this.$store.state.personId==20){
            this.right=false
            console.log(this.right);
        }
    },
}
</script>

<style scoped>
/* .context{
    background: rgba(0, 0, 0, 0.3);
} */
.el-menu{
    background: rgba(255, 255, 255, 0.7);
}
.el-menu-item{
    background: rgba(255, 255, 255, 0.7);
}

</style>