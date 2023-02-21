<template>
  <div>
    <baseHeader USE_SEARCH="true"></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fds-section">
        <div class="fds-section__bd">
          <div class="fds-m-t--s fds-m-b--m">
            
            <h1>Certificate</h1>
            <p class="fds-text--lead fds-m-t--l">Great! Now keep going!</p>
            
            <div class="fds-box fds-box--bw-1 fds-shadow--raised">

              <div class="fds-level fds-level--align-bottom fds-level--gutter-xl">
                <p class="fds-text--lead">
                  <svg class="fds-icon fds-icon--size-6" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>
                </p>
                <p class="fds-text-size--4 fds-text-size--5@m fds-text-size--6@l">
                  Level 1 Apprenticeship<br/>
                  Certification Completed!
                </p>
              </div>
              <div class="fds-m-t--xl">
                <p>
                  Name: <strong>Emily Early</strong>
                </p>
                <p>
                  Date Completed: <strong>{{ new Date() }}</strong>
                </p>
                
              </div>

            </div>
                
            </div>

        </div>
      </div>

      <div class="fds-section">
        <div class="fds-section__bd">

          <article class="ds-article fds-level fds-level--auto-between">
              
            
            <button @click="goto('/learning/level-2/step-1')" class="fds-btn fds-btn--secondary">Continue to Level 2</button>
            <button @click="goto('/learning/')" class="fds-btn fds-btn--secondary">Return Home</button>

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