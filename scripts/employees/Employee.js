const Employee = (
  employeeObj,
  computerObj,
  departmentObj,
  locationObj,
  customerObj
) => {
  const fullName = `${employeeObj.firstName} ${employeeObj.lastName}`

  return `
    <section class="employee box">
      <h4 class="employee__name">${fullName}</h4>
      <p class="employee__age">
        <span class="employee--subject">Age:</span>
        ${employeeObj.age}
      </p>
      <p class="employee__department">
        <span class="employee--subject">Dept:</span>
        ${departmentObj.name}
      </p>
      <p class="employee__location">
        <span class="employee--subject">Loc:</span>
        ${locationObj.name}
      </p>
      <p class="employee__computer">
        <span class="employee--subject">PC:</span>
        ${computerObj.model} – ${computerObj.year}</p>
      <div class="employee__customers marTH">
        <p>Previous customers:</p>
        <ul>
          ${customerObj
            .map((customerObj) => `<li>${customerObj.name}</li>`)
            .join('')}
        </ul>

      </div>
    </section>
    `
}
export default Employee
