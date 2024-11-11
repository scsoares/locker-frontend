import { Box, Center, Divider, Flex, Group, Input, ScrollArea, Text, Title } from '@mantine/core';

import './Lockers.module.css';

const lockers = [
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

export default function Lockers() {
  return (
    <Box
      bg="myPurple.4"
      p="xl"
      mb="lg"
      h="86vh"
      w="34.5vw"
      style={{ borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }}
    >
      <Center>
        <h2>Armarios</h2>
      </Center>
      {/* Search input for lockers */}
      <Input />

      <ScrollArea p="lg" m="md" h="64vh" scrollbarSize={16}>
        <Flex direction="column" gap="sm">
          {lockers.map((n) => {
            return (
              <Box h="auto" bg="myPurple.6" style={{ borderRadius: 20 }} p="md">
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
