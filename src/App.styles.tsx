import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
    btn: {
        fontSize: theme.fontSizes.md,
        transition: 'all .5s',
        ':hover': {
            backgroundColor: theme.colors.red[9]
        },
        '::after': {
            content: "'astaton'",
            width: theme.spacing.sm,
            height: theme.spacing.sm,
            display: 'block'
        }
    },
}))
