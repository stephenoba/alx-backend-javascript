const fs = require('fs');

const countStudents = (path) => {
  // output database content
  const studentsCount = {};
  try {
    const data = fs.readFileSync(path).toString('UTF8').trim().split('\n');
    console.log(`Number of students: ${data.length - 1}`);
    for (let i = 1; i < data.length; i += 1) {
      const info = data[i].split(',');
      const firstname = info[0];
      const field = info[3];
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
      console.log(
        `Number of students in ${item}: ${studentsCount[item].count}. List: ${studentsCount[item].students}`,
      );
    }
  }
};

module.exports = countStudents;
