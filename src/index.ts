export {};

// EXAMPLE 1 - Initialize a typed empty object in TypeScript

interface Employee {
  id: number;
  name: string;
  salary: number;
}

const emp1 = {} as Employee;

emp1.id = 1;
emp1.name = 'Bobby Hadz';
emp1.salary = 100;

console.log(emp1);

// ---------------------------------------------------

// // EXAMPLE 2 - You aren't required to set all of the `required` properties

// interface Employee {
//   id: number;
//   name: string;
//   salary: number;
// }

// const emp1 = {} as Employee;

// emp1.id = 1; // ✅ OK

// ---------------------------------------------------

// // EXAMPLE 3 - Initialize a typed empty object using Partial

// interface Employee {
//   id: number;
//   name: string;
// }

// const emp1: Partial<Employee> = {};

// emp1.id = 1;

// emp1.name = 'Bobby Hadz';

// ---------------------------------------------------

// // EXAMPLE 4 - Using an index signature

// interface Employee {
//   id: number;
//   name: string;
//   [key: string]: any;
// }

// const emp1 = {} as Employee;

// emp1.id = 1;
// emp1.name = 'Alice';

// emp1.years = [2022, 2023];
// emp1.salary = 100;

// ---------------------------------------------------

// // EXAMPLE 5 - Initialize a typed empty object using Record

// interface Employee {
//   id: number;
//   name: string;
// }

// const emp1: Employee | Record<string, never> = {};
// console.log(emp1);

// ---------------------------------------------------

// // EXAMPLE 6 - Initialize a typed empty object using a Class

// // eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
// interface Employee {
//   id: number;
//   name: string;
// }

// // eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
// class Employee implements Employee {
//   id = 0;
//   name = '';
// }

// const emp1 = new Employee();
// console.log(emp1); // 👉️ Employee { id: 0, name: '' }

// emp1.id = 1;
// emp1.name = 'Bobby Hadz';

// console.log(emp1); // 👉️ Employee { id: 1, name: 'Bobby Hadz' }
