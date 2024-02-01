// import CorePermissionMappingService from "../core_permissions_mapping_services"

// import { get } from "node_modules/axios/index.cjs"

export default class Constants {
  static ENDPOINTS = {
    Companies: {
      get: '/companies'
    },
    LocationTypes: {
      get: '/location_types'
    },
    Locations: {
      get: '/locations',
      getUsersLocationId: '/users/location_users',
      getUserNotLocationId: '/users/location_non_users'
    },
    CorePermissionMapping: {
      get: '/core_permissions_mapping'
    },
    Permissions: {
      get: '/permissions'
    },
    Users: {
      get: '/users/company',
      getUserFromCognito: '/users/user_cognito'
    },
    Invitations: {
      get: '/invitations'
    },
    ActivityLog: {
      get: '/activity_logs'
    },
    Devices: {
      getDeviceByLocationId: '/devices/location',
      getDeviceByDeviceId: '/devices',
      getDeviceTypes: '/devices/types',
      getDeviceHistory: '/devices/history'
    },
    Alerts: {
      get: '/alerts'
    },
    Models: {
      get: '/models'
    },
    Addresses: {
      get: '/adresses'
    },
    Occupant: {
      getDeleteConfirmation: '/occupants/delete_confirmation',
      getDashboard: '/occupants/dashboard_attributes'
    },
    UserPreference: {
      get: '/user_preferences'
    },
    AlertCommunicationConfig: {
      get: '/alert_communication_configs'
    }
  }

  static BASE_URL = 'https://service-api.salus-eu.uleeco.com/api/v1'

  static AUTH_TOKEN =
    'eyJraWQiOiJDYmZIZGJyNVc0XC9reHNjNEYyNmVaNStEbXpTQ29cL1g5K2xmazRmRHZCZGM9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJiNTkyZDA5My0xZDcxLTRlMDYtYThkMi1mMjQ4MTZkZGY2ZjAiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LWNlbnRyYWwtMS5hbWF6b25hd3MuY29tXC9ldS1jZW50cmFsLTFfWEdSejNDZ29ZIiwiY29nbml0bzp1c2VybmFtZSI6ImFzaHdpbmkrdGVzdHVzZXJAdWxlZWNvLmNvbSIsIm9yaWdpbl9qdGkiOiJkZDc5YTBjNy0yMGZhLTQ4NTMtYTU1YS1kOWFmNWJkOTU1MzUiLCJhdWQiOiI0cGs1ZWZoM3Y4NGc1ZGF2NDNpbXN2NGZiaiIsImV2ZW50X2lkIjoiNjY3MjA5MGItMmIzZi00NDQwLWExZWItNzgxNGFiNjM0YjA3IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE3MDYwOTY4MzQsImV4cCI6MTcwNjE2ODI4NiwiaWF0IjoxNzA2MTU3NDg2LCJqdGkiOiJhZDY3MWRiYy1iYTQ1LTQxN2YtODQ1Mi1hZDNmMjI5YmY1ZjUiLCJlbWFpbCI6ImFzaHdpbmkrdGVzdHVzZXJAdWxlZWNvLmNvbSJ9.Nz79i7u_YcoQKkXVvN1ujo-zX-hnCXbRa7ydQFclINxVtf3rdJ8OVCEboLmYS6EsyR1Ea7uJqztyRwR7mJt_78KcLABVa_oZDHye7obSuMYC0hEzgHfGT60Lx5cI34uy3Pp_cikoGDZ66tlW-q7fM2q1MLvw7UGfZ905tHOKWifqovtMd2VOXErs2A4MIQlSIZDFkJACqkUgisZX795Q5eTcTt2_CeQpbOX1ZKnqlD8YkB5ZofsByOA18gRNbmPsj_Y0BEN4iwJcWX9qbCOKhdOWMQHvgry9Z2WShqhyEyNQt4mO4v4_8mf4DCuPy5TPpTZbVT2f34aFjIEgL3DSdQ'

  static COMPANY_CODE = 'salus-eu'

  static COMPANY_ID = '2d9dcbe0-a548-4c4a-8731-15b1866d4042'

  static SOURCE = 'console-ui'

  static ACCESS_TOKEN =
    'eyJraWQiOiJTWU1ZZHNCUEZ1RjhiaXp3TWVJY2RLamFhR2ZcL0FBd1F0YWUxODg2eWNHTT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJiNTkyZDA5My0xZDcxLTRlMDYtYThkMi1mMjQ4MTZkZGY2ZjAiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtY2VudHJhbC0xLmFtYXpvbmF3cy5jb21cL2V1LWNlbnRyYWwtMV9YR1J6M0Nnb1kiLCJjbGllbnRfaWQiOiI0cGs1ZWZoM3Y4NGc1ZGF2NDNpbXN2NGZiaiIsIm9yaWdpbl9qdGkiOiJkZDc5YTBjNy0yMGZhLTQ4NTMtYTU1YS1kOWFmNWJkOTU1MzUiLCJldmVudF9pZCI6IjY2NzIwOTBiLTJiM2YtNDQ0MC1hMWViLTc4MTRhYjYzNGIwNyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE3MDYwOTY4MzQsImV4cCI6MTcwNjE2ODI4NiwiaWF0IjoxNzA2MTU3NDg2LCJqdGkiOiJjZTQxODg0NC02ZTE2LTRlYzUtOTQwYi1kNDNmZGE3MTkzZTkiLCJ1c2VybmFtZSI6ImFzaHdpbmkrdGVzdHVzZXJAdWxlZWNvLmNvbSJ9.ROqcSeUvJJSU8E_NzdPgoeupxfAgPiPO7xtJFEf6H17p5_rjNOft0vitJ194oSSBvgICRIF3BBzh9azHp9B3hpMbMv1PV30VZTr6sd7AubPVFzn0dOFalYM3d2C-Kj_hy2gp2kYWkR0ktibqO3T8Q3MTZdyU8vfRsqheVaIDOtPOvZO_vDD7kHzJfi2naYbTva4iEVL4DfzaRkS_pdLWcJTQh2mSfB2lNlkOdYWS2adEJ7ASMWZPl31fXAthkzTsm2iPcZF1iGSAPay44NCejiY-IXDIWztW7bqndOqP4kB5VDBLs3HOIy_8H3oK9PiEUSmzpWHkH7Ge7p2Xx8VphA'

  static HEADER_KEYS = {
    authToken: 'x-auth-token',
    companyCode: 'company_code',
    SOURCE: 'x-source',
    accessToken: 'x-access-token'
  }

  static HEADER = {
    headers: {
      'x-auth-token': Constants.AUTH_TOKEN,
      'x-company-code': Constants.COMPANY_CODE,
      'x-source': Constants.SOURCE,
      'x-access-token': Constants.ACCESS_TOKEN
    }
  }
}
