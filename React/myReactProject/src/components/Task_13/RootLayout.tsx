import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import { styled, Theme, CSSObject } from '@mui/material/styles';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MuiDrawer from '@mui/material/Drawer';
import { useNavigate } from "react-router-dom";
import TaskAltIcon from '@mui/icons-material/TaskAlt';


const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}))

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        variants: [
            {
                props: ({ open }) => open,
                style: {
                    ...openedMixin(theme),
                    '& .MuiDrawer-paper': openedMixin(theme),
                },
            },
            {
                props: ({ open }) => !open,
                style: {
                    ...closedMixin(theme),
                    '& .MuiDrawer-paper': closedMixin(theme),
                },
            },
        ],
    }),
);

const pages = [
    { name: 'Task 1', path:'/task_1', icon: <TaskAltIcon /> },
    { name: 'Task 2', path:'/task_2', icon: <TaskAltIcon /> },
    { name: 'Task 3', path:'/task_3', icon: <TaskAltIcon /> },
    { name: 'Task 4', path:'/task_4', icon: <TaskAltIcon /> },
    { name: 'Task 5', path:'/task_5', icon: <TaskAltIcon /> },
    { name: 'Task 6', path:'/task_6', icon: <TaskAltIcon /> },
    { name: 'Task 7', path:'/task_7', icon: <TaskAltIcon /> },
    { name: 'Task 8', path:'/task_8', icon: <TaskAltIcon /> },
    { name: 'Task 9', path:'/task_9', icon: <TaskAltIcon /> },
    { name: 'Task 10', path:'/task_10', icon: <TaskAltIcon /> },
    { name: 'Task 11', path:'/task_11', icon: <TaskAltIcon /> },
    { name: 'Task 12', path:'/task_12', icon: <TaskAltIcon /> },

]


const RootLayout = () => {
    const [open, setOpen] = useState<boolean>(true);

    const navigate = useNavigate();


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />            
            <Drawer variant='permanent' open={open}>
                <DrawerHeader>
                    <IconButton onClick={() => setOpen(!open)}>
                        {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {pages.map((page) => (
                        <ListItem
                            key={page.name}
                            disablePadding
                            sx={{ display: 'block' }}
                            onClick={() => navigate(page.path)}
                        >
                            <ListItemButton
                                sx={[{ minWidth: 48, px: 2.5 }, open ? { justifyContent: 'initial' } : { justifyContent: 'center' }]}
                            >
                                <ListItemIcon
                                    sx={[{ minWidth: 0, justifyContent: 'center' }, open ? { mr: 3 } : { mr: 'auto' }]}
                                >
                                    {page.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={page.name}
                                    sx={[open ? { opacity: 1 } : { opacity: 0 }]}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>            
        </Box>
    );
};

export default RootLayout