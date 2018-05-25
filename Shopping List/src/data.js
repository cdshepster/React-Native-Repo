import localStorage from './services/localstorage'

a=0
localStorage.get('hello').then(result => function(result){
    console.log(result)
});

console.log(localStorage.getItem('hello'));

console.log(localStorage.get('hello'))
  
export default a