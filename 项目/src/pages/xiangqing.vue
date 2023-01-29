<template>
    <div>
        <el-card>

            <img src="../assets/441501161050245132.jpg">

            <el-card class="text">{{ this.$route.params.m.sellname }}</el-card>

            <el-button style="margin-top: 20px" @click="open()">操作按钮</el-button>
           

        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: {},

        }
    },
    methods: {
        open() {
            console.log(this.message);
        },
    },
    mounted() {
        // this.message = this.$route.params.m
        console.log(this.$route.params.m);
    },
}
</script>

<style scoped>
.CCard {
    display: inline-block;
    width: 24%;
    height: 2px;
    margin: 0 auto;
    line-height: 50px;

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