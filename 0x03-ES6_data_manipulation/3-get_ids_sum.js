export default function getStudentIdsSum(studentList) {
  if (Array.isArray(studentList)) {
    const initialValue = 0;
    return studentList.map((student) => student.id).reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue,
    );
  }
  return [];
}
