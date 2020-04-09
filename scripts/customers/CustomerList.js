import { useEmployeeCustomers } from '../employees/EmployeeCustomersProvider.js'
import { useEmployees } from '../employees/EmployeeProvider.js'
// import Employee from '../employees/Employee.js'
import Customer from './Customer.js'
import { useCustomers } from './CustomerProvider.js'

const contentTarget = document.querySelector('.customers')

const render = (customersToRender) => {
  const employeeCustomers = useEmployeeCustomers()
  const customers = useCustomers()
  const employees = useEmployees()

  // Setup Emplyee Customers relationship

  contentTarget.innerHTML = customersToRender
    .map((customerObj) => {
      // Find related customer for the current employee
      const foundEmployee = employees.find((employee) => {
        return employee.id === customerObj.customerId
      })

      // Find customer/[s] for the current employee
      let filterCustomersEmployee = employeeCustomers.filter(
        (fce) => fce.customerId === customerObj.id
      )

      filterCustomersEmployee = filterCustomersEmployee.map((fce) => {
        return employees.find((employee) => employee.id === fce.employeeId)
      })

      return Customer(customerObj, filterCustomersEmployee)
    })
    .join('')
}

export const CustomerList = () => {
  const customers = useCustomers()

  render(customers)
}
