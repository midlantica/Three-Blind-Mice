const Employee = (employeeObj, computerObj) => {
  return `
    <section class="employee box">
      <h4>Name: ${employeeObj.firstName} ${employeeObj.lastName}</h4>
      <p>Age: ${employeeObj.age}</p>
      <p>Computer: ${computerObj.year} ${computerObj.model}</p>
    </section>
    `
}

export default Employee
