<template>
  <div>{{ propName }}</div>
</template>

<script>
export default {
  props: {
    propName: {
      type: String,
      required: true
    }
  },
  mounted() {
    console.log(this.propName);
  }
};
</script>

