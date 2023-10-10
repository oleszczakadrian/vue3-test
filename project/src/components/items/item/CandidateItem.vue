<template>
    <div class="single-candidate">
        <p>Candidate {{ index }}</p>
        <p>Name: {{ firstName+" "+lastName }}</p>
        <p>Age: {{ ageWithYears }}</p>
        <p>Party: {{ item.party }}</p>
        <div>
            Opinion pool: <progress :value="item.opinionPool ? item.opinionPool : 0" max="100"></progress> {{ item.opinionPool ? item.opinionPool : 0 }}%
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';

export default {
    name: "CandidateItem",
    props: {
        index: {
            type: Number,
            default: 0
        },
        item: {
            type: Object
        },
        firstName: {
            type: String,
            default: "unknown"
        },
        lastName: {
            type: String,
            default: "unknown",
            required: true
        },
        age: {
            type: [Number, String],
            default: 0
        }
    },
    setup (props) {
        const ageWithYears = computed(() => `${props.age} years`);

        return { ageWithYears}
    }
}
</script>

<style lang="scss" scoped>
.single-candidate {
    border: 1px solid black;
    padding: 10px;
}
</style>