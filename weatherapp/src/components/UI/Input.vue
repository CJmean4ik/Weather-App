<template>
   <input class="inpt" :value="countyName" @input="getCountry">
</template>

<script>
    export default {
        name: "w-input",
        props: {
            countyName: {
                type: String,
                required: true
            }
        },
        methods: {
            getCountry(event)
            {
                this.$emit('update:countyName',event.target.value);
            }
        },
    }
</script>

<style scoped>
.inpt{
    width: 280px;
    padding: 5px;
    height: max-content;
    font-family: 'Bebas Neue';
    color: rgba(199, 194, 194, 0.534);
    font-size: 30px;
    background-color:  rgba(151, 148, 148, 0.116);
}
</style>