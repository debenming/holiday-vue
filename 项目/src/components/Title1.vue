<template>
    <div class="Title">
        <div class="one">
            <el-page-header @back="goBack" content="登录界面">
            </el-page-header>
        </div>

        <div class="two">
            <el-avatar class="four" :src="url"></el-avatar>
            <span class="three">{{ this.$store.state.bigname }}</span>
            <span class="four">
                <i class="el-icon-coin"></i>
                <span class="three">much</span>
            </span>
            <span class="four">
                <i class="el-icon-coin"></i>
                <span class="three">much</span>
            </span>
        </div>

    </div>
</template>

<script>



export default {
    data() {
        return {
            url: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
        }
    },
    methods: {
        goBack() {
            console.log('yes');

            this.$router.push({
                name: 'denlu',
            })
        }
    }
}

</script>

<style scoped>

.Title{
    background: rgba(255, 255, 255, 1);
}
.one {
    margin-top: 15px;
    float: left;
    display: flex;
    align-items: center;
    text-align: center;
margin-left: 25px;
}

.two {

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-right: -100px;
}

.three {
    margin-right: 200px;
    margin-left: 20px;
    font-size: 18px;
    color: gold;
}

.four {
    margin-right: 10px;
}
</style>