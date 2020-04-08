let customers = []

export const useCustomers = () => {
  return customers.slice()
}
export const getCustomers = () =>
  fetch('http://localhost:8090/customers')
    .then((res) => res.json())
    .then((data) => (customers = data))
