
const PetfulApiService = {
  async getDog(){
    const res = await fetch('https://petful-hector-cody.herokuapp.com/api/dog')

    if (!res.ok){
      return 'Error with petfulApiService.getDog()'
    }

    return res.json()
  },

  async deleteDog(){
    const res = await fetch('https://petful-hector-cody.herokuapp.com/api/dog',{
      method: 'DELETE'
    })

    if (!res.ok){
      return 'Error with petfulApiService.deleteDog()'
    }

    return res.json()
  },

  async getCat(){
    const res = await fetch('https://petful-hector-cody.herokuapp.com/api/cat')

    if (!res.ok){
      return 'Error with petfulApiService.getCat()'
    }

    return res.json()
  },

  async deleteCat(){
    const res = await fetch('https://petful-hector-cody.herokuapp.com/api/cat',{
      method: 'DELETE'
    })

    if (!res.ok){
      return 'Error with petfulApiService.DeleteCat()'
    }

    return res.json()
  },

  async newUser(user){
    const res = await fetch('https://petful-hector-cody.herokuapp.com/api/adopters',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })

    if (!res.ok){
      return 'Error with petfulApiService.newUser()'
    }

    return res.json()
  }, 
  async getUsers(){
    const res = await fetch('https://petful-hector-cody.herokuapp.com/api/adopters')

    if (!res.ok){
      return 'Error with petfulApiService.newUser()'
    }

    return res.json()
  }

}

export default PetfulApiService