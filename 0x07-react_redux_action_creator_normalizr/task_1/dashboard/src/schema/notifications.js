import * as notificationData from "../../notifications.json";
import { normalize, schema } from 'normalizr';

export default function getAllNotificationsByUser(userId) {
	return notificationData
		.filter((notification) => notification.author.id === userId)
		.map((notification) => notification.context);
}

//define a users schema
const user = new schema.Entity('users');

//define a message schema
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });

//define a notification schema
const notification = new schema.Entity('notification', {
	author: user,
	context: message
});

export const normalizedData = (notificationData, [notification])