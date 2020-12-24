<template>
  <div class="vue-snake-timeline" :style="setTimelineStyles" ref="snake">
    <section class="timeline" v-if="visible">
      <ol
        :style="{
          width: `${rowSpanWidth * rowSpan}px`,
        }"
        v-for="(k, j) in rowItems"
        :key="j"
      >
        <!-- 起始原点 -->
        <div class="start-pot" v-if="j === 0"></div>
        <li
          v-for="(item, i) in k"
          :key="i"
          :style="setStyle"
          @click="clickEvent(item)"
        >
          <div class="top text-ellipsis">
            {{ item.top }}
          </div>
          <div class="middle text-ellipsis">
            {{ item.middle }}
          </div>
          <div class="bottom text-ellipsis">
            {{ item.bottom }}
          </div>
        </li>
        <!-- 判断是否为最后一行 -->
        <template v-if="j < rowItems.length - 1">
          <!-- 如果不是最后一行,并且是奇数行,需要显示右侧圆弧边框 -->
          <template v-if="j % 2 === 0">
            <!-- 右侧圆弧 -->
            <div class="circle-right"></div>
          </template>
          <template v-else>
            <!-- 左侧圆弧 -->
            <div class="circle-left"></div>
          </template>
        </template>
        <template v-else>
          <div class="end-icon" :style="getEndIconStyle(j, k.length)"></div>
        </template>
      </ol>
    </section>
  </div>
</template>

<script>
export default {
  name: "VueSnakeTimeline",
  data() {
    return {
      // 单位宽度
      rowSpanWidth: 220,
      rowSpan: 6,
      visible: false,
    };
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    timelinePadding: {
      type: String,
      default: "",
    },
    timelineBackground: {
      type: String,
      default: "",
    },
    lineColor: {
      type: String,
      default: "#03A9F4",
    },
  },
  computed: {
    rowItems() {
      return this.formatArr(this.items, this.rowSpan);
    },
    setTimelineStyles() {
      const { timelineBackground, timelinePadding } = this;
      const styleObj = {};

      if (timelinePadding) {
        styleObj.padding = timelinePadding;
      }

      if (timelineBackground) {
        styleObj.background = timelineBackground;
      }

      return styleObj;
    },
  },
  methods: {
    clickEvent(item) {
      this.$emit("click", item);
    },
    formatArr(array, subGroupLength) {
      let index = 0;
      const newArray = [];
      while (index < array.length) {
        newArray.push(array.slice(index, (index += subGroupLength)));
      }
      return newArray;
    },
    setStyle() {
      const { lineColor } = this;
      return {
        background: lineColor,
      };
    },
    getEndIconStyle(index, length) {
      if (index % 2 === 1) {
        const right = `${length * this.rowSpanWidth}px`;
        return {
          right,
        };
      }
      const left = `${length * this.rowSpanWidth}px`;
      return {
        left,
      };
    },
  },
  mounted() {
    this.rowSpan = Math.floor(this.$refs.snake.offsetWidth / 260);
    window.addEventListener("resize", this.resizeHandler);
    this.visible = true;
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resizeHandler);
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
