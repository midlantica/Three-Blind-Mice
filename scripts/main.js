import { getComputers } from './computers/ComputerProvider.js'
import { EmployeeList } from './employees/EmployeeList.js'
import { getEmployees } from './employees/EmployeeProvider.js'

getEmployees()
  .then(getComputers) //
  .then(EmployeeList)
