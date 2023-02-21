<template>
  <div>
    <baseHeader USE_SEARCH="true"></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fds-section">
        <div class="fds-section__bd">
          <div class="fds-m-t--s fds-m-b--m">
            
              <h1>Learning - Level 2</h1>
              <p class="fds-text--lead fds-m-t--l">In this module you will learn about <strong>Jakob's Law</strong></p>
                
            </div>

        </div>
      </div>

      <div class="fds-section">
        <div class="fds-section__bd">

          <div class="fds-level fds-level--none@s fds-level--full@m fds-level--grow-even fds-level--align-top fds-level--gutter-l">
            
            <article class="ds-article fds-m-r--m">
              
              <p class="fds-text-size--5">Background:</p>
              <p class="fds-m-t--m">Jakob’s Law was coined by Jakob Nielsen, a User Advocate and principal of the Nielsen Norman Group which he co-founded with Dr. Donald A. Norman (former VP of research at Apple Computer). Dr. Nielsen established the ‘discount usability engineering’ movement for fast and cheap improvements of user interfaces and has invented several usability methods, including heuristic evaluation.</p>
              <p class="fds-m-t--m">Watch the brief video from NN/g for more information.</p>
              
            </article>

            <span class="fds-box">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/wzb4mK9DiHM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </span>

          </div>


          <div class="fds-stepped-control">
            <div class="fds-stepped-control__bd">
              <div class="fds-stepped-control__message fds-stepped-control__message--fill" role="status">
                <strong>2</strong> of <strong>3</strong> Steps
              </div>
              <div class="fds-stepped-control__list">
                <div class="fds-stepped-control__item">
                  <button @click="goto('/learning/level-2/step-1')" class="fds-btn fds-btn--alt fds-btn--large fds-stepped-control__btn" type="button">
                    <span class="fds-stepped-control__btn-label">Previous</span>
                  </button>
                </div>

                <div class="fds-stepped-control__shim"></div>
                <div class="fds-stepped-control__item fds-stepped-control__item--push">
                  <button @click="goto('/learning/level-2/step-3')" class="fds-btn fds-btn--primary fds-btn--large fds-stepped-control__btn" type="submit">
                    <span class="fds-stepped-control__btn-label">Next</span>
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