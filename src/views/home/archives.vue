<script>
import { GetCategories } from "@/api/blog";
export default {
  render() {
    return (
      <ul>
        {this.categories.map(c => {
          return (
            <li on-click={() => this.clickArchive(c.category)}>
              {c.category} ({c.num})
            </li>
          );
        })}
      </ul>
    );
  },

  data() {
    return {
      categories: []
    };
  },

  created() {
    GetCategories().then(res => {
      this.categories = res.data;
    });
  },

  methods: {
    clickArchive(val) {
      this.$emit("clickArchive", val);
    }
  }
};
</script>

<style lang='scss' scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li {
  font: 200 15px/1.5 Helvetica, Verdana, sans-serif;
  border-bottom: 1px solid #ccc;
}

li:last-child {
  border: none;
}

li:hover {
  cursor: pointer;
  font-size: 20px;
  background: #f6f6f6;
}
</style>