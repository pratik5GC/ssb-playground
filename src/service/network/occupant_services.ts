import Constants from './core/constants'
import NetworkWorker from './core/network_worker'

export default abstract class OccupantService {
  static getDeleteConfirmation = () => {
    const queryParams = {
      id: '7e03d3e6-d7fc-4f53-a0c4-e189358e7072'
    }
    return NetworkWorker.get(
      Constants.ENDPOINTS.Occupant.getDeleteConfirmation,
      [],
      queryParams,
      Constants.HEADER.headers
    )
  }

  static getDashboard = () => {
    return NetworkWorker.get(
      Constants.ENDPOINTS.Occupant.getDashboard,
      [],
      {},
      Constants.HEADER.headers
    )
  }
}
