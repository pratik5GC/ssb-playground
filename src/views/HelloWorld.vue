<script lang="ts">
// import LocationService from '../service/network/location_services'
// import CorePermissionMappingService from '../service/network/core_permissions_mapping_services'
// import CompaniesService from '../service/network/companies_services'
// import LocationTypesService from '../service/network/location_types_services'
// import PermissionService from '../service/network/permissions_services'
// import UsersService from '../service/network/users_service'
// import InvitationsService from '../service/network/invitations_services'
// import ActivityLogService from '../service/network/activity_log_services'
// import DevicesService from '../service/network/devices_services'
// import AlertService from '../service/network/alerts_services'
// import ModelsService from '../service/network/models_services'
// import AddressesService from '../service/network/addresses_services'
// import OccupantService from '../service/network/occupant_services'
// import UserPreferenceService from '../service/network/user_preference_services'
import AlertCommunicationConfigService from '../service/network/alert_communication_config_services'

export default {
  data() {
    return {
      test: 'Monkey' as string,
      // test2: 'Donkey' as string,
      // test3: 'Company' as string,
      // test4: 'allID' as string,
      // test5: 'Pinky' as string,
      // test6: 'Dino' as string,
      test7: 'id' as string,
      test8: 'nonId' as string,
      test9: 'message' as string
    }
  },
  mounted() {
    // CorePermissionMappingService.getCorePermissionMappingService()
    //   .then((response: any) => {
    //     this.test2 = response.data.data[0].name
    //     console.log(this.test2)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    // CompaniesService.getOne('de06806d-afdd-4ab2-a85c-ccb1254de343')
    //   .then((response) => {
    //     this.test3 = response.data.data.name
    //     console.log(this.test3)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    // CompaniesService.getAll()
    //   .then((response) => {
    //     this.test4 = response.data.data[0].id
    //     console.log(this.test4)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    // LocationTypesService.getOne('d0b97dd7-7c48-4056-bba7-8e4490444e82')
    //   .then((response) => {
    //     this.test5 = response.data.data.created_at
    //     console.log(this.test5)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    // LocationTypesService.getAll()
    //   .then((response) => {
    //     this.test6 = response.data.data[0].name
    //     console.log(this.test6)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    // LocationService.getOne()
    //   .then((response) => {
    //     this.test = response.data.data[0].name
    //     console.log(this.test)
    //   })
    //   .catch((error: any) => {
    //     console.log(error)
    //   })
    // LocationService.getListOfUsersWhoHavePermissionsToSpecificLocationId()
    //   .then((response) => {
    //     this.test7 = response.data.data[0].id
    //     console.log(this.test7)
    //   })
    // .catch((error) => [console.log(error)])
    // LocationService.getListOfWhoDontHavePermissionToSpecificLocationId()
    //   .then((response) => {
    //     this.test8 = response.data.request_id
    //     console.log(this.test8)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    // PermissionService.getPermissions().then(response => {
    //   this.test9 = response.data.request_id
    //   console.log(this.test9)
    // }).catch(error => {
    //   console.log(error)
    // })
    // UsersService.getAllUsers().then((response) => {
    //   this.test9 = response.data.request_id
    //   console.log(this.test9)
    // })
    // UsersService.getUserFromCognito()
    //   .then((response) => {
    //     this.test9 = response.data.data.cognito_id
    //     console.log(this.test9)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    // InvitationsService.getInvitations()
    //   .then((response) => {
    //     this.test9 = response.data.code
    //     console.log(this.test9)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    // InvitationsService.getPendingInvitations()
    //   .then((response) => {
    //     this.test9 = response.data.code
    //     console.log(this.test9)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    // ActivityLogService.getActivity()
    //   .then((response) => {
    //     this.test9 = response.data.data.count
    //     console.log(this.test9)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    // DevicesService.getDevicesBasesLocaionId()
    //   .then((response) => {
    //     this.test9 = response.data.data[0].type
    //     console.log(this.test9)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    // DevicesService.getDevicesBesesDeviceId()
    //   .then((response) => {
    //     this.test9 = response.data.data.id
    //     console.log(this.test9)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    // DevicesService.getDeviceTypes()
    //   .then((response) => {
    //     this.test9 = response.data.request_id
    //     console.log(this.test9)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    // DevicesService.getDeviceHistory()
    //   .then((response) => {
    //     this.test9 = response.data.message
    //     console.log(this.test9)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    // AlertService.getAlerts()
    //   .then((response) => {
    //     this.test9 = response.data.message
    //     console.log(this.test9)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    // ModelsService.getModels()
    //   .then((response) => {
    //     this.test9 = response.data.code
    //     console.log(this.test9)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    // AddressesService.getAddresses()
    //   .then((response) => {
    //     this.test9 = response.data.message
    //     console.log(this.test9)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    // OccupantService.getDeleteConfirmation()
    //   .then((response) => {
    //     this.test9 = response.data.message
    //     console.log(this.test9)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    // OccupantService.getDashboard()
    //   .then((response) => {
    //     this.test9 = response.data.message
    //     console.log(this.test9)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    // UserPreferenceService.getUserPreference()
    //   .then((response) => {
    //     this.test9 = response.data.message
    //     console.log(this.test9)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    AlertCommunicationConfigService.getAlertCommunicationConfig()
      .then((response) => {
        this.test9 = response.data.request_id
        console.log(this.test9)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<template>
  <!-- {{ test2 }} {{ test3 }} {{ test4 }} {{ test5 }} {{ test6 }} {{ test }} {{ test7 }} {{ test8 }}  -->
  <div>
    <h1>{{ test9 }}</h1>
  </div>
</template>
