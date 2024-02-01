import Constants from './core/constants'
import NetworkWorker from './core/network_worker'

export default abstract class ActivityLogService {
  static getActivity = () => {
    const queryParams = {
      page: '0',
      pageSize: '7',
      entity_id: 'b27d0087-8b93-4de1-a677-cb5be50b87e8'
    }

    return NetworkWorker.get(
      Constants.ENDPOINTS.ActivityLog.get,
      [],
      queryParams,
      Constants.HEADER.headers
    )
  }
}

//return NetworkWorker.get(Constants.ENDPOINTS.Companies.get, [id], {}, Constants.HEADER.headers)
