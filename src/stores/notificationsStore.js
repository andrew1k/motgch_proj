import {defineStore} from 'pinia'
import { LocalNotifications } from '@capacitor/local-notifications'

export const useNotificationsStore = defineStore('notificationsStore', () => {
  const reqOnInit = async () => {
    await LocalNotifications.requestPermissions()
  }
  const sheduleBasic = async () => {
    await LocalNotifications.schedule({
      notifications: [{
        title: 'title',
        id: 1,
        body: 'Body text',
        smallIcon: 'mdi-bell',
        iconColor: 'gray',
      }]
    })
  }

  return {
    reqOnInit,
    sheduleBasic
  }
})