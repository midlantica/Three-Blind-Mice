let employeeCustomers = []

export const useEmployeeCustomers = () => employeeCustomers.slice()

export const getEmployeeCustomers = () =>
  fetch('http://localhost:8090/employeeCustomers')
    .then((res) => res.json())
    .then((data) => (employeeCustomers = data))
