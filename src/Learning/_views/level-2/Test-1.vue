<template>
  <div>
    <baseHeader USE_SEARCH="true"></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fds-section">
        <div class="fds-section__bd">
          <div class="fds-m-t--s fds-m-b--m">
            
              <h1>Module Exam - Level 2</h1>
                
            </div>

        </div>
      </div>

      <div class="fds-section">
        <div class="fds-section__bd">

          <article class="ds-article">
            <p class="fds-text-size--4">Which of the below concepts represent why Jakob's Law is valueable to Users?</p>

            <div class="fds-field">
              <ul class="fds-form-list" aria-describedby="jakob-help" aria-labelledby="s">
                <li>
                  <span>
                    <input class="fds-checkbox" id="j-1" type="checkbox" name="millers">
                    <label for="j-1">Establishes trust for Users</label>
                  </span>
                </li>
                <li>
                  <span>
                    <input class="fds-checkbox" id="j-2" type="checkbox" name="millers">
                    <label for="j-2">Makes observable websites</label>
                  </span>
                </li>
                <li>
                  <span>
                    <input class="fds-checkbox" id="j-3" type="checkbox" name="millers">
                    <label for="j-3">Familiarity helps Usability</label>
                  </span>
                </li>
                <li>
                  <span>
                    <input class="fds-checkbox" id="j-4" type="checkbox" name="millers">
                    <label for="j-4">Accessibility is the law</label>
                  </span>
                </li>
              </ul>
              <span class="fds-field__help" id="jakob-help">Select all that apply</span>
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
      let r1 = document.getElementById("j-1");
      let r2 = document.getElementById("j-2");
      let r3 = document.getElementById("j-3");
      let r4 = document.getElementById("j-4");

      if((r1.checked && r3.checked) && (!r2.checked && !r4.checked)){
        goto('/learning/level-2/test-2');

        showSuccessGrowl(
          {
            "title": "Correct",
            "useIcon": 'true',
            "msg": "Great, keep on going."
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
      let r1 = document.getElementById("j-1");
      let r2 = document.getElementById("j-2");
      let r3 = document.getElementById("j-3");
      let r4 = document.getElementById("j-4");

      r1.checked = false;
      r2.checked = false;
      r3.checked = false;
      r4.checked = false;
    }

    return {
      goto,
      submit
    };
  }
};
</script>