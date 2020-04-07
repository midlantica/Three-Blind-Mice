import { useComputers } from '../computers/ComputerProvider.js'
import Employee from './Employee.js'
import { useEmployeeComputers } from './EmployeeComputerProvider.js'
import { useEmployees } from './EmployeeProvider.js'

const contentTarget = document.querySelector('.employees')

const EmployeeList = () => {
  const computers = useComputers()
  const employees = useEmployees()
  const employeeComputers = useEmployeeComputers()

  const render = () => {
    contentTarget.innerHTML = employees
      .map((employee) => {
        // Find related computer ids
        let relatedComputers = employeeComputers.filter(
          (pc) => pc.employeeId === employee.id
        )

        // Convert the array from relationship objects to computer objects
        relatedComputers = relatedComputers.map((rc) => {
          return computers.find((computer) => computer.id === rc.computerId)
        })

        // Get HTML representation of product
        const html = Employee(employee, relatedComputers)

        return html
      })
      .join('')
  }

  render()
}

export default EmployeeList
