let computers = []

export const useComputers = () => computers.slice()

export const getComputers = () =>
  fetch('http://localhost:8090/computers')
    .then((res) => res.json())
    .then((data) => (computers = data))
