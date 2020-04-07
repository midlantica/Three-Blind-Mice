const Employee = (employee, computers) => {
  return `
    <section class="employee box">
      <h4>${employee.firstName} ${employee.lastName}</h4>
      ${computers.map((computer) => `<p>${computer.models}</p>`).join('')}
    </section>
  `
}

export default Employee
