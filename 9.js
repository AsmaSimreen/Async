function getUser() {
    setTimeout(function () {
        const userids = [10, 20, 30, 40];
        console.log(userids);
        setTimeout(function (id) {
            const user = {
                name: 'John Doe',
                age: 25
            };
            console.log("UserID:" + id + ":Username:" + user.name + ",UserAge:", user.age);
            setTimeout(function (age) {
                console.log(user);
            }, 1000, user.age);
        }, 1000, userids[3]);
    }, 1500)
}
function abc(str, cb) {
    console.log(str);
    cb();
}
function def() {
    console.log("I am deaf");
}
abc("prash", getUser);
def();
