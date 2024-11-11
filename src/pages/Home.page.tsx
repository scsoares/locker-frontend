import { Divider, Flex, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Banner } from '@/components/Banner/Banner';
import Lockers from '@/components/Lockers/Lockers';
import { Notifications } from '@/components/Notifications/Notifications';
import { Pending } from '@/components/Pending/Pending';
import { SideMenu } from '@/components/SideMenu/SideMenu';
import UserBar from '@/components/UserBar/UserBar';

export function HomePage() {
  const theme = useMantineTheme();
  const matches = useMediaQuery('(min-width: 85em)');
  const matches2 = useMediaQuery('(max-width: 93em)');

  return (
    <>
      {matches ? (
        matches2 ? (
          <Flex style={{ backgroundColor: theme.colors.myPurple[6] }}>
            <Flex w="100%" gap="lg">
              <SideMenu />
              <Flex direction="column" w="100%">
                <UserBar />
                <Flex gap="lg" wrap="wrap">
                  <Flex maw={800} gap="lg" direction="column">
                    <Banner />
                    <Flex miw={600} maw="auto" gap="lg">
                      <Notifications />
                      <Pending />
                    </Flex>
                  </Flex>
                  <Lockers />
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        ) : (
          <Flex style={{ backgroundColor: theme.colors.myPurple[6] }}>
            <Flex w="100%" gap="lg">
              <SideMenu />
              <Flex direction="column" w="100%">
                <UserBar />
                <Flex gap="lg" wrap="wrap">
                  <Flex gap="lg" direction="column">
                    <Banner />
                    <Flex miw={800} w={1100} gap="lg">
                      <Notifications />
                      <Pending />
                    </Flex>
                  </Flex>
                  <Lockers />
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        )
      ) : (
        <div> {/* Optional fallback for when matches is false */} </div>
      )}
    </>
  );
}
