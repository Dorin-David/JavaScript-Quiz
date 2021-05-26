  export const questions = [
   {
       title: `What's the output`,
       code: `function sayHi() {
        console.log(name);
        console.log(age);
        var name = 'Lydia';
        let age = 21;
      }`,
      answers: {
          a: "`Lydia` and `undefined`",
          b: "`Lydia` and `ReferenceError`",
          c: "`ReferenceError` and `21`",
          d: "`undefined` and `ReferenceError`",
      },
      correct: "d"
   } ,
    {
        title: `What's the output`,
        code: `for (var i = 0; i < 3; i++) {
            setTimeout(() => console.log(i), 1);
          }
          
          for (let i = 0; i < 3; i++) {
            setTimeout(() => console.log(i), 1);
          }`,
          answers: {
              a: "`0 1 2` and `0 1 2`",
              b: "`0 1 2` and `3 3 3`",
              c: "`3 3 3` and `0 1 2`",
          },
          correct: 'c'
    },

    {
        title: `What's the output`,
        code: `const shape = {
            radius: 10,
            diameter() {
              return this.radius * 2;
            },
            perimeter: () => 2 * Math.PI * this.radius,
          };
          
          console.log(shape.diameter());
          console.log(shape.perimeter());`,
          answers: {
              a: "`20` and `62.83185307179586`",
              b: "`20` and `NaN`",
              c: "`20` and `63`",
              d: "`NaN` and `63`"
          },
          correct: 'b'
    },
    {
        title: `What's the output`,
        code: `+true; !'Lydia';`,
        answers: {
            a: "`1` and `false`",
            b: "`false` and `NaN`",
            c: "`false` and `false`"
        },
        correct: 'a'

    },
    {
        title: 'Which one is true',
        code: `
        const bird = {
            size: 'small',
          };
          
          const mouse = {
            name: 'Mickey',
            small: true,
          };`,
          answers: {
              a: "`mouse.bird.size` is not valid",
              b: "`mouse[bird.size]` is not valid",
              c: "`mouse[bird['size']]` is not valid",
              d: "All of them are valid"
          },
          correct: 'a'
    }, 
    {
        title: `What's the output`,
        code: `
        let c = { greeting: 'Hey!' };
        let d;
        
        d = c;
        c.greeting = 'Hello';
        console.log(d.greeting);`,
        answers: {
            a: 'Hello',
            b: 'Hey!',
            c: 'undefined',
            d: 'ReferenceError',
            e: 'TypeError'
        },
        correct: 'a'
    }, 
    {
        title: `What's the output`,
        code: `
        let a = 3;
        let b = new Number(3);
        let c = 3;
        
        console.log(a == b);
        console.log(a === b);
        console.log(b === c);`,
        answers: {
            a: "`true` `false` `true`",
            b: "`false` `false` `true`",
            c: "`true` `false` `false`",
            d: "`false` `true` `true`"
        },
        correct: "c"
    }, 
    {
        title: `What's the output`,
        code: `class Chameleon {
            static colorChange(newColor) {
              this.newColor = newColor;
              return this.newColor;
            }
          
            constructor({ newColor = 'green' } = {}) {
              this.newColor = newColor;
            }
          }
          
          const freddie = new Chameleon({ newColor: 'purple' });
          console.log(freddie.colorChange('orange'));`,
          answers: {
          a: 'orange',
          b: 'purple',
          c: 'green',
          d: 'TypeError'
        },
        correct: 'd'
    },
    {
        title: `What's the output`,
        code: `
        let greeting;
        greetign = {}; // Typo!
        console.log(greetign);`,
        answers: {
        a: '{}',
        b: 'ReferenceError: greetign is not defined',
        c: 'undefined'
        },
        correct: 'a'

    },
    {
       title: "What happens when we do this",
        code: `function bark() {
            console.log('Woof!');
          }
          
          bark.animal = 'dog';`,
          answers: {
            a: "Nothing, this is totally fine!",
            b: "`SyntaxError`. You cannot add properties to a function this way.",
            c: "`'Woof'` gets logged.",
            d: "`ReferenceError`"
        },
        correct: 'a'
    },
    
    
    
]
