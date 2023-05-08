<template>
  <section id="application" class="container application__section">
    <div class="application__title">
      <div class="application__title-text title-text">Заявка</div>
    </div>
    <form ref="form" @submit.prevent="sendEmail">
      <div class="row my-4 qq-row">
        <div class="col-md-5 qq-col">
          <input required oninvalid="this.setCustomValidity('Это обязательное поле')" oninput="this.setCustomValidity('')"
            type="text" name="user_name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            placeholder="Ваше имя" />
        </div>
        <div class="col-md-5 qq-col ">
          <input required oninvalid="this.setCustomValidity('Это обязательное поле. Введите телефон')"
            oninput="this.setCustomValidity('')" type="phone" name="user_phone" class="form-control"
            id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Контактный номер"
            v-mask="'+7 (___) ___ __ __'" v-model="phone" />
          <!-- <vue-tel-input v-model="vueTel.phone" v-bind="vueTel.props"></vue-tel-input> -->
        </div>
      </div>

      <div class="row my-4 qq-row">
        <div class="col-md-5 qq-col">
          <input required oninvalid="this.setCustomValidity('Это обязательное поле. Введите email')"
            oninput="this.setCustomValidity('')" type="email" name="user_email" class="form-control"
            id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-mail" />
        </div>
        <div class="col-md-5 qq-col">
          <input type="text" name="user_company" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            placeholder="Компания" />
        </div>
      </div>

      <div class="row my-4 qq-row">
        <div class="col-md-10 qq-col">
          <textarea name="message" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            placeholder="Описание задачи"></textarea>
        </div>
      </div>

      <div class="row" v-if="sendSuccess">
        <div class="col-md-10">
          <span class="success-message">Ваша заявка отправлена, в ближайшее время мы обязательно с вами свяжемся</span>
        </div>
      </div>

      <div class="row" v-if="sendError">
        <div class="col-md-10">
          <div class="error-message">Возникли проблемы при отправки заявки. Пожалуйста, свяжитесь с нами по номеру,
            указанному в <NuxtLink to="/contacts">контактах</NuxtLink>
          </div>
        </div>
      </div>

      <div class="row my-4">
        <div class="col">
          <button :disabled="sendSuccess || sendError" type="submit" class="btn qq-button">Отправить заявку</button>
        </div>
      </div>
    </form>


  </section>
</template>


<script>
import Vue from 'vue';
import emailjs from '@emailjs/browser';
// import {VueTelInput} from 'vue-tel-input';
// import 'vue-tel-input/dist/vue-tel-input.css';

export default Vue.extend({
  name: 'ApplicationPage',
  data() {
    return {
      sendSuccess: false,
      sendError: false,
      phone: '',
    }
  },
  methods: {
    sendEmail() {
      if (this.phone === '' || this.phone === '+7 (___) ___ __ __') return;
      emailjs.sendForm('service_wzkd44g', 'template_nowtjlc', this.$refs.form, 'XNV8pgltVU54Ov9bN')
        .then((result) => {
          this.sendSuccess = true;
          console.log('SUCCESS!', result.text);
        }, (error) => {
          this.sendError = true;
          console.log('FAILED...', error.text);
        });

    },
  }
})


</script>

<style lang="scss">
.application__section {
  padding-top: 1.5em;
  padding-bottom: 1.5em;

  .form-control {
    padding: 18px 20px;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    border: none;
    font-weight: 500;
    font-size: 1.125em;
    height: unset;
  }

  .form-control:focus {
    background-color: #ffffff;
    box-shadow: 10px 16px 50px rgba(0, 0, 0, 0.25);
  }

  .form-control::placeholder {
    font-weight: 500;
    font-size: 1.125em;
    line-height: 1.25em;
    color: #000000;

  }

  .success-message {
    color: rgb(43, 198, 43);
    font-size: 1.3em;
  }

  .error-message {
    color: rgb(255, 47, 47);
    font-size: 1.3em;

  }
}

@media screen and (orientation: portrait) and (max-width: 880px) {

  .qq-row {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .qq-col {
    margin-top: 1em;
    margin-bottom: 1em;
  }

}
</style>
