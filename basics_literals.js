/*const s = 'Hello';
console.log(s.toUpperCase());

const s2= new String('Hello');
console.log(typeof s2); */

console.log(window);
window.alert(1);

console.log(navigator.appVersion)
// object literal
const book1 ={
    title: 'Book one',
    autor:'John Doe',
    year :'2013',
    getSummary: function(){
        return `${this.title} was written by $ {this.autor} in ${this.year}`;
    }
    };
    const book2 ={
        title: 'Book Two',
        autor:'Jane Doe',
        year :'2016',
        getSummary: function(){
            return `${this.title} was written by $ {this.autor} in ${this.year}`;
        }
        };
    
   //console.log(book2.getSummary());
   //console.log(Object.values(book2));
   //console.log(Object.keys(book2));

