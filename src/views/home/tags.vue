<script>
import { GetRandomInt } from "@/plugins/tools";
export default {
  render() {
    return (
      <div>
        {this.tags.map(tag => {
          const random = this.getRandomNum();
          const randomType = this.tagsTypes[random];

          return (
            <el-tag type={randomType} on-click={() => this.alert(tag)}>
              {tag}
            </el-tag>
          );
        })}
      </div>
    );
  },

  data() {
    return {
      tagsTypes: ["", "success", "info", "warning", "danger"],
      tags: []
    };
  },

  created() {
    this.$http(`/api/v1/tags`).then(res => {
      this.tags = res.data.data;
    });
  },

  methods: {
    getRandomNum() {
      return GetRandomInt(this.tagsTypes.length);
    },

    alert(tag) {
      this.$emit("clickTag", tag);
    }
  }
};
</script>

<style lang='scss' scoped>
.home-tags {
}
</style>