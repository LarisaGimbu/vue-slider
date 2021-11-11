const app = new Vue({
  el:'#app',
  data:{
    items:[
      {
        name: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
        image:'img/01.jpg',
        miaClasse:'active',
      },
      {
        name: 'Svizzera',
        text: 'Lorem ipsu',
        image:'img/02.jpg',
        miaClasse:'',
      },
      {
        name: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        image:'img/03.jpg',
        miaClasse:'',
      },
      {
        name: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
        image:'img/04.jpg',
        miaClasse:'',
      },
      {
        name: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
        image:'img/05.jpg',
        miaClasse:'',
      },
      
    ],
    counter: 0,
  },
  methods:{
    nextSlide(){
      this.counter++;
      console.log(this.counter);
      if(this.counter > this.items.length -1){
        this.counter = 0
      };
      this.items[this.counter].miaClasse = 'active';
      this.items[this.counter-1].miaClasse = '';
    },
    prevSlide(){
      this.counter--;
      if(this.counter > this.items.length){
        counter=0
      };
      this.items[counter].miaClasse = 'active';
      this.items[counter-1].miaClasse ='';
    }
  }
});