import { ref } from "vue";

const totalRepayment = ref(0);
const totalOwed = ref(0);

export default function useBill() {
    return {
        totalRepayment,
        totalOwed,
    };
}
