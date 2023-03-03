<script setup lang='ts'>
import {ChatCompletionRequestMessage, Configuration, OpenAIApi} from "openai";

defineOptions({
    name: 'ProTable'
})
const data: any = ref([])

interface Message {
    content: string,
    role: string
}

const QAList: ChatCompletionRequestMessage[] = ref([
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
let inputContent: string = ref('')
const enterInput = () => {
    const inputContent2 = JSON.parse(JSON.stringify(inputContent.value))
    console.log("🚀 ~ file:index line:32 >>>", inputContent2)
    QAList.value.push({
        "role": "user",
        "content": inputContent2
    })
    getAi()
}
const getAi = async () => {
    const configuration = new Configuration({
        apiKey: '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',
    });
    const openai = new OpenAIApi(configuration);

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: QAList.value
    });
    QAList.value.push(completion.data.choices[0].message)
}

onMounted(() => {
    setTimeout(() => {
        data.value = [
            {
                name: {
                    test: 'test'
                }
            }
        ]
    }, 2000)
    // getAi()
})
</script>

<template>
  <div>
    <!--<h1>我是proTable组件</h1>-->
    <!--<span v-if="data && data.length">{{ data[0].name.test }}</span>-->
    <h1>ChatGPT</h1>
    <br>
    <input @keyup.enter="enterInput" v-model="inputContent">
    <br>
    <div v-for="item in QAList">
      <div>角色: <span style="background: pink">{{ item.role }}</span></div>
      <br>
      <div v-html="item.content">
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>

</style>
