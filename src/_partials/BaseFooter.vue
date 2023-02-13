<template>
  <footer>
    <footerTopper></footerTopper>
    <!-- <footerScreenId
      SCREEN_ID="UX Journey">
    </footerScreenId> -->
    
    <hiddenItems></hiddenItems>

  </footer>
</template>

<script>
import { defineAsyncComponent } from "vue";
const footerTopper = defineAsyncComponent(() => import("@/_components/footer/footer-topper.vue"));
const footerFooter = defineAsyncComponent(() => import("@/_components/footer/footer-footer.vue"));
const footerScreenId = defineAsyncComponent(() => import("@/_components/footer/footer-screen-id.vue"));
const hiddenItems = defineAsyncComponent(() => import("@/_components/hidden/hidden-items.vue"));

export default {
  
  components: {
    footerTopper,
    footerFooter,
    footerScreenId,
    hiddenItems
  },
  setup(){

  }
}
</script>