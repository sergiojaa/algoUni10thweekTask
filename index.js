

//damatebis funqcionali seminari 1. useris damateba. 2.washlac 3. infoscvlileba petch da put
async function createUser(user, age){
    try{
        const response = await fetch(`http://localhost:3000/people`,{
            method: 'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({
                name: user ,
                age: age
            })
        })
        if(!response.ok){
            throw new Error('invalid reques')
        }
        const data = await response.json()
        console.log('user created')
    }catch(error){
        console.log(error)
    }
}
// createUser('dato',45)

async function deleteUser(id){
  try{
    const response = await fetch(`http://localhost:3000/people/${id}`, {

        method:"DELETE",
        headers:{
            'Content-type':'application/json'
        }
    })
    if(!response.ok){
        throw new Error('invalid reques')
    }
    const data = await response.json()
    console.log('user deleted')
  }catch(error){
    console.log(error)
  }
}
// deleteUser(1)
async function changeUser(id, age){
    try{
        const response = await fetch(`http://localhost:3000/people/${id}`,{
            method:'PATCH',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({
                age: age
            })

        })
        if(!response.ok){
            throw new Error('cant be succesed')
        }
        const data = await response.json()
        console.log('user age changed')
    }catch(error){
        console.log(error)
    }
}

changeUser('422c', 10)