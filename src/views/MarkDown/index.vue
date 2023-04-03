<script lang="ts" setup>

defineOptions({
    name: "MarkDown"
})


const text = ref(
    `
\`\`\`
123
\`\`\`
    `
)
const headers = ["分值", "人均", "折算"]
const organizations = [
    {
        // 序号
        id: 1,
        // 组织
        name: "组织A",
        // 警员数
        policeNum: 100,
        scores: [100, 20, 0.8, 100, 20, 0.8, 100, 20, 0.8, 100, 20, 0.8],
        // 总折算
        totalConversion: 100,
        // 总分
        totalScore: 64,
        //   等级判定
        levelJudgment: "B",
    }
]
</script>
<template>
  <div>
    <v-md-editor v-model="text" height="400px"></v-md-editor>
    <v-md-preview :text="text"></v-md-preview>

    <table>
      <thead>
      <tr>
        <th rowspan="2">序号</th>
        <th rowspan="2">组织</th>
        <th rowspan="2">警员数</th>
        <th colspan="3">量化得分</th>
        <th colspan="3">组织记录</th>
        <th colspan="3">执法质量</th>
        <th colspan="3">综合工作</th>
        <th rowspan="2">总折算</th>
        <th rowspan="2">总分</th>
        <th rowspan="2">等级判定</th>
      </tr>
      <tr>
        <template v-for="item in 4" :key="item">
          <th v-for="header in headers" :key="header">{{ header }}</th>
        </template>
      </tr>
      </thead>
      <tbody>
      <tr v-for="org in organizations" :key="org.id">
        <td>{{ org.id }}</td>
        <td>{{ org.name }}</td>
        <td>{{ org.policeNum }}</td>
        <td v-for="score in org.scores" :key="score">{{ score }}</td>
        <td>{{ org.totalConversion }}</td>
        <td>{{ org.totalScore }}</td>
        <td>{{ org.levelJudgment }}</td>
      </tr>
      </tbody>
    </table>

  </div>
</template>

<style lang="scss">
table {
  width: 100%;
  border-collapse: collapse;
}
thead {
  th {
    color: #54cae2;
    background: #1a2562;
  }
}
tbody {
  td {
    background: #0c144a;
    &:hover {
      background: #c7d28a;
      color: #000;
    }
  }
}
th, td {
  color: #fff;
  border: 1px solid #29377b;
  text-align: center;
}
</style>

