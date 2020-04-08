import { getComputers } from './computers/ComputerProvider.js'
import { getCustomers } from './customers/CustomerProvider.js'
import { getDepartments } from './departments/DepartmentProvider.js'
import { getEmployeeCustomers } from './employees/EmployeeCustomersProvider.js'
import { EmployeeList } from './employees/EmployeeList.js'
import { getEmployees } from './employees/EmployeeProvider.js'
import { getLocations } from './locations/LocationProvider.js'

getEmployees()
  .then(getComputers) //
  .then(getLocations)
  .then(getDepartments)
  .then(getCustomers)
  .then(getEmployeeCustomers)
  .then(EmployeeList)
