import type { User } from '@/interfaces/User';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const usersBD: User[] = [
      {
        id: 1,
        name: 'John Doe',
        username: 'johndoe',
        password: 'password',
      },
      {
        id: 2,
        name: 'Mary Jane',
        username: 'maryjane',
        password: 'password',
      },
      {
        id: 3,
        name: 'Peter Parker',
        username: 'peterparker',
        password: 'password',
      },
    ];

    const users = ref(usersBD);

    const updateUser = (idUser: number) => {
      const user = users.value.find((u) => u.id === idUser);
      console.log(user);
    };

    const deleteUser2 = (idUser: number) => {
      console.log(idUser);
      const index = users.value.findIndex((u) => u.id === idUser);
      users.value.splice(index, 1);
    };

    return {
      users,
      updateUser,
      deleteUser2,
    };
  },
});
