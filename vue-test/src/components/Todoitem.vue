<template>
    <div class="todo-item" v-bind:class="{'is-complete':singleData.completed}">
        <p>
            <input type="checkbox"  :checked="singleData.completed" v-on:change="makeCompleted">
            {{ singleData.title }}
            <button @click="$emit('del-todo',singleData.id)" class="del">X</button>
        </p>
    </div>
</template>
><script>
export default {
    name:"TodoItem",
    props: ["singleData"],
    methods:{
        makeCompleted() {
            this.singleData.completed = !this.singleData.completed;
        }
    }
}
</script>

<style scoped>
 .todo-item{
     background: #f4f4f4;
     padding: 10px;
     border-bottom: 1px #ccc dotted;
 }

 .is-complete{
     text-decoration: line-through;
 }

 .del{
     background: #ff0000;
     color: white;
     border: none;
     padding: 5px 9px;
     border-radius: 50%;
     cursor: pointer;
     float: right;
 }
</style>


