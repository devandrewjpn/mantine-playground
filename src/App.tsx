import { useState } from 'react'
import { ColorScheme, MantineProvider } from '@mantine/core'
import { AppShell, Navbar, Header, MediaQuery, Button } from '@mantine/core';
import { componentsOverride } from './theme/components';
import { useStyles } from './App.styles'
import { Sidebar } from './components/sidebar/Sidebar';

function TemporaryContent() {

  const [count, setCount] = useState(0)
  const { classes } = useStyles()

  return (
    <div className="App">
      <Button className={classes.btn} color='violet.3' size='xs' uppercase>astaton</Button>
    </div>
  )
}

function App() {

  const [thema, setTheme] = useState<ColorScheme>('dark')

  const handleTheme = () => {
    if (thema == 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <MantineProvider theme={{
      colorScheme: thema, components: componentsOverride
    }} withGlobalStyles withNormalizeCSS>

      <AppShell
        padding="md"
        navbar={
          <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <Sidebar />
          </MediaQuery>
        }
        header={<Header height={60} p="xs">{/* Header content */}</Header>}
        styles={(theme) => ({
          main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
        })}
      >
        <Button onClick={handleTheme} color='purple' size='xs' uppercase>astaton</Button>
        <TemporaryContent />
      </AppShell>
    </MantineProvider>
  )
}

export default App
