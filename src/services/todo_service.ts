import CrudService from './crud_service' 

export default class TodoService {
  static instanceService : any

  constructor() {
    TodoService.instanceService = null
  }

  static setInstance(instanceService : any) {
    TodoService.instanceService = instanceService
  }

  static getInstance() : any {
    if (!TodoService.instanceService) {
      TodoService.instanceService = new CrudService('todos')
    }
    return TodoService.instanceService
  }  
}