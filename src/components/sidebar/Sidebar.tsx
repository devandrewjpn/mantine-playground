import { Navbar } from '@mantine/core';

export const Sidebar = () => {
    return (
        <Navbar height='100%' p="xs" width={{ base: 300 }}>
            <Navbar.Section>{/* Header with logo */}</Navbar.Section>
            <Navbar.Section grow mt="md">{/* Links sections */}</Navbar.Section>
            <Navbar.Section>{/* Footer with user */}</Navbar.Section>
        </Navbar>
    )
}