import { useComputers } from '../computers/ComputerProvider.js'
import { useDepartments } from '../departments/DepartmentProvider.js'
import { useLocations } from '../locations/LocationProvider.js'
import Employee from './Employee.js'
import { useEmployees } from './EmployeeProvider.js'

const contentTarget = document.querySelector('.employees')

const render = (employeesToRender) => {
  const computers = useComputers()
  const departments = useDepartments()
  const locations = useLocations()

  contentTarget.innerHTML = employeesToRender
    .map((employeeObj) => {
      // Find related computer for the current employee
      const foundComputer = computers.find((computer) => {
        return computer.id === employeeObj.computerId
      })

      // Find related department for the current employee
      const foundDepartment = departments.find((department) => {
        return department.id === employeeObj.departmentId
      })

      // Find related locations for the current employee
      const foundLocation = locations.find((location) => {
        return location.id === employeeObj.locationId
      })

      return Employee(
        employeeObj,
        foundComputer,
        foundDepartment,
        foundLocation
      )
    })
    .join('')
}

export const EmployeeList = () => {
  const employees = useEmployees()

  render(employees)
}
