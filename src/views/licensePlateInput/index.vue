<template>
    <div>
        <h1 style="font-size: 24px;font-weight: bold;">车牌号：{{ plateNumbers.join('') }}</h1>
        <ul>
            <li :class="{ selected: selectedIndex === 0 }" @click="selectPlateNumber(0)">{{ plateNumbers[0] }}</li>
            <li :class="{ selected: selectedIndex === 1 }" @click="selectPlateNumber(1)">{{ plateNumbers[1] }}</li>
            <li class="no_border">·</li>
            <li :class="{ selected: selectedIndex === 2 }" @click="selectPlateNumber(2)">{{ plateNumbers[2] }}</li>
            <li :class="{ selected: selectedIndex === 3 }" @click="selectPlateNumber(3)">{{ plateNumbers[3] }}</li>
            <li :class="{ selected: selectedIndex === 4 }" @click="selectPlateNumber(4)">{{ plateNumbers[4] }}</li>
            <li :class="{ selected: selectedIndex === 5 }" @click="selectPlateNumber(5)">{{ plateNumbers[5] }}</li>
            <li :class="{ selected: selectedIndex === 6 }" @click="selectPlateNumber(6)">{{ plateNumbers[6] }}</li>
        </ul>
        <div class="Keyboard" v-show="isShowKeyboard">
            <ul>
                <template v-if="selectedIndex === 0">
                    <li v-for="number in provinceAbbr" @click="selectNumber(number)">{{ number }}</li>
                    <li class="delete" @click="deleteProvinceAbbr()">删除</li>
                </template>
                <template v-else-if="selectedIndex === 1">
                    <li v-for="number in letters" @click="selectNumber(number)">{{ number }}</li>
                    <li class="delete" @click="deleteLetter()">删除</li>
                </template>
                <template v-else>
                    <li v-for="number in numbers" @click="selectNumber(number)">{{ number }}</li>
                    <li class="delete" @click="deleteNumber()">删除</li>
                </template>
            </ul>
        </div>
    </div>
</template>
<script setup lang="ts">

defineOptions({
    name: "licensePlateInput"
})
const isShowKeyboard = ref(false)
const plateNumbers = ref(['', '', '', '', '', '', ''])
const selectedIndex = ref(0)

const provinceAbbr = ['京', '津', '沪', '渝', '冀', '豫', '云', '辽', '黑', '湘', '皖', '鲁', '新', '苏', '浙', '赣', '鄂', '桂', '甘', '晋', '蒙', '陕', '吉', '闽', '贵', '粤', '青', '藏', '川', '宁', '琼']
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

function selectPlateNumber(index: number) {
    selectedIndex.value = index
    isShowKeyboard.value = true
}

function selectNumber(number: string) {
    const index = selectedIndex.value
    if (index !== -1) {
        plateNumbers.value[index] = number
        selectedIndex.value = getNextSelectedIndex(index)
        if (selectedIndex.value === -1) {
            isShowKeyboard.value = false
        }
    }
}

function deleteProvinceAbbr() {
    const index = selectedIndex.value
    if (index === 0) {
        plateNumbers.value[index] = ''
        selectedIndex.value = getNextSelectedIndex(index)
    }
}

function deleteLetter() {
    const index = selectedIndex.value
    if (index !== -1 && index !== 0) {
        plateNumbers.value[index] = ''
        selectedIndex.value = getPrevSelectedIndex(index)
    }
}

function deleteNumber() {
    const index = selectedIndex.value
    if (index !== -1 && index !== 1) {
        plateNumbers.value[index] = ''
        selectedIndex.value = getPrevSelectedIndex(index)
    }
}

function getNextSelectedIndex(index: number): number {
    if (index === 0) {
        return 1
    }
    for (let i = index + 1; i < plateNumbers.value.length; i++) {
        if (plateNumbers.value[i] === '') {
            return i
        }
    }
    return -1
}

function getPrevSelectedIndex(index: number): number {
    for (let i = index - 1; i >= 0; i--) {
        if (plateNumbers.value[i] !== '') {
            return i
        }
    }
    return 0
}

watchEffect(() => {
    const plateNumber = plateNumbers.value.join('')
    console.log('当前车牌号：', plateNumber)
})
// 返回首页
const router = useRouter()
</script>

<style scoped lang="scss">
.go_back {
    border: 1px solid #9d9696;
    width: 50px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
}

ul {
    display: flex;

    li {
        border: 1px solid #000;
        border-radius: 5px;
        width: 100px;
        height: 100px;
        margin: 10px;
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        line-height: 100px;

        &.selected {
            background-color: #f2f2f2;
        }
    }

    .no_border {
        border: none;
    }
}

.Keyboard {
    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        li {
            border: 1px solid #000;
            border-radius: 5px;
            width: 60px;
            height: 60px;
            margin: 10px;
            font-size: 24px;
            font-weight: bold;
            text-align: center;
            line-height: 60px;
            cursor: pointer;

            &.delete {
                width: 140px;
            }
        }
    }
}
</style>