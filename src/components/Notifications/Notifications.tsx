import { Box, Center, Divider, Flex, ScrollArea, Text, Title } from '@mantine/core';

import './Notifications.module.css';

import { useEffect, useState } from 'react';
import instance from '@/services/api';

// this interface defines the value types of Notification object for later usage in the createReservations function
interface Notification {
  type: string;
  box: string;
  location: string;
  hour: string;
}

// This interface defines the value types of Booking object for generating the notifications in the createNotifications function
//booked objects list in the array (preguntar a miguel)
interface Booking {
  id: string;
  description: string;
  checkInDate: EpochTimeStamp;
  checkOutDate: EpochTimeStamp;
  state: string;
  teacherColumn: number;
}

// This is a mock notifications array for testing
const mockNotifications: Notification[] = [
  {
    type: 'recogida',
    box: 'C02A03',
    location: 'Aula 106',
    hour: '16:00',
  },
  {
    type: 'devolución',
    box: 'C02A03',
    location: 'Aula 106',
    hour: '18:00',
  },
  {
    type: 'recogida',
    box: 'C02A03',
    location: 'Aula 106',
    hour: '16:00',
  },
  {
    type: 'devolución',
    box: 'C02A03',
    location: 'Aula 106',
    hour: '18:00',
  },
  {
    type: 'recogida',
    box: 'C02A03',
    location: 'Aula 106',
    hour: '16:00',
  },
  {
    type: 'devolución',
    box: 'C02A03',
    location: 'Aula 106',
    hour: '18:00',
  },
];

export function Notifications() {
  function createNotifications(bookings: any): any {
    let inNotifications: Notification[];
    let outNotifications: Notification[];
    let notifications: Notification[] = [];

    var now = Date.now();

    bookings.forEach((b: any) =>
      b.checkInDate - now <= 7200
        ? notifications.push({ type: '', box: '', location: '', hour: b.checkInDate })
        : null
    );

    return bookings ? notifications : null;
  }

  // useEffect for fetching the reservation data and creating the notifications based on current date and time. This piece of code, as of now, needs some reviewing and refactoring
  //and expects the population of the reservations table
  useEffect((): any => {
    try {
      let reservations: any;

      instance.get('/bookings').then((response) => {
        reservations = response.data;
      });

      return createNotifications(reservations);
    } catch (err: any) {
      console.log(err.message);
      return null;
    }
  }, []);

  return (
    <Box bg="transparent" h="60vh" bd="1px solid myPurple.1" style={{ borderRadius: 40 }}>
      <Center>
        <h2>Notificaciones</h2>
      </Center>
      <Divider size="xs" color="myPurple.1" />

      <ScrollArea p="lg" m="md" h="50vh" scrollbarSize={16}>
        <Flex direction="column" gap="sm">
          {mockNotifications.map((n) => {
            return (
              <Box
                h="auto"
                bg={n.type === 'recogida' ? 'rgba(34, 139, 230, .20)' : 'rgba(231, 175, 46, .20)'}
                style={{ borderRadius: 20 }}
                p="md"
                bd={`1px solid ${n.type === 'recogida' ? 'rgba(34, 139, 230)' : 'rgba(231, 175, 46)'}`}
              >
                <Flex gap="xl" justify="center" align="center">
                  <Flex gap="sm" direction="column" justify="center">
                    <Text fw={700} c="white">
                      Recordatorio de {n.type}:
                    </Text>
                    <Flex gap="md" justify="flex-start">
                      <Flex gap={5}>
                        <Text c="white" fw={700}>
                          Casilla:
                        </Text>{' '}
                        <Text c="white">{n.box}</Text>
                      </Flex>
                      <Flex gap={5}>
                        <Text c="white" fw={700}>
                          Ubicación:
                        </Text>{' '}
                        <Text c="white">{n.class}</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Title
                    fw={600}
                    c={n.type === 'recogida' ? 'rgba(34, 139, 230)' : 'rgba(231, 175, 46)'}
                  >
                    {n.hour}
                  </Title>
                </Flex>
              </Box>
            );
          })}
        </Flex>
      </ScrollArea>
    </Box>
  );
}
