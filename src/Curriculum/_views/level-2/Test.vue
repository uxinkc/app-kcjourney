<template>
  <div>
    <baseHeader USE_SEARCH="true"></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fds-section">
        <div class="fds-section__bd">
          <div class="fds-m-t--s fds-m-b--m">
            
              <h1>[Admin] Curriculum - Level 2 Exam</h1>
                
            </div>

        </div>
      </div>

      <div class="fds-section">
        <div class="fds-section__bd">

          <article class="ds-article">
            
            <div class="fds-field">
              <label class="fds-field__label" for="TheItem2">Question Text <span class="fds-field__label-desc">Required</span></label>
              <input class="fds-input fds-field__item" id="TheItem2" aria-describedby="lorem-1234-help-2" aria-required="true" name="TheItem2" type="text" value="">
              <span class="fds-field__help" id="lorem-1234-help-2">Multiple Selection Question</span>
            </div>

            
            <div class="fds-field">
              <label class="fds-field__label" for="TheItem2">Reponse 1 <span class="fds-field__label-desc">Required</span></label>
              <input class="fds-input fds-field__item" id="TheItem2" aria-describedby="lorem-1234-help-2" aria-required="true" name="TheItem2" type="text" value="">
            </div>

            <div class="fds-field">
              <label class="fds-field__label" for="TheItem2">Reponse 2 <span class="fds-field__label-desc">Required</span></label>
              <input class="fds-input fds-field__item" id="TheItem2" aria-describedby="lorem-1234-help-2" aria-required="true" name="TheItem2" type="text" value="">
            </div>

            <div class="fds-field">
              <label class="fds-field__label" for="TheItem2">Reponse 3 <span class="fds-field__label-desc">Required</span></label>
              <input class="fds-input fds-field__item" id="TheItem2" aria-describedby="lorem-1234-help-2" aria-required="true" name="TheItem2" type="text" value="">
            </div>

            <div class="fds-field">
              <label class="fds-field__label" for="TheItem2">Reponse 4 <span class="fds-field__label-desc">Required</span></label>
              <input class="fds-input fds-field__item" id="TheItem2" aria-describedby="lorem-1234-help-2" aria-required="true" name="TheItem2" type="text" value="">
            </div>

            <div class="fds-field fds-m-t--xl">
              <span class="fds-level fds-level--auto-grow">
                <button @click="submit" class="fds-btn fds-btn--secondary">Save</button>
                <button @click="goto('/curriculum/level-2/test')" class="fds-btn fds-btn--secondary">Add New Question</button>
              </span>
            </div>

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
import { useGrowlControls } from "@/_composables/useGrowlControls";

import { v4 as uuidv4 } from "uuid";

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

    const submit = () => {      
      goto('/curriculum/');

      showSuccessGrowl(
        {
          "title": "Content Saved",
          "useIcon": 'true',
          "msg": "You have updated the Learning Module."
        }
      );
    }

    return {
      goto,
      submit
    };
  }
};
</script>