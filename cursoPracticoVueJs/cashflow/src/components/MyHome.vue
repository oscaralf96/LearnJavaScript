<template>
  <MyLayout>
    <template #header>
      <MyHeader></MyHeader>
    </template>
    <template #resume>
      <Resume
        :label="date"
        :total-Amount="totalAmount"
        :amount="amount"
        :total-label="'01-01-2022'"
      >
        <template #graphic>
          <MyGrapic :amounts="amounts" />
        </template>
        <template #action>
          <Action @create="create" />
        </template>
      </Resume>
    </template>
    <template #movements>
      <MyMovements :movements="movements" @remove="remove" />
    </template>
  </MyLayout>
</template>

<script>
import MyLayout from "./MyLayout.vue";
import MyHeader from "./MyHeader.vue";
import MyMovements from "./Movements/MovementIndex.vue";
import Resume from "./Resume/ResumeIndex.vue";
import Action from "./MyAction.vue";
import MyGrapic from "./Resume/MyGrapic.vue";

export default {
  components: {
    MyLayout,
    MyHeader,
    Resume,
    MyMovements,
    Action,
    MyGrapic,
  },
  data() {
    return {
      date: null,
      amount: null,
      movements: [
        {
          id: 0,
          title: "Movimiento 1",
          description: "Lorem ipsum dolor sit amet",
          amount: 100,
          time: new Date("09-01-2022"),
        },
        {
          id: 1,
          title: "Movimiento 2",
          description: "Lorem ipsum dolor sit amet",
          amount: 200,
          time: new Date("09-01-2022"),
        },
        {
          id: 2,
          title: "Movimiento 3",
          description: "Lorem ipsum dolor sit amet",
          amount: 500,
          time: new Date("09-01-2022"),
        },
        {
          id: 3,
          title: "Movimiento 4",
          description: "Lorem ipsum dolor sit amet",
          amount: 200,
          time: new Date("09-01-2022"),
        },
        {
          id: 4,
          title: "Movimiento 5",
          description: "Lorem ipsum dolor sit amet",
          amount: -400,
          time: new Date("09-01-2022"),
        },
        {
          id: 5,
          title: "Movimiento 6",
          description: "Lorem ipsum dolor sit amet",
          amount: -400,
          time: new Date("09-01-2022"),
        },
        {
          id: 6,
          title: "Movimiento 7",
          description: "Lorem ipsum dolor sit amet",
          amount: -600,
          time: new Date("09-01-2022"),
        },
        {
          id: 7,
          title: "Movimiento 8",
          description: "Lorem ipsum dolor sit amet",
          amount: 300,
          time: new Date("09-01-2022"),
        },
        {
          id: 8,
          title: "Movimiento 9",
          description: "Lorem ipsum dolor sit amet",
          amount: 500,
          time: new Date("01-01-2022"),
        },
        {
          id: 9,
          title: "Movimiento 10",
          description: "Lorem ipsum dolor sit amet",
          amount: -65,
          time: new Date("01-01-2022"),
        },
      ],
    };
  },
  computed: {
    amounts() {
      const lastDays = this.movements
        .filter((m) => {
          const today = new Date();
          const oldDate = today.setDate(today.getDate() - 30);

          return m.time > oldDate;
        })
        .map((m) => m.amount);

      return lastDays.map((m, i) => {
        const lastMovements = lastDays.slice(0, i);

        return lastMovements.reduce((suma, movement) => {
          return suma + movement;
        }, 0);
      });
    },
    totalAmount() {
      return this.movements.reduce((suma, m) => {
        return suma + m.amount;
      }, 0);
    },
  },
  methods: {
    create(movement) {
      this.movements.push(movement);
    },
    remove(id) {
      const index = this.movements.findIndex((m) => m.id === id);
      this.movements.splice(index, 1);
    },
  },
};
</script>
