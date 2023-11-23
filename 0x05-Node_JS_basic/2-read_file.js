const fs = require('fs');

const countStudents = (path) => {
  const studentsCount = {};
  try {
    const data = fs.readFileSync(path).toString('UTF8').split('\n');
    process.stdout.write(`Number of Students: ${data.length - 1}\n`);
    for (let i = 1; i < data.length; i += 1) {
      const info = data[i].split(',');
      const firstname = info[0];
      const field = info[3].trim();
      if (!studentsCount[field]) {
        studentsCount[field] = { count: 0, students: '' };
      }
      studentsCount[field].count += 1;
      studentsCount[field].students = studentsCount[field].students
        ? `${studentsCount[field].students}, ${firstname}`
        : firstname;
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  for (const item in studentsCount) {
    if (Object.hasOwn(studentsCount, item)) {
      process.stdout.write(
        `Number of students in ${item}: ${studentsCount[item].count}. List: ${studentsCount[item].students}\n`,
      );
    }
  }
};

module.exports = countStudents;
