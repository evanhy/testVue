<script setup lang="ts">
import {ElMessage} from 'element-plus';
import {Configuration, OpenAIApi} from 'openai';

defineOptions({
    name: 'ProTable',
})
const data: any = ref([])

const QAList = ref([
    /*  {
        "role": "user", "content": "hello"
      },
      {
        "content":
            "\n\nHello! How can I assist you today?",
        "role":
            "assistant"
      },
      {
        "content": 'you are best',
        "role": 'user',
      }*/
])
let inputContent = ref('')
const enterInput = () => {
    if (inputContent.value.trim() === '') {
        inputContent.value = ''
        return ElMessage.warning('请输入内容~ \n 555')
    }
    const inputContent2 = JSON.parse(JSON.stringify(inputContent.value))
    inputContent.value = ''
    QAList.value.push({
        role: 'user',
        content: inputContent2,
    })
    getAi()
}
const apiKey = ref('')
apiKey.value = 'sk-7ilbUKK5aiElXZVNjAkKT3Bl'
apiKey.value += 'bkFJpHOtGpcYpOWpHa3xgI8M'
const getAi = async () => {
    const configuration = new Configuration({
        apiKey: apiKey.value
    })
    const openai = new OpenAIApi(configuration)

    const completion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: QAList.value,
    })
    QAList.value.push(completion.data.choices[0].message)
}

const card = ref(null)

</script>

<template>
    <div ref="card">
        <!--<h1>我是proTable组件</h1>-->
        <div style="text-align: center">
            <h1>ChatGPT</h1>
        </div>
        <div>
            <el-card>
                <div class="input_box">
                    <el-input
                        :rows="2"
                        :autosize="{ minRows: 2, maxRows: 6 }"
                        type="textarea"
                        placeholder="输入你要询问的问题"
                        @keyup.enter="enterInput"
                        v-model="inputContent"
                    ></el-input>
                </div>
                <br/>
                <div class="content" v-for="item in QAList">
                    <div>
                        <el-avatar>{{ item.role }}</el-avatar>
                    </div>
                    <br/>
                    <div style="white-space: pre-wrap;" v-html="item.content.replace(/\n/gm, '<br>')"></div>
                    <br/>
                </div>
            </el-card>
        </div>
    </div>
</template>

<style scoped>
.input_box {
    display: flex;
    justify-content: center;
}

.input_box .el-textarea {
    width: 50%;
}

.content {
    border: 1px solid #ccc;
    margin-bottom: 5px;
}
</style>
