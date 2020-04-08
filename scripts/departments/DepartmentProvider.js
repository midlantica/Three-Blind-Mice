let departments = []

export const useDepartments = () => {
  return departments.slice()
}
export const getDepartments = () =>
  fetch('http://localhost:8090/departments')
    .then((res) => res.json())
    .then((data) => (departments = data))
