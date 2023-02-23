<template>
  <div>
    <baseHeader USE_SEARCH="true"></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fds-section">
        <div class="fds-section__bd">
          <div class="fds-m-t--s fds-m-b--m">
            
              <h1>Learning Module - Level 2</h1>
                
            </div>

        </div>
      </div>

      <div class="fds-section">
        <div class="fds-section__bd">

          <div class="fds-level fds-level--none@s fds-level--full@m fds-level--grow-even fds-level--align-top fds-level--gutter-l">
            
            <article class="ds-article fds-m-r--m">
              
              <p class="fds-text-size--5">Takeaways:</p>
              <p class="fds-m-t--m fds-text-size--4">
                1) Users will transfer expectations they have built around one familiar product to another that appears similar.
              </p>
              <p class="fds-m-t--m fds-text-size--4">
                2) By leveraging existing mental models, we can create superior user experiences in which the users can focus on their tasks rather than on learning new models.
              </p>
              <p class="fds-m-t--m fds-text-size--4">
                3) When making changes, minimize discord by empowering users to continue using a familiar version for a limited time.
              </p>
            </article>

            <span class="fds-box fds-bg--aqua fds-hide@s-only">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 567 563"><g fill="none" fill-rule="evenodd" stroke="#f4f1d0" stroke-width="30"><path style="--animation-order: 1" d="M15 98h454v450H15z"></path><path style="--animation-order: 2" d="M98 15h454v450H98z"></path></g></svg>
            </span>


          </div>
    

          <div class="fds-stepped-control">
            <div class="fds-stepped-control__bd">
              <div class="fds-stepped-control__message fds-stepped-control__message--fill" role="status">
                <strong>3</strong> of <strong>3</strong> Steps
              </div>
              <div class="fds-stepped-control__list">
                <div class="fds-stepped-control__item">
                  <button @click="goto('/learning/level-2/step-2')" class="fds-btn fds-btn--alt fds-btn--large fds-stepped-control__btn" type="button">
                    <span class="fds-stepped-control__btn-label">Previous</span>
                  </button>
                </div>

                <div class="fds-stepped-control__shim"></div>
                <div class="fds-stepped-control__item fds-stepped-control__item--push">
                  <button @click="goto('/learning/level-2/test-1')" class="fds-btn fds-btn--primary fds-btn--large fds-stepped-control__btn" type="submit">
                    <span class="fds-stepped-control__btn-label">Take the Test!</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
              

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