import Constants from './core/constants'
import NetworkWorker from './core/network_worker'

export default abstract class DevicesService {
  static getDevicesBasesLocaionId = () => {
    const pathParams = ['e2c528f4-03e8-44b4-888b-96ae8011b44b']
    return NetworkWorker.get(
      Constants.ENDPOINTS.Devices.getDeviceByLocationId,
      pathParams,
      {},
      Constants.HEADER.headers
    )
  }
  static getDevicesBesesDeviceId = () => {
    const pathParams = ['08342cf6-b91f-449e-a0c6-57f1c427a887']
    return NetworkWorker.get(
      Constants.ENDPOINTS.Devices.getDeviceByDeviceId,
      pathParams,
      {},
      Constants.HEADER.headers
    )
  }
  static getDeviceTypes = () => {
    return NetworkWorker.get(
      Constants.ENDPOINTS.Devices.getDeviceTypes,
      [],
      {},
      Constants.HEADER.headers
    )
  }
  static getDeviceHistory = () => {
    const queryParams = {
      device_code: 'SAU2AG1_GW-001E5E0193FE-RS600-001E5E0902826550',
      property_name: 'ep1%3AsLevelS%3ACurrentLevel&start_date=2023-12-21T12%3A00%3A00',
      end_date: '2023-12-29T11%3A59%3A59',
      raw_data: false,
      type: 'RollerShutter',
      page: 0,
      limit: 1000
    }
    return NetworkWorker.get(
      Constants.ENDPOINTS.Devices.getDeviceHistory,
      [],
      queryParams,
      Constants.HEADER.headers
    )
  }
}
