import { useState } from 'react';
import { IconLogout, IconMessageReport, IconSettings, IconUser } from '@tabler/icons-react';
import { Center, Image, rem, Stack, Tooltip, UnstyledButton } from '@mantine/core';
import classes from './SideMenu.module.css';

interface NavbarLinkProps {
  icon: typeof IconUser;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
        <Icon style={{ width: rem(30), height: rem(30) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const menuData = [
  { icon: IconUser, label: 'Perfil' },
  { icon: IconMessageReport, label: 'Incidencias' },
  { icon: IconSettings, label: 'Configuraciones' },
];

export function SideMenu() {
  const [active, setActive] = useState(0);

  const iconLinks = menuData.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <Center>
        <Image src="./../../assets/logoApp.png" />
      </Center>

      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {iconLinks}
        </Stack>
      </div>

      <Stack justify="center" gap={0}>
        <NavbarLink icon={IconLogout} label="Salir" />
      </Stack>
    </nav>
  );
}
