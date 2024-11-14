import * as React from 'react';
import { Notification } from './Notifications';

export const NotificationsContext = React.createContext<Notification | undefined>(undefined);
