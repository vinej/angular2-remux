import CrudService from './crud_service' 

export default class TodoService {
  static instanceService = null
  constructor() {
    //this.instanceService = null
  }

  static setInstance(instanceService) {
    TodoService.instanceService = instanceService
  }

  static getInstance() {
    if (!TodoService.instanceService) {
      TodoService.instanceService = new CrudService('todos')
    }
    return TodoService.instanceService
  }  
}
