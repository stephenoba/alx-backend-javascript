const fs = require("fs");

const countStudents = (path) => {
  let studentsCount = {};
  try {
    const data = fs.readFileSync(path).toString("UTF8").split("\n");
    process.stdout.write(`Number of Students: ${data.length - 1}\n`);
    for (let i = 1; i < data.length; i++) {
      let [firstname, lastname, age, field] = data[i].split(",");
      field = field.trim();
      if (!studentsCount[field]) {
        studentsCount[field] = { count: 0, students: "" };
      }
      studentsCount[field].count += 1;
      studentsCount[field].students = studentsCount[field].students
        ? studentsCount[field].students + `, ${firstname}`
        : firstname;
    }
  } catch (err) {
    throw new Error("Cannot load the database");
  }
  for (item in studentsCount) {
    process.stdout.write(
      `Number of students in ${item}: ${studentsCount[item].count}. List: ${studentsCount[item].students}\n`
    );
  }
};

module.exports = countStudents;
