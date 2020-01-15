export default function users(){
    const accounts = [
        { user: "Gabriel", password: "123" }
    ]

    function checkLogin(command){
        var checked = false;

        console.log(`Login: ${command.account}, Senha:${command.password}, Socket: ${command.socket}`)

        accounts.forEach(function(item, ix) {
            if(command.account == item.user && command.password == item.password)
                checked = true
        })

        return checked
    }

    function searchValues(needle) {
        var found = [];
        var re = new RegExp(needle, 'i');
        accounts.forEach(function(item, ix) {
            Object.keys(item).forEach(function(key) {
            if (typeof item[key] !== 'string') return;
            if (item[key].match(re)) {
                if (found.indexOf(ix) === -1) { found.push(ix); }
            }
            });
        });
        return {searched: needle, indexes:found};
    }

    return {checkLogin}
    
}