<template>
  <v-card-title>
    Здесь можно обновить информацию о себе
  </v-card-title>
    <v-form ref="accountSettings" v-model="isValid" lazy-validation>
      <v-card-text>
      <vTextField
        v-model="firstNameValue"
        :rules="textFieldRules"
        type="text"
        label="Ваше имя"
        density="comfortable"
        variant="underlined"
        class="my-3"
      />
      <vTextField
        v-model="secondNameValue"
        :rules="textFieldRules"
        type="text"
        label="Ваша фамилия"
        density="comfortable"
        variant="underlined"
        class="my-3"
      />
      <vTextField
        type="date"
        variant="underlined"
        label="Дата рождения"
        v-model="birthDateValue"
        :rules="[v => !!v || 'Это поле обязательно']"
        class="my-3"
        />
        <vTextField
          v-model="phoneNumberValue"
          :rules="[v => v && v.length === 10 || 'Это поле должно иметь 10 символов', v => !!+v || 'Должно быть число',]"
          prefix="+7"
          counter="10"
          variant="underlined"
          type="text"
          label="Ваш номер телефона"
        />
      </v-card-text>
    </v-form>
  <v-card-text class="my-0 py-0">
  </v-card-text>

  <v-card-actions class="my-2">
    <vSpacer />
    <v-btn
      @keydown.enter="saveData"
      @click="saveData"
      :disabled="!isValid"
    >Сохранить</v-btn>
  </v-card-actions>
</template>

<script>
import {onBeforeMount, ref} from 'vue'
import store from '@/store'

export default {
  setup() {
    onBeforeMount(() => {
        store.dispatch('settings/getUserFromDB')
    }
    )
    const textFieldRules = [
      v => !!v || 'Это поле обязательно',
      v => (v && v.length <= 32) || 'Это поле не может содержать больше 32 символов',
    ]
    const firstNameValue = ref('')
    const secondNameValue = ref('')
    const birthDateValue = ref('')
    const phoneNumberValue = ref('')
    const isValid = ref(true)
    const saveData = () => {
      const toDB = {
        firstName: firstNameValue.value,
        secondName: secondNameValue.value,
        birthDate: birthDateValue.value,
        phoneNumber: phoneNumberValue.value
      }
      console.log(toDB)
    }
    return {
      textFieldRules,
      firstNameValue,
      secondNameValue,
      phoneNumberValue,
      birthDateValue,
      isValid,
      saveData,
    }
  }
}
</script>

<style scoped>

</style>