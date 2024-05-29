// fetch API Tmemebi ganxilvit da kodit 
//  get request api wamogeba
// async function fetchData(){
//     const response = await fetch('http://localhost:3000/people')
//     const data = await response.json()
//     console.log(data)
// }
// fetchData()

// json-server vqmnit.fake api aris.infos gacvla jsonit xdeba 
// data json shevqmenit da ikidan wamoviget

// GET
// Query parameter/ Query String
// bevri object gvaq magalitad da mxolod damxolod iseti objectebis wamogeba
// gvinda romlis saxelicaa temo.filtritac shegvidzlia mara roca uamrav 
//objectze vsaubrobt filter cudi metodia.ikidanve gafiltruliunda wamovigot
// apishi people?name=temo temoebs ro wamoigebs idit shegvidzlia mivwvdet aseve

//POST sheqmnas snishnavs.damatebas.axali object davamatot apize
//adamianis damateva
// async function postPerson(){
//     const response = await fetch('http://localhost:3000/people',{
//         method: "POST",
//         headers: {   // damatebiti info requestis shesaxeb
//             "content-Type": "application/json", //veubnebit rom rasac vagzavnit jsoon formatirebisaa

//         },
//         body: JSON.stringify({  //bodyshi vushvebt infos rasac vagzavnit da axalobjects vgebulobt 
//             //stringify imitoro rasac vagzavnit stringad gadaikvanos
//             name: "sofo",
//             age: 20
//         }),
//     })
//     console.log(response)
// }
// postPerson()

// PUT chanacvleba .roca erti ramis chanacvleba gvinda da amas vwert.mere isinic
// unda gamovitanot,rac davtovet igive info
// async function putPerson(id, ){
//     const response = await fetch(`http://localhost:3000/people/${id}`,{
//         method: "PUT",
//         headers: {
//             "content-Type": "application/json",
//         },
//         body: JSON.stringify( {  // is object iwereba romlitac minda chanacvldes bodyshi
//             name: 'guliko',
//             age: 19
//         }
           
//         )
//     })
//     console.log(response)
// }
// putPerson(1,)

//patch chasanacvleblad imas vwert risi chanacvlebac gvinda.kvelas ara rogorc putshi
// tu erti ramis shecvla gvinda amas vikenebt
// sheicvla pirvel idiani name gaxda tekla
// ararsebul rames tu gavatant parametrad ro gaaketos
//magas daamatebs.arsebuls ki chaanacvlebs
// async function putPerson(id, ){
//     const response = await fetch(`http://localhost:3000/people/${id}`,{
//         method: "PATCH",
//         headers: {
//             "content-Type": "application/json",
//         },
//         body: JSON.stringify( {  // is object iwereba romlitac minda chanacvldes bodyshi
//             name: 'tekla',
            
//         }
           
//         )
//     })
//     console.log(response)
// }
// putPerson(1)

//DELETE shlis bodys da headerss ar vatant. ra washalos imas veubnebit people/1 delete  //es martivia
// async function deletePerson(){
//     const response = await fetch('http://localhost:3000/people/1',{
//         method: "DELETE"
//     })
// }
// deletePerson()