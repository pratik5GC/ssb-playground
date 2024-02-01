import Constants from './core/constants'
import NetworkWorker from './core/network_worker'

export default abstract class AlertService {
  static getAlerts = () => {
    const queryParams = {
      device_code: 'ST921WF-001E5E02C020',
    //   device_code: 'ST921WF-001E5E032084'
    }
    return NetworkWorker.get(
      Constants.ENDPOINTS.Alerts.get,
      [],
      queryParams,
      Constants.HEADER.headers
    )
  }
}
