//for Locker component
export interface Locker {
  id: string;
  description: string;
  number: number;
  location: string;
}

export interface LockersProps {
  lockers: Locker[];
  onLockerClick: (locker: Locker) => void;
}

//for notifications component

export interface Booking {
  id: number;
  object_id: number;
  user_id: number;
  description: string;
  checkOutTime: string;
  checkInTime: string;
  type: 'recogida' | 'devolución';
  Object: {
    id: number;
    name: string;
    Box: {
      id: number;
      name: string;
      Locker: {
        name: string;
        location: string;
      };
    };
  };
}
