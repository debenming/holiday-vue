<template>
    <div class="bigbox">
        <el-form ref="form" :model="form" label-width="80px">

            <el-form-item label="商品图片">
                <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card"
                    :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                    <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </el-form-item>
            
        </el-form>

    </div>
</template>

<script>
export default {
    data() {
        return {
            dialogImageUrl: '',
            dialogVisible: false
        };
    },
    methods: {
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        }
    }
}
</script>

<style scoped>
img {

height: 15vw;
max-width: 100%;
max-height: 100%;
vertical-align: middle;
border-radius: 10px;
}

.text {
width: 100%;
height: 100%;

padding-right: 20px;
}

.el-form {
margin-top: 20px;
}



span {
width: 100%;
height: 20px;
}

.el-input {
width: 50%;
}

.one {
padding-top: -35px;
}
</style>