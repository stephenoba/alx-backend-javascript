const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    const fileLines = data.toString().split('\n');
    const studentsCount = {};
    console.log(`Number of students: ${fileLines.length - 1}`);
    for (let i = 1; i < fileLines.length; i += 1) {
      const info = fileLines[i].split(',');
      const firstname = info[0].trim();
      const field = info[3].trim();
      if (!studentsCount[field]) {
        studentsCount[field] = { count: 0, students: '' };
      }
      studentsCount[field].count += 1;
      studentsCount[field].students = studentsCount[field].students
        ? `${studentsCount[field].students}, ${firstname}`
        : firstname;
    }

    for (const item in studentsCount) {
      if (Object.hasOwn(studentsCount, item)) {
        console.log(
          `Number of students in ${item}: ${studentsCount[item].count}. List: ${studentsCount[item].students}`,
        );
      }
    }
    resolve(true);
  });
});

module.exports = countStudents;
