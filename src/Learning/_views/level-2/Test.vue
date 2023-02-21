<template>
  <div>
    <baseHeader USE_SEARCH="true"></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fds-section">
        <div class="fds-section__bd">
          <div class="fds-m-t--s fds-m-b--m">
            
              <h1>Learning - Level 2 Exam</h1>
                
            </div>

        </div>
      </div>

      <div class="fds-section">
        <div class="fds-section__bd">

          <article class="ds-article">
            <p class="fds-text-size--4">Which of the below represent why Jakob's Law is effective?</p>

            <div class="fds-field">
              <ul class="fds-form-list" aria-describedby="jakob-help" aria-labelledby="s">
                <li>
                  <span>
                    <input class="fds-checkbox" id="j-1" type="checkbox" name="millers">
                    <label for="j-1">Trust</label>
                  </span>
                </li>
                <li>
                  <span>
                    <input class="fds-checkbox" id="j-2" type="checkbox" name="millers">
                    <label for="j-2">Obversable</label>
                  </span>
                </li>
                <li>
                  <span>
                    <input class="fds-checkbox" id="j-3" type="checkbox" name="millers">
                    <label for="j-3">Familiarity</label>
                  </span>
                </li>
                <li>
                  <span>
                    <input class="fds-checkbox" id="j-4" type="checkbox" name="millers">
                    <label for="j-4">Accessibility</label>
                  </span>
                </li>
              </ul>
              <span class="fds-field__help" id="jakob-help">Choose the best answer</span>
            </div>

            <div class="fds-field fds-m-t--xl">
              <p>
                <button @click="submit" class="fds-btn fds-btn--primary">Submit</button>
              </p>
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

    const { 
      showSuccessGrowl,
      showErrorGrowl,
      showWhiteout,
      setOrigin
    } = useGrowlControls();

    onMounted(()=>{
      //store.dispatch("videos/setVideos");
    });

    const submit = () => {
      let j1 = document.getElementById("j-1");
      let j2 = document.getElementById("j-2");
      let j3 = document.getElementById("j-3");
      let j4 = document.getElementById("j-4");

      if((j1.checked && j3.checked) && (!j2.checked && !j4.checked)){
        goto('/learning/level-2/certificate');

        showSuccessGrowl(
          {
            "title": "Correct",
            "useIcon": 'true',
            "msg": "Great, you are now certified as Level 2."
          }
        );

      } else {
        goto('/learning/level-2/step-1');
        showErrorGrowl(
          {
            "title": "Incorrect",
            "useIcon": 'true',
            "msg": "Oh no! It looks like you need to review the content again."
          }
        )
      }
      clearTest();
    }

    const clearTest = () => {
      let j1 = document.getElementById("j-1");
      let j2 = document.getElementById("j-2");
      let j3 = document.getElementById("j-3");
      let j4 = document.getElementById("j-4");

      j1.checked = false;
      j2.checked = false;
      j3.checked = false;
      j4.checked = false;
    }

    return {
      goto,
      submit
    };
  }
};
</script>