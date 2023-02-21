<template>
  <div>
    <baseHeader USE_SEARCH="true"></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fds-section">
        <div class="fds-section__bd">
          <div class="fds-m-t--s fds-m-b--m">
            
              <h1>UX Learning</h1>
              <p class="fds-text--lead fds-m-t--l">The start to your career in UX is just a few clicks away!</p>
              <p class="fds-m-t--l">
                To participate in the UX Journey program, you must review the Level 1 and Level 2 learning modules, and pass the corresponding exams. Passing each exam is required to be certificed and participate in the Level 2 and Level 3 Apprenticeship program. The project tasks you will work on directly correlate to the materials learned in both Level 1 and Level 2 learning modules.
              </p>
              <p class="fds-m-t--l">
                Good Luck!
              </p>
                
            </div>

        </div>
      </div>

      <div class="fds-section">
        <div class="fds-section__bd">

          <article class="ds-article fds-level fds-level--auto-between">
              
            <button @click="goto('/learning/level-1/step-1')" class="fds-btn fds-btn--secondary">View Level 1</button> 
            <button disabled @click="goto('/learning/level-2/step-1')" class="fds-btn fds-btn--secondary">View Level 2</button>

          </article>

        </div>
      </div>
    </main>

    <baseFooter></baseFooter>
  </div>
</template>

<script>
import { defineAsyncComponent, ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useNavigation } from "@/_composables/useNavigation";

//import { v4 as uuidv4 } from "uuid";

const baseHeader = defineAsyncComponent(() => import("@/_partials/BaseHeader.vue"));
const baseFooter = defineAsyncComponent(() => import("@/_partials/BaseFooter.vue"));

export default {
  components: {
    baseHeader,
    baseFooter
  },

  setup(props) {
    const baseUrl = ref(import.meta.env.BASE_URL);
    const store = useStore();
    const { goto } = useNavigation();

    onMounted(()=>{
      //store.dispatch("videos/setVideos");
    });

    return {
      goto,
    };
  }
};
</script>