import Constants from './core/constants'
import NetworkWorker from './core/network_worker'

export default abstract class InvitationsService {
  static getInvitations = () => {
    const queryParams = {
      status: 'accepted'
    }
    return NetworkWorker.get(
      Constants.ENDPOINTS.Invitations.get,
      [],
      queryParams,
      Constants.HEADER.headers
    )
  }
  static getPendingInvitations = () => {
    const queryParams = {
      status: 'invited'
    }
    return NetworkWorker.get(
      Constants.ENDPOINTS.Invitations.get,
      [],
      queryParams,
      Constants.HEADER.headers
    )
  }
}
