import { getComputers } from './computers/ComputerProvider.js'
import { getEmployeeComputers } from './employees/EmployeeComputerProvider.js'
import EmployeeList from './employees/EmployeeList.js'
import { getEmployees } from './employees/EmployeeProvider.js'

getEmployeeComputers()
  .then(getEmployees) //
  .then(getComputers)
  .then(EmployeeList)
