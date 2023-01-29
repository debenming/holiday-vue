<template>
    <div>
        
            <h1 style="color:white">恭迎尊敬的宇宙级客户大驾光临！！！</h1>
        
        <el-descriptions  :column="2" border>
            <el-descriptions-item label="用户名" :contentStyle="{ 'text-align': 'center' }" label-class-name="my-label"
                content-class-name="my-content">{{this.$store.state.bigname}}</el-descriptions-item>

            <el-descriptions-item label="用户id" :contentStyle="{ 'text-align': 'center' }">{{ this.$store.state.personId }}</el-descriptions-item>

            <el-descriptions-item label="居住地" :contentStyle="{ 'text-align': 'center' }">广东省</el-descriptions-item>

            <el-descriptions-item label="备注" :contentStyle="{ 'text-align': 'center' }">
                <el-tag size="small">大项目真难做555</el-tag>
            </el-descriptions-item>

            <el-descriptions-item label="联系地址" :contentStyle="{ 'text-align': 'center' }">火星省地级市big区small大道 2023130号
            </el-descriptions-item>

            <el-descriptions-item label="兴趣爱好"
                :contentStyle="{ 'text-align': 'center' }">乌拉乌拉乌拉乌拉wwl，新年快乐！！</el-descriptions-item>

        </el-descriptions>
    </div>
</template>

<script>
export default {
mounted() {
    console.log(this.$store.state.personId)
},
}
</script>


<style scoped>
.my-label {
    background: #E1F3D8;
}

.my-content {
    background: #FDE2E2;
}

</style>