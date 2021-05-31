  export const questions = [
   {
       title: `What's the output?`,
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
      correct: "`undefined` and `ReferenceError`",
      explanation: `Within the function, we first declare the name variable with the var keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) 
      with the default value of undefined, until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the name variable, 
      so it still holds the value of undefined. Variables with the let keyword (and const) are hoisted, but unlike var, don't get initialized. They are not accessible before the line we declare (initialize) them. 
      This is called the "temporal dead zone". When we try to access the variables before they are declared, JavaScript throws a ReferenceError.`
   } ,
    {
        title: `What's the output?`,
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
          correct: "`3 3 3` and `0 1 2`",
          explanation: `Because of the event queue in JavaScript, the setTimeout callback function is called after the loop has been executed. Since the variable i in the first loop was declared using the var keyword, this value was global. 
          During the loop, we incremented the value of i by 1 each time, using the unary operator ++. By the time the setTimeout callback function was invoked, i was equal to 3 in the first example.
          In the second loop, the variable i was declared using the let keyword: variables declared with the let (and const) keyword are block-scoped (a block is anything between { }). During each iteration, i will have a new value, and each value is scoped inside the loop.`
    },

    {
        title: `What's the output?`,
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
          correct: "`20` and `NaN`",
          explanation: `Note that the value of diameter is a regular function, whereas the value of perimeter is an arrow function.
          With arrow functions, the this keyword refers to its current surrounding scope, unlike regular functions! This means that when we call perimeter, it doesn't refer to the shape object, but to its surrounding scope (window for example).
          There is no value radius on that object, which returns NaN.`
    },
    {
        title: `What's the output?`,
        code: `+true; !'Lydia';`,
        answers: {
            a: "`1` and `false`",
            b: "`false` and `NaN`",
            c: "`false` and `false`"
        },
        correct: "`1` and `false`",
        explanation: `The unary plus tries to convert an operand to a number. true is 1, and false is 0.
        The string 'Lydia' is a truthy value. What we're actually asking, is "is this truthy value falsy?". This returns false.`

    },
    {
        title: 'Which one is true?',
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
          correct: "`mouse.bird.size` is not valid",
          explanation: `In JavaScript, all object keys are strings (unless it's a Symbol). Even though we might not type them as strings, they are always converted into strings under the hood.
          JavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket [ and keeps going until it finds the closing bracket ]. Only then, it will evaluate the statement.          
          mouse[bird.size]: First it evaluates bird.size, which is "small". mouse["small"] returns true
          However, with dot notation, this doesn't happen. mouse does not have a key called bird, which means that mouse.bird is undefined. Then, we ask for the size using dot notation: mouse.bird.size. Since mouse.bird is undefined, we're actually asking undefined.size. 
          This isn't valid, and will throw an error similar to Cannot read property "size" of undefined.`
    }, 
    {
        title: `What's the output?`,
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
        correct: 'Hello',
        explanation: `In JavaScript, all objects interact by reference when setting them equal to each other.
        First, variable c holds a value to an object. Later, we assign d with the same reference that c has to the object.
        <img src="https://camo.githubusercontent.com/7fa22323daec0bc9742948c600eb9d951d28488132dcfb47e181d8b0a92b5f6e/68747470733a2f2f692e696d6775722e636f6d2f6b6f356b3066732e706e67" data-canonical-src="https://i.imgur.com/ko5k0fs.png" style="max-width:100%;" width="200">
        When you change one object, you change all of them.`
    }, 
    {
        title: `What's the output?`,
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
        correct: "`true` `false` `false`",
        explanation: `new Number() is a built-in function constructor. Although it looks like a number, it's not really a number: it has a bunch of extra features and is an object.
        When we use the == operator, it only checks whether it has the same value. They both have the value of 3, so it returns true.
        However, when we use the === operator, both value and type should be the same. It's not: new Number() is not a number, it's an object. Both return false.`
    }, 
    {
        title: `What's the output?`,
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
        correct: 'TypeError',
        explanation: `The colorChange function is static. Static methods are designed to live only on the constructor in which they are created, and cannot be passed down to any children. 
        Since freddie is a child, the function is not passed down, and not available on the freddie instance: a TypeError is thrown.`
    },
    {
        title: `What's the output?`,
        code: `//we are in non-strict mode
        let greeting;
        greetign = {}; // Typo!
        console.log(greetign);`,
        answers: {
        a: '{}',
        b: 'ReferenceError: greetign is not defined',
        c: 'undefined'
        },
        correct: '{}',
        explanation: `It logs the object, because we just created an empty object on the global object! When we mistyped greeting as greetign, the JS interpreter actually saw this as global.greetign = {} (or window.greetign = {} in a browser).
        In order to avoid this, we can use "use strict". This makes sure that you have declared a variable before setting it equal to anything.`

    },
    {
       title: "What happens when we do this?",
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
        correct: "Nothing, this is totally fine!",
        explanation: `This is possible in JavaScript, because functions are objects! (Everything besides primitive types are objects)
        A function is a special type of object. The code you write yourself isn't the actual function. The function is an object with properties. This property is invocable.`
    },
    
    
    
]
