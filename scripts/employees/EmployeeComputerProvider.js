let employeeComputers = []

export const useEmployeeComputers = () => employeeComputers.slice()

export const getEmployeeComputers = () =>
  fetch('http://localhost:8090/employeeComputers')
    .then((res) => res.json())
    .then((data) => (employeeComputers = data))
