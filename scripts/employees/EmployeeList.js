import { useComputers } from '../computers/ComputerProvider.js'
import Employee from './Employee.js'
import { useEmployees } from './EmployeeProvider.js'

const contentTarget = document.querySelector('.employees')

const render = (employeesToRender) => {
  const computers = useComputers()

  contentTarget.innerHTML = employeesToRender
    .map((employeeObj) => {
      // Find related computer for the current comnputer
      const foundComputer = computers.find((computer) => {
        return computer.id === employeeObj.computerId
      })

      return Employee(employeeObj, foundComputer)
    })
    .join('')
}

export const EmployeeList = () => {
  const employees = useEmployees()

  render(employees)
}
