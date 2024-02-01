import Constants from './core/constants'
import NetworkWorker from './core/network_worker'

export default abstract class LocationService {
  static getOne = () => {
    return NetworkWorker.get(Constants.ENDPOINTS.Locations.get, [], {}, Constants.HEADER.headers)
  }
  static getListOfUsersWhoHavePermissionsToSpecificLocationId = () => {
    const queryParams = { location_id: 'e2c528f4-03e8-44b4-888b-96ae8011b44b' }
    return NetworkWorker.get(
      Constants.ENDPOINTS.Locations.getUsersLocationId,
      [],
      queryParams,
      Constants.HEADER.headers
    )
  }
  static getListOfWhoDontHavePermissionToSpecificLocationId = () => {
    const queryParams = { location_id: 'e2c528f4-03e8-44b4-888b-96ae8011b44b' }
    return NetworkWorker.get(
      Constants.ENDPOINTS.Locations.getUserNotLocationId,
      [],
      queryParams,
      Constants.HEADER.headers
    )
  }
}

// GET List of users who have permission to specific location ID
