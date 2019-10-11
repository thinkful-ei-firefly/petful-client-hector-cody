
const PetfulApiService = {
  async getDog(){
    const res = await fetch('')

    if (!res.ok){
      return 'Error with petfulApiService.getDog()'
    }

    return res.json()
  },

  async deleteDog(){
    const res = await fetch('',{
      method: 'DELETE'
    })

    if (!res.ok){
      return 'Error with petfulApiService.getDog()'
    }

    return res.json()
  },

  async getCat(){
    const res = await fetch('')

    if (!res.ok){
      return 'Error with petfulApiService.getCat()'
    }

    return res.json()
  },

  async deleteCat(){
    const res = await fetch('',{
      method: 'DELETE'
    })

    if (!res.ok){
      return 'Error with petfulApiService.getDog()'
    }

    return res.json()
  }

}