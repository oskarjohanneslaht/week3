
let friends = [
    {
        firstName: 'Harry',
        age: 11,
        isWizard: true,
        friends: [`Ron`, `Hermione`, `Hedwig`],
        introduce: function(){
            console.log(`greetings my name is ${this.firstName} `);
        }
    },
    {
        firstName: 'Ron',
        age: 11,
        isWizard: true,
        friends: [`Ron`, `Hermione`, `Hedwig`],
        introduce: function(){
            console.log(`greetings my name is ${this.firstName} `);
        }
    },
    {
        firstName: `Hermione`,
        age: 11,
        isWizard: true,
        friends: [`Ron`, `Hermione`, `Hedwig`],
        introduce: function(){
            console.log(`greetings my name is ${this.firstName} `);
        }
    },
    {
        firstName: `Hedwig`,
        age: 11,
        isWizard: true,
        friends: [`Ron`, `Hermione`, `Hedwig`],
        introduce: function(){
            console.log(`greetings my name is ${this.firstName} `);
        }
    },
]

let student = friends.filter(friends => {
    if(friend.isWizard) {
        return friend;
    }
});

let studentList = student.map(student =>{
    return student.firstName;
})


studentList.sort((a, b) => {return a.localeCompare(b)});


console.log(studentList);

