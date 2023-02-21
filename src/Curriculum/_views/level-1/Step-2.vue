<template>
  <div>
    <baseHeader USE_SEARCH="true"></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fds-section">
        <div class="fds-section__bd">
          <div class="fds-m-t--s fds-m-b--m">
            
              <h1>[Admin] Curriculum - Level 1</h1>
                
            </div>

        </div>
      </div>

      <div class="fds-section">
        <div class="fds-section__bd">

          <div class="fds-level fds-level--none@s fds-level--full@m fds-level--grow-even fds-level--align-top fds-level--gutter-l">
            
            <article class="ds-article">
              
              <div class="fds-field">
                <label class="fds-field__label" for="UNIQUE-ID-88s8SUGg">Background <span class="fds-field__label-desc">Required</span></label>
                <textarea class="fds-textarea fds-field__item" placeholder="Placeholder" id="UNIQUE-ID-88s8SUGg" aria-describedby="lorem-88s8SUGg-help-4" aria-required="true" name="UNIQUE-ID-88s8SUGg"><p>In 1956, George Miller asserted that the span of immediate memory and absolute judgment were both limited to around 7 pieces of information. The main unit of information is the bit, the amount of data necessary to make a choice between two equally likely alternatives. Likewise, 4 bits of information is a decision between 16 binary alternatives (4 successive binary decisions).</p><p>The point where confusion creates an incorrect judgment is the channel capacity. In other words, the quantity of bits which can be transmitted reliably through a channel, within a certain amount of time.</p></textarea>
                <span class="fds-field__help" id="lorem-88s8SUGg-help-4">Add content</span>
              </div>
              
            </article>

            <div class="fds-field">
              <label class="fds-field__label" for="TheItem2">Associated Image <span class="fds-field__label-desc">Required</span></label>
              <input class="fds-input fds-field__item" id="TheItem2" aria-describedby="lorem-1234-help-2" aria-required="true" name="TheItem2" type="text" value="">
              <span class="fds-field__help" id="lorem-1234-help-2">This can be a JPEG or SVG</span>
            </div>

          </div>


          <div class="fds-stepped-control">
            <div class="fds-stepped-control__bd">
              <div class="fds-stepped-control__message fds-stepped-control__message--fill" role="status">
                <strong>2</strong> of <strong>3</strong> Steps
              </div>
              <div class="fds-stepped-control__list">
                <div class="fds-stepped-control__item">
                  <button @click="goto('/curriculum/level-1/step-1')" class="fds-btn fds-btn--alt fds-btn--large fds-stepped-control__btn" type="button">
                    <span class="fds-stepped-control__btn-label">Previous</span>
                  </button>
                </div>

                <div class="fds-stepped-control__shim"></div>
                <div class="fds-stepped-control__item fds-stepped-control__item--push">
                  <button @click="goto('/curriculum/level-1/step-3')" class="fds-btn fds-btn--primary fds-btn--large fds-stepped-control__btn" type="submit">
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