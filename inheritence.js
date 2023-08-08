//Cunstructor
function Book(title, author, year){
    this.title = title;
    this.author =author;
    this.year =year;
  this.getSummary = function(){
    return `${this.title} was written by
     $ {this.autor} in ${this.year}`;
  }

}
//getSummary
Book.prototype.getSummary = function() {
    return `${this.title} was written by
     $ {this.autor} in ${this.year}`; 
};
//Magazine Constructor
function Magazine(title, author, year, month){
    Book.call(this,title,author, year);

    this.month = month;
}
//Inherit Prototype
Magazine.prototype = object.create(Book.prototype);

//Instantiate Magazine Object
const mag1 = new Magazine('Mag One','John Doe','2018','Jan');
//Use Magazine Constructor
Magazine.prototype.constructor = Magazine;
console.log(mag1);