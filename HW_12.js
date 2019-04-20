/*Task 1

Захостить на гитхабе приложение, которое:
- читает куки на клиенте, и если там есть дата последнего посещения, 
выводит ее на страницу
- пишет в куки на клиенте текущую дату посещения*/

var res = {}

document.cookie.split('; ')
    .map(
        item => Object.assign( {}, 
            {[item.split('=')[0]]: item.split('=')[1]}
        )
    ).forEach(
        item => Object.assign(res, item)
    )

for (item in res) {
    item === 'last_visit' ?
        document.body.appendChild(
            document.createElement('p')
        ).innerText = res[item] : null
}

document.cookie = `last_visit = ${new Date().toLocaleString().split(', ')[0]}`