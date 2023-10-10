<template>
   <div class="item-list">
        <CandidateItem
            v-for="(candidate, index) in items"
            :key="candidate.id"
            :index="index + 1"
            :item="candidate"
            :first-name="candidate.firstName"
            :last-name="candidate.lastName"
            :age="candidate.age"
        />
    </div>
</template>

<script>
import CandidateItem from "./item/CandidateItem";

export default {
    name: "CandidatesList",
    components: {
        CandidateItem
    },
    props: {
        items: {
            type: Array,
            default: () => [
                {
                    id: 1,
                    firstName: 'Gabriel',
                    lastName: 'Narutowicz',
                    age: 57,
                    party: null,
                },
                {
                    id: 2,
                    firstName: 'Stanisław',
                    lastName: 'Wojciechowski',
                    age: 53,
                    party: 'Polskie Stronnictwo Ludowe „Piast”',
                },
                {
                    id: 3,
                    firstName: 'Ignacy',
                    lastName: 'Mościcki',
                    age: 59,
                    party: null,
                },
            ]
        }
    },
    setup () {
        

        return {}
    }
}
</script>


<style lang="scss">
.item-list {
    font-family: arial;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 25px;
    max-width: 1200px;
    margin: 0 auto;
}
</style>