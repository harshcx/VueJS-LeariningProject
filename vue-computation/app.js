new Vue({
  el:'#vue-app',
  data: {
    age: 20,
    a:0,
    b:0,

    available: false,
    nearby: false,


    error: false,
    success: false,

    characters: ['Superman','Batman','cyborg','wonder woman','green lentern'],
    anim_charcters:[
      {name:'Superman', charcter_from:'DC'},
      {name:'Batman', charcter_from:'DC'},
      {name:'Ironman', charcter_from:'Marvel'},
      {name:'Thore', charcter_from:'Marvel'}
    ]
  },
  methods:{

  },
  computed:{
    addToA: function(){
      // console.log('A called');
      return this.age + this.a
    },
    addToB: function(){
      // console.log('B called');
      return this.age + this.b
    },

    //Computing whole classes for MAKING CLASS binding dynamic
    compClasses: function (){
      return {
        available: this.available,
        nearby: this.nearby
      }
    }
  }

});
