// class élèves
class student
{
    constructor(firstName, lastName)
    {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    //Afficher tous le nom
    getFullName ()
    {
        return  "Elève :" + this.firstName +' '+ this.lastName;
    }
}

let Tanguy = new student ('Tanguy','Hospice');
let Anderson = new student ('Anderson','Berge III');
let Mayra = new student ('Mayra','Emie');
let Dalton = new student ('Dalton',"D'Amore");

console.log(Tanguy.getFullName());
console.log(Mayra.getFullName());
console.log(Dalton.getFullName());