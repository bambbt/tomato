<template>
  <div>
    <div>
      <span v-show="!more" v-html="getSubstringOfText"></span>
      <span v-show="more" v-html="getCompleteHtml"></span>
    </div>
    <div class="row">
      <div class="col">
        <button
          @click="toggleShowText"
          type="button"
          class="btn btn-light border rounded"
        >{{ btnText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      more: false,
      btnText: "Read More"
    };
  },
  props: ["htmlContent", "begin", "end"],
  computed: {
    getSubstringOfText: function() {
      return this.htmlContent.substr(parseInt(this.begin), parseInt(this.end));
    },
    getCompleteHtml: function() {
      return this.htmlContent;
    }
  },
  methods: {
    toggleShowText: function() {
      this.more = !this.more;
      this.btnText = "Read More" === this.btnText ? "Read Less" : "Read More";
    }
  }
};
</script>

<style></style>
