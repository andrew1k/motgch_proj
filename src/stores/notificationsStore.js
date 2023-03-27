import {defineStore} from 'pinia'
import { LocalNotifications } from '@capacitor/local-notifications'

export const useNotificationsStore = defineStore('notificationsStore', () => {
  const requestNotificationsPermissions = async () => {
    const res = await LocalNotifications.checkPermissions()
    if (res.display === 'denied' || res.display === 'prompt') await LocalNotifications.requestPermissions()
  }
  const scheduleNotifications = async (notification) => {
    await LocalNotifications.schedule({
      notifications: [{...notification}]
    })
  }

  return {
    requestNotificationsPermissions,
    scheduleNotifications,
  }
})