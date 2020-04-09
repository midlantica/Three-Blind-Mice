const Customer = (customerObj, employeeArray) => {
  return `
    <section class="customer box">
      <h4 class="customer__name">${customerObj.name}</h4>
      <p>Employees assigned to:</p>
      <ul>
        ${employeeArray
          .map(
            (employeeArray) =>
              `<li>${employeeArray.firstName} ${employeeArray.lastName}</li>`
          )
          .join('')}
      </ul>
      </div>
    </section>
    `
}
export default Customer
