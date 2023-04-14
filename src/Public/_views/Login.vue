<template>
  <main id="main-content" tabindex="-1">
    <div class="fds-section">
      <div class="fds-section__bd">

        <div class="fds-level fds-level--justify-center">
          <div class="ds-login">
            <div class="fds-m-t--xl@m fds-shadow--raised fds-p--m fds-p--l@m">
              <h2 class="fds-m-b--m">Welcome Back!</h2>
              <div class="fds-field fds-field--fill">
                <label class="fds-field__label" :for="emailId">Email <span class="fds-field__label-desc">Required</span></label>
                <input v-model="email" class="fds-input fds-field__item" :id="emailId" :aria-describedby="emailId+'-help'" aria-required="true" :name="emailId" type="text">
                <span class="fds-field__help" :id="emailId+'-help'"></span>
              </div>
              <div class="fds-field fds-field--fill">
                <label class="fds-field__label" :for="passwordId">Password <span class="fds-field__label-desc">Required</span></label>
                <input v-model="password" v-on:keyup.enter="login()" class="fds-input fds-field__item" :id="passwordId" :aria-describedby="passwordId+'-help'" aria-required="true" :name="passwordId" :type="isPasswordVisible?'text':'password'">
                <span class="fds-field__help" :id="passwordId+'-help'">
                  <button @click="showPassword()" class="fds-btn fds-btn--plain fds-btn--small">
                    
                    <svg v-if="!isPasswordVisible" class="fds-icon fds-icon--size-1" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
                    </svg>
                    <svg v-if="isPasswordVisible" class="fds-icon fds-icon--size-1" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path></svg>
                    
                    {{ !isPasswordVisible ? 'show' : 'hide' }}
                  </button>
                </span>
              </div>
              <div class="fds-m-t--xl fds-level fds-level--justify-between">
                <button @click="login()"  type="button" class="fds-btn fds-btn--secondary">Login Now</button>
                <button @click="resetPassword()"  type="button" class="fds-btn fds-btn--flat">Reset Password</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </main>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { 
  getAuth,
  signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from "@/_composables/useNavigation";
import { useGrowlControls } from "@/_composables/useGrowlControls";
import { useErrorState } from "@/_composables/useErrorState";

export default {

  setup(props) {
    const auth = getAuth();
    const store = useStore();
    const { goto } = useNavigation();
    const { showErrorGrowl } = useGrowlControls();
    const { getErrorCode } = useErrorState();

    let baseUrl = import.meta.env.BASE_URL.substring(0, import.meta.env.BASE_URL.length - 1)
    const basePath = ref( baseUrl );

    const emailId = ref(uuidv4());
    const email = ref();
    const passwordId = ref(uuidv4());
    const password = ref();
    const isPasswordVisible = ref(false);

    const login = () => {
      signInWithEmailAndPassword( auth, email.value, password.value)
        .then((_result)=>{
          goto('/learning');
        }).catch((_err)=>{
          let error = getErrorCode(_err.code);
          showErrorGrowl({
            title: "Whoops, let's try again.",
            msg: error!=''? error : "Looks like something went wrong.",
            useIcon: 'true'
          })
        })
    }


    const showPassword = () => {
      isPasswordVisible.value = !isPasswordVisible.value
    }


    onMounted(()=>{

    });
    
    return {
      basePath,
      emailId,
      email,
      passwordId,
      password,
      login,
      showPassword,
      isPasswordVisible
    }
  }
}
</script>