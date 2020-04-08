const Employee = (
  employeeObj,
  computerObj,
  departmentObj,
  locationObj,
  EmployeeCustomersObj
) => {
  const fullName = `${employeeObj.firstName} ${employeeObj.lastName}`

  return `
    <section class="employee box">
      <h4 class="employee__name">${fullName}</h4>
      <p class="employee__age">Age: ${employeeObj.age}</p>
      <p class="employee__department">Dept: ${departmentObj.name}</p>
      <p class="employee__location">Loc: ${locationObj.name}</p>
      <p class="employee__computer">PC: ${computerObj.model} – ${computerObj.year} </p>
      <div class="employee__customers">
        <p>previously worked with these customers:</p>
        <ul>
          <li>${EmployeeCustomersObj.customerId}</li>
        </ul>

      </div>
    </section>
    `
}
export default Employee
