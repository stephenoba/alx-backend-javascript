function getEmployees(departments) {
  const arr = [];
  for (const dept of Object.values(departments)) {
    arr.push(...dept);
  }
  return arr;
}

export default function createIteratorObject(report) {
  const employees = getEmployees(report.allEmployees);
  return {
    [Symbol.iterator]() {
      let counter = 0;
      return {
        next() {
          if (counter < employees.length) {
            counter += 1;
            return { done: false, value: employees[counter - 1] };
            /* eslint-disable no-else-return */
          } else {
            return { done: true, value: undefined };
          }
        },
      };
    },
  };
}
