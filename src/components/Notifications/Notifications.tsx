import { Box, Center, Divider, Flex, Group, ScrollArea, Text, Title } from '@mantine/core';

import './Notifications.module.css';

const notifications = [
  {
    type: 'recogida',
    box: 'C02A03',
    class: 'Aula 106',
    bgColor: 'rgba(34, 139, 230, .20)',
    hour: '16:00',
    hourColor: 'rgba(34, 139, 230)',
  },
  {
    type: 'devolución',
    box: 'C02A03',
    class: 'Aula 106',
    bgColor: 'rgba(231, 175, 46, .20)',
    hour: '18:00',
    hourColor: 'rgba(231, 175, 46)',
  },
  {
    type: 'recogida',
    box: 'C02A03',
    class: 'Aula 106',
    bgColor: 'rgba(34, 139, 230, .20)',
    hour: '16:00',
    hourColor: 'rgba(34, 139, 230)',
  },
  {
    type: 'devolución',
    box: 'C02A03',
    class: 'Aula 106',
    bgColor: 'rgba(231, 175, 46, .20)',
    hour: '18:00',
    hourColor: 'rgba(231, 175, 46)',
  },
  {
    type: 'recogida',
    box: 'C02A03',
    class: 'Aula 106',
    bgColor: 'rgba(34, 139, 230, .20)',
    hour: '16:00',
    hourColor: 'rgba(34, 139, 230)',
  },
  {
    type: 'devolución',
    box: 'C02A03',
    class: 'Aula 106',
    bgColor: 'rgba(231, 175, 46, .20)',
    hour: '18:00',
    hourColor: 'rgba(231, 175, 46)',
  },
  {
    type: 'recogida',
    box: 'C02A03',
    class: 'Aula 106',
    bgColor: 'rgba(34, 139, 230, .20)',
    hour: '16:00',
    hourColor: 'rgba(34, 139, 230)',
  },
  {
    type: 'devolución',
    box: 'C02A03',
    class: 'Aula 106',
    bgColor: 'rgba(231, 175, 46, .20)',
    hour: '18:00',
    hourColor: 'rgba(231, 175, 46)',
  },
  {
    type: 'recogida',
    box: 'C02A03',
    class: 'Aula 106',
    bgColor: 'rgba(34, 139, 230, .20)',
    hour: '16:00',
    hourColor: 'rgba(34, 139, 230)',
  },
  {
    type: 'devolución',
    box: 'C02A03',
    class: 'Aula 106',
    bgColor: 'rgba(231, 175, 46, .20)',
    hour: '18:00',
    hourColor: 'rgba(231, 175, 46)',
  },
  {
    type: 'recogida',
    box: 'C02A03',
    class: 'Aula 106',
    bgColor: 'rgba(34, 139, 230, .20)',
    hour: '16:00',
    hourColor: 'rgba(34, 139, 230)',
  },
  {
    type: 'devolución',
    box: 'C02A03',
    class: 'Aula 106',
    bgColor: 'rgba(231, 175, 46, .20)',
    hour: '18:00',
    hourColor: 'rgba(231, 175, 46)',
  },
];

export function Notifications() {
  return (
    <Box bg="myPurple.7" h="60vh" bd="1px solid myPurple.1" style={{ borderRadius: 40 }}>
      <Center>
        <h2>Notificaciones</h2>
      </Center>
      <Divider size="xs" color="myPurple.1" />

      <ScrollArea p="lg" m="md" h="50vh" scrollbarSize={16}>
        <Flex direction="column" gap="sm">
          {notifications.map((n) => {
            return (
              <Box
                h="auto"
                bg={n.bgColor}
                style={{ borderRadius: 20 }}
                p="md"
                bd={`1px solid ${n.hourColor}`}
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
                  <Title fw={600} c={n.hourColor}>
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
