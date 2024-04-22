<template>
  <PosPrinter :prop-name="parentData"></PosPrinter>
</template>

<script>
import PosPrinter from './PosPrinter.vue'

export default {
  components: {
    PosPrinter
  },
  data() {
    return {
      parentData: 'Data to be passed to child component'
    };
  }
};
</script>
