export function fetchRequest(url, successFunction, failFunction, active = true) {
    fetch(url)
    .then(res => res.json())
    .then(data => successFunction(data, active))
    .catch(failFunction)
}