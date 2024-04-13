const accountId = 144553        // Const :- Kabhi Change nhi ho sakta

let accountEmail = "sanjeet@gmail.com"

var accountPassword = "12345"

accountCity = "Bhopal"

//accountId = 2

/* Scope
{

Prefer not to use var
because of issue in block scope and functional scope

}
*/

accountEmail = "kumar@gmail.com"
accountPassword = "232323"
accountCity = "jharkhand"

console.log(accountId);

console.table([accountId, accountEmail , accountPassword , accountCity])