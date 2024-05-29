async function addNewUsr(name){
    try{
        const userResponse = await fetch('http://localhost:3000/users',{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            borrowedBooks: []
        }),
    })
    if(!userResponse.ok){
        throw new Error('failed to add new user')
    }
    }catch(error){
        console.log(error.message)
    }
}
async function deleteUser(id){
   try{
    const deleteResponse = await fetch(`http://localhost:3000/users/${id}`,{
        method: "DELETE",
    })
    if(!deleteResponse.ok){
        throw new Error('failed to delete the error')
    }
   } catch(error){
    console.log(error.message)
   }
}
// deleteUser(1)
// deleteUser(2)
async function addNewBook(name,authos){
    try{
        const bookResponse = await fetch('http://localhost:3000/books',{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            author: authos,
            borrowedBooks: []
        }),
    })
    if(!bookResponse.ok){
        throw new Error('failed to add new book')
    }
    }catch(error){
        console.log(error.message)
    }
}
// addNewBook('I am good boy', "sergikaliashvili")

// addNewBook('you bad boy', "george kaliashvili")
async function deleteUser(id){
    try{
     const deleteResponse = await fetch(`http://localhost:3000/users/${id}`,{
         method: "DELETE",
     })
     if(!deleteResponse.ok){
         throw new Error('failed to delete the error')
     }
    } catch(error){
     console.log(error.message)
    }
 }
 // deleteUser(1)
 // deleteUser(2)
 async function deleteBook(id){
     try{
         const deleteBook = await fetch(`http://localhost:3000/books/${id}`,{
         method: "DELETE",
         headers: {
             "Content-Type": "application/json"
         },
       
     })
     if(!deleteBook.ok){
         throw new Error('failed to delete book')
     }
     }catch(error){
         console.log(error.message)
     }
 }
 deleteBook(1)
 deleteBook('05bc')