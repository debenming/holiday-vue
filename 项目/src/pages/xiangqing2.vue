<template>
    <div class="bigbox">

        <el-form ref="form" :model="form" label-width="80px">

            <el-form-item label="商品图片">
                <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card"
                    :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                    <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" src="dialogImageUrl" alt="">
                </el-dialog>
            </el-form-item>

            <el-form-item label="商品名称">
                <el-input v-model="form.sellname"></el-input>
            </el-form-item>

            <el-form-item label="商品价格">
                <el-input v-model="form.sellPrice"></el-input>
            </el-form-item>

            <el-form-item label="商品库存">
                <el-input v-model="form.sellNum"></el-input>
            </el-form-item>

            <el-form-item label="商品卖家">
                <el-input v-model="form.sellBelong"></el-input>
            </el-form-item>




            <el-form-item label="商品详情">
                <el-input type="textarea" v-model="form.sellDetail"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="add()">上架商品</el-button>
                <el-button @click="qu()">取消</el-button>
            </el-form-item>
        </el-form>



    </div>
</template>

<script>
import { request } from "../network/request/request"
export default {
    data() {
        return {
            fileData: '',
            imageUrl: '',

            form: {
                sellname: '',
                sellPrice: '',
                sellNum: '',
                selloutnum: 0,
                sellBelong: '',
                sellDetail: '',
                auth_id: "2211640303",
                auth_code: "zhoutinglong",
            },
            dialogImageUrl: '',
            dialogVisible: false,
        }
    },
    methods: {
        qu(){
            this.$store.state.dialogVisible=false
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },

        UnloadImg(file) {
            this.imageUrl = URL.createObjectURL(file.file);
            this.fileData = file.file
            console.log(file.file);
        },
        add() {

            request({
                url: '/createSell',
                method: 'post',
                data: this.form

            }).then(value => {
                console.log('提交成功')
                console.log(value)
                if (value.data.message == '同店商品名称重复') {
                    this.$message.error('创建失败，同店商品名称重复');
                }
                else {
                    this.$message({
                        message: '恭喜您创建成功',
                        type: 'success'
                    });
                    this.$emit("onEvent",false)
                    // this.$store.state.fresh = false 
                    this.$store.state.dialogVisible = false 
                    console.log(this.$store.state.dialogVisible);
                }


            }).catch(err => {
                console.log('提交失败')
                console.log(err);
            })


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