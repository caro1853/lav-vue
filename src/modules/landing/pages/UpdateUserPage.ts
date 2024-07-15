import type { User } from '@/interfaces/User';
import { defineComponent, ref } from 'vue';
import { getUserById } from './actions/get-user-by-id';

export default defineComponent({
  props: {
    userid: {
      required: true,
    },
  },
  setup(props) {
    console.log('UpdateUserPage');
    console.log(props.userid);

    const myForm = ref<User | null>(null);

    const data = getUserById(props.userid);
    myForm.value = data;

    const updateUser = () => {
      console.log(myForm.value);
    };

    return {
      myForm,
      updateUser,
    };
  },
});
