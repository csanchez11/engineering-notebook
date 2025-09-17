/**
 * datastore.get('object.property.key')
 * datastore.set('nested.object.property', value)
 * datastore.delete('nested.object.property')
 * datastore.getAll()
 */

class Datastore {
  #data
  constructor(initialData = {}){
    this.#data = initialData;
  }

  get(path) {
    const pathArr = path.split('.')
    let data = this.#data
    for(let i = 0; i < pathArr.length; i++){
      if (!data[pathArr[i]]) return `No data stored at ${path}`
      data = data[pathArr[i]]
    }
    return data
  }
  set(path, value) {
    const pathArr = path.split('.');
    let data = this.#data
    for(let i = 0; i < pathArr.length - 1; i++){
      if (!data[pathArr[i]]){
        data[pathArr[i]] = {}
      }
      data = data[pathArr[i]]
    }
    data[pathArr[pathArr.length - 1]] = value
    return
  }

  delete(path) {
    const pathArr = path.split('.')
    let data = this.#data
    for(let i = 0; i < pathArr.length - 1; i++){
      data = data[pathArr[i]]
    }
    delete data[pathArr[pathArr.length - 1]]
    return 'Deleted Path'
  }

  getAll(){
    return this.#data
  }
}

const datastore = new Datastore()

datastore.set('object.property.new', '1234')
datastore.set('object.property.old', '4321')
datastore.set('object.value.old', 88)
datastore.set('object.key', false)

console.log(datastore.getAll())
console.log(datastore.get('object.property.new'))
console.log(datastore.get('object.value.old'))
console.log(datastore.get('object.value.new'))

datastore.delete('object.key')

console.log(datastore.getAll())
