<template>
  <div class="goods-params" v-if="Object.keys(detailGoodsParamsData).length !== 0">
    <table class="goods-params-size" v-for="(tableItem, index) in detailGoodsParamsData.rule.tables" :key="index">
      <tr v-for="(trItem, trIndex) in tableItem" :key="trIndex">
        <td v-for="(tdItem, tdIndex) in trItem" :key="tdIndex">
          {{tdItem}}
        </td>
      </tr>
    </table>

    <table class="goods-params-type">
      <tr v-for="(item, index) in detailGoodsParamsData.info.set" :key="index">
        <td class="key">{{item.key}}</td>
        <td class="value">{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'DetailGoodsParams',
    props: {
      detailGoodsParamsData: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .goods-params {
    padding: 10px 10px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }

  .goods-params table {
    width: 100%;
    border-collapse: collapse;
  }

  .goods-params table tr {
    height: 30px;
  }

  .goods-params .goods-params-size {
    margin-bottom: 20px;
  }

  .goods-params .goods-params-type .key {
    width: 95px;
  }

  .goods-params .goods-params-type .value {
    color: #eb4868
  }
</style>
