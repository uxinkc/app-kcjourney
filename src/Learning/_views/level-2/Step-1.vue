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
              
              <p class="fds-text-size--5">Overview:</p>
              <p class="fds-m-t--m">
                A newer principle that has surfaced since the advent of the internet is Jakob's Law. It states <strong><em>"Users spend most of their time on other sites. This means that users prefer your site to work the same way as all the other sites they already know."</em></strong> 
              </p>
                
              <p class="fds-m-t--m">
                This principle is based on the idea that humans are confortable with what they are familiar with, which establishes a trusted relationship. The more trust a User has with a system, the more efficient the experience can become. Trust also enables Users to perceive web sites and applications as easier to use, and can more quickly complete tasks and work thru processes.
              </p>

              <p class="fds-m-t--m">
                What makes Apple, Google, and other premium technology brands so successful is their ability to maintain functionality and features that behave the same or similar across all of their product offerings. Jakob's Law is based on this repetition and establishment of trust and familiarity.
              </p>
              
            </article>

            <span class="fds-box fds-bg--aqua fds-hide@s-only">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 567 563"><g fill="none" fill-rule="evenodd" stroke="#f4f1d0" stroke-width="30"><path style="--animation-order: 1" d="M15 98h454v450H15z"></path><path style="--animation-order: 2" d="M98 15h454v450H98z"></path></g>
              </svg>
            </span>


          </div>
    

          <div class="fds-stepped-control">
            <div class="fds-stepped-control__bd">
              <div class="fds-stepped-control__message fds-stepped-control__message--fill" role="status">
                <strong>1</strong> of <strong>3</strong> Steps
              </div>
              <div class="fds-stepped-control__list">
                <div class="fds-stepped-control__item">
                  <button @click="goto('/learning/')" class="fds-btn fds-btn--alt fds-btn--large fds-stepped-control__btn" type="button">
                    <span class="fds-stepped-control__btn-label">Return Home</span>
                  </button>
                </div>

                <div class="fds-stepped-control__shim"></div>
                <div class="fds-stepped-control__item fds-stepped-control__item--push">
                  <button @click="goto('/learning/level-2/step-2')" class="fds-btn fds-btn--primary fds-btn--large fds-stepped-control__btn" type="submit">
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