<template>
  <div>
    <baseHeader USE_SEARCH="true"></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fds-section">
        <div class="fds-section__bd">
          <div class="fds-m-t--s fds-m-b--m">
            
              <h1>Learning - Level 1 Exam</h1>
                
            </div>

        </div>
      </div>

      <div class="fds-section">
        <div class="fds-section__bd">

          <article class="ds-article">
            <p class="fds-text-size--4">Select the examples below that adhere to Miller's Law.</p>

            <div class="fds-field">
              <ul class="fds-form-list" aria-describedby="millers-help" aria-labelledby="s">
                <li>
                  <span>
                    <input class="fds-checkbox" id="m-1" type="checkbox" name="millers">
                    <label for="m-1">Stock Number: (5) 01234432100-1</label>
                  </span>
                </li>
                <li>
                  <span>
                    <input class="fds-checkbox" id="m-2" type="checkbox" name="millers">
                    <label for="m-2">Credit Card: 4232-1254-1209-5823</label>
                  </span>
                </li>
                <li>
                  <span>
                    <input class="fds-checkbox" id="m-3" type="checkbox" name="millers">
                    <label for="m-3">+1 (212) 554-2987</label>
                  </span>
                </li>
                <li>
                  <span>
                    <input class="fds-checkbox" id="m-4" type="checkbox" name="millers">
                    <label for="m-4">MCISI</label>
                  </span>
                </li>
              </ul>
              <span class="fds-field__help" id="millers-help">Choose the millerss you fancy</span>
            </div>

            <div class="fds-field fds-m-t--xl">
              <p>
                <button @click="submit" class="fds-btn fds-btn--primary">Continue</button>
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
      let r1 = document.getElementById("m-1");
      let r2 = document.getElementById("m-2");
      let r3 = document.getElementById("m-3");
      let r4 = document.getElementById("m-4");

      if((r2.checked && r3.checked) && (!r1.checked && !r4.checked)){
        goto('/learning/level-1/test-2');

        showSuccessGrowl(
          {
            "title": "Correct",
            "useIcon": 'true',
            "msg": "Keep on going."
          }
        );

      } else {
        goto('/learning/level-1/step-1');
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
      let r1 = document.getElementById("m-1");
      let r2 = document.getElementById("m-2");
      let r3 = document.getElementById("m-3");
      let r4 = document.getElementById("m-4");

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